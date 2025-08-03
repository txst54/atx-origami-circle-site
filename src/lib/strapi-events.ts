// lib/strapi-events.ts
import { format } from "date-fns"
import { useState, useEffect } from "react"

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Define types for our events
export type EventType = "Meeting" | "Exhibition" |"Workshop" | "Special" | "Social Event"
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "all"

export interface Event {
  id: number
  title: string
  date: Date
  startTime: string
  endTime: string
  location: string
  type: EventType
  skillLevel: SkillLevel
  description: string
  maxAttendees?: number
  currentAttendees?: number
}

// Convert Strapi event data to our Event interface
export const mapStrapiEvent = (strapiEvent: any): Event => {
  const eventDate = new Date(strapiEvent.Date);

  // Extract time from the datetime or set defaults
  const startTime = strapiEvent.Date ? format(new Date(strapiEvent.Date), "HH:mm") : "09:00";
  const endTime = strapiEvent.endTime || "17:00"; // Default 8 hours later or use provided endTime

  // Map Strapi Type to our EventType
  const mapType = (strapiType: string): EventType => {
    switch (strapiType?.toLowerCase()) {
      case "workshop":
        return "Workshop";
      case "exhibition":
        return "Exhibition";
      case "meeting":
        return "Meeting";
      case "special":
        return "Special";
      case "social event":
        return "Social Event";
      default:
        return "Workshop"; // fallback default
    }
  };

  return {
    id: strapiEvent.id,
    title: strapiEvent.Title || "Untitled Event",
    date: eventDate,
    startTime,
    endTime,
    location: strapiEvent.Location || "TBD",
    type: mapType(strapiEvent.Type),
    skillLevel: "all", // Default since not in Strapi schema
    description: strapiEvent.Description || "No description provided.",
    maxAttendees: strapiEvent.maxAttendees,
    currentAttendees: strapiEvent.currentAttendees,
  };
};

// Fetch events from Strapi
export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/events?sort=Date:asc`,
      {
        next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch events from Strapi");
    }

    const data = await res.json();
    const mappedEvents: Event[] = (data.data || []).map(mapStrapiEvent);
    return mappedEvents;
  } catch (err) {
    console.error("Error fetching events:", err);
    throw new Error("Failed to load events. Please try again later.");
  }
};

// Get upcoming events (events from today onwards)
export const getUpcomingEvents = (events: Event[], limit?: number): Event[] => {
  const upcoming = events.filter(event => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    return event.date >= today;
  });

  return limit ? upcoming.slice(0, limit) : upcoming;
};

// Get events for a specific date
export const getEventsForDate = (events: Event[], targetDate: Date): Event[] => {
  return events.filter(event => {
    return (
      event.date.getDate() === targetDate.getDate() &&
      event.date.getMonth() === targetDate.getMonth() &&
      event.date.getFullYear() === targetDate.getFullYear()
    );
  });
};

// Filter events by type and skill level
export const filterEvents = (
  events: Event[],
  filters: {
    types: EventType[];
    skillLevels: SkillLevel[];
  }
): Event[] => {
  return events.filter(event => {
    const typeMatch = filters.types.includes(event.type);
    const skillMatch =
      event.skillLevel === "all" ||
      filters.skillLevels.includes(event.skillLevel);

    return typeMatch && skillMatch;
  });
};

// Get badge color class for event type
export const getEventTypeBadgeClass = (eventType: EventType): string => {
  switch (eventType) {
    case "Workshop":
      return "bg-orange-100 text-orange-800";
    case "Exhibition":
      return "bg-purple-100 text-purple-800";
    case "Meeting":
      return "bg-blue-100 text-blue-800";
    case "Special":
      return "bg-pink-100 text-pink-800";
    case "Social Event":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

// Custom hook for events data fetching
export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load events");
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return { events, loading, error, refetch: () => loadEvents() };
};