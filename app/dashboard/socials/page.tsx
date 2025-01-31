"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Socials() {
  return (
    <section className="md:px-4">
      <div className="max-w-wull mx-auto shadow-lg rounded-xl ">
        <h1 className='text-2xl font-bold mb-6'>Social Links</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FaInstagram, placeholder: "Instagram Username" },
              { icon: FaFacebook, placeholder: "Facebook Profile" },
              { icon: FaXTwitter, placeholder: "Twitter Handle" },
              { icon: FaYoutube, placeholder: "YouTube Channel" }
            ].map(({ icon: Icon, placeholder }, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="" size={24} />
                  <label className="text-sm">{placeholder}</label>
                </div>
                <Input
                  placeholder={placeholder}
                  type="text"
                  className="w-full rounded-md"
                />
              </div>
            ))}
          </div>
          <Button
            type="submit"
            className='w-full bg-red-600 hover:bg-red-700 text-white rounded-md py-3 transition-colors duration-300'
          >
            Save Social Links
          </Button>
        </form>
      </div>
    </section>
  )
}