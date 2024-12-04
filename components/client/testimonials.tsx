import { testimonials } from "@/consts"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonials() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Putting you first in your study abroad journey</h2>
        <p className="text-lg text-gray-600 mb-12">
          We are thrilled to have been a part of 60,000+ successful student stories. Hear a few of their experiences
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#002244] hover:bg-[#0a2351] text-white p-6 rounded-lg shadow-md flex flex-col h-full">
              <div className="flex-grow">
                <div className="flex items-start mb-4">
                  <span className="text-4xl mr-2"><Quote /></span>
                  <p className="text-sm">{testimonial.text}</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <Image
                  src={testimonial.image}
                  alt={`Profile picture of ${testimonial.name}`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-3 text-left">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



