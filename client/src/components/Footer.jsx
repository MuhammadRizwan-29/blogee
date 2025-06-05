import { assets, footer_data } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      <div className="flex items-start justify-between flex-col md:flex-row gap-10 py-10 border-b bprder-gray-500/30 text-gray-500">
        <div>
          <img
            src={assets.logo}
            alt="Footer Logo"
            className="w-32 sm:w-44 cursor-pointer"
          />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente
            similique vitae dolore, neque, libero modi corrupti quo, optio
            explicabo nostrum ducimus laborum obcaecati atque quis ad error
            corporis velit?
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => {
            return (
              <div key={index}>
                <h3 className="text-base text-gray-900 font-semibold md:mb-5 mb-2">
                  {section.title}
                </h3>
                <ul className="text-sm space-y-1">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="hover:underline transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 &copy; Blogee - All Rights Reserved
      </p>
    </footer>
  );
}
