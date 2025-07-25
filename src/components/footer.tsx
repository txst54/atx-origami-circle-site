import {Sparkles} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white"/>
              </div>
              <span className="text-lg font-semibold text-gray-900">Austin Origami Circle</span>
            </div>
            <p className="text-gray-600 text-sm">Bringing the ancient art of paper folding to the heart of Texas.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Community</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                About Us
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Events
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Gallery
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Blog
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Tutorials
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Patterns
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Supplies
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Connect</h3>
            <div className="space-y-2 text-sm">
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Newsletter
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Social Media
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-gray-900">
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2025 Austin Origami Circle. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}