import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";


const socials = [
  {
    icon: <FaFacebook />,
    href: "",
  },
  {
    icon: <FaInstagram />,
    href: "",
  },
  {
    icon: <FaXTwitter />,
    href: "",
  },
  {
    icon: <FaYoutube />,
    href: "",
  },
]
export default function Socials() {
  return (
    <section className="bg-gradient-to-b flex justify-center items-center text-background my-[4rem] rounded-2xl lg:h-[40vh] md:h-[30vh] h-[20vh] from-zinc-900 via-zinc-950 to-black">
      <div className="flex flex-col flex-wrap justify-center items-center gap-5">
        <h1 className="lg:text-3xl text-xl font-bold">Follow us on</h1>
        <ul className="flex flex-wrap justify-center items-center gap-10">
          {
            socials.map((item, idx) => (
              <li key={idx} className="">
                <a href={item.href} className="text-3xl">
                  {item.icon}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}
