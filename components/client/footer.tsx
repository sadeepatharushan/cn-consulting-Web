import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      <div className="container mx-auto px-4">
        {/* Separation line */}
        <hr className="border-gray-200 " />
        
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center mb-4 md:mb-0">
            <a href="#" className="mx-2 my-1 hover:text-gray-900">About</a>
            <a href="#" className="mx-2 my-1 hover:text-gray-900">Services</a>
            <a href="#" className="mx-2 my-1 hover:text-gray-900">Contact</a>
            <a href="#" className="mx-2 my-1 hover:text-gray-900">Privacy Policy</a>
          </div>
          <div className="flex">
            <a href="#" className="mx-2 hover:text-gray-900" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="mx-2 hover:text-gray-900" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="mx-2 hover:text-gray-900" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="mx-2 hover:text-gray-900" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}