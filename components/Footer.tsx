import { Instagram } from 'lucide-react'
import { CONTACT } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-white">{CONTACT.name}</p>
            <p className="text-sm text-gray-400">
              {CONTACT.company} | {CONTACT.team}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>{CONTACT.instagramHandle}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {CONTACT.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
