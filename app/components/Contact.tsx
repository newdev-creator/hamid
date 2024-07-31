import React from "react";
import TitleSection from "./titles/TitleSection";
import TitleCard from "./titles/TitleCard";
import { Mail, MapPin, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import Instagram from "./icons/Instagram";
import Facebook from "./icons/Facebook";

export default function Contact() {
  return (
    <>
      <TitleSection
        title="contact"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum ex, eius architecto voluptate quibusdam, ratione, molestias at dolores culpa natus quia impedit. Porro, quae. Totam minima tempore enim accusantium repellendus, nihil laudantium qui excepturi in cumque praesentium assumenda id at porro sit, culpa fugit delectus, vero expedita eum non?"
        position="text-center"
      />
      <div className="container mx-auto px-4 mt-20">
        <div className="bg-fontBlack text-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
          <TitleCard titleCard="contact" />
          <p className="mb-4">Say something to start a live chat!</p>

          {/* infos contact */}
          <div>
            <div className="mb-4 flex items-center">
              <PhoneCall className="w-7 h-7 mr-2" />
              <span>+1012 3456 789</span>
            </div>
            <div className="mb-4 flex items-center">
              <Mail className="w-7 h-7 mr-2" />
              <span>demo@gmail.com</span>
            </div>
            <div className="mb-4 flex items-center">
              <MapPin className="w-10 h-10 mr-2" />
              <span>
                132 Dartmouth Street, Boston, Massachusetts 02156 United States
              </span>
            </div>
          </div>

          {/* form */}
          <div>FORM</div>

          {/* social networks */}
          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              <Instagram />
            </Link>
            <a href="#" className="text-yellow-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-yellow-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-yellow-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="bg-yellow-600 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="bg-fontBlack text-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p className="mb-4">Say something to start a live chat!</p>
            <div className="mb-4 flex items-center">
              <PhoneIcon className="w-5 h-5 text-green-500 mr-2" />
              <span>+1012 3456 789</span>
            </div>
            <div className="mb-4 flex items-center">
              <MailIcon className="w-5 h-5 text-green-500 mr-2" />
              <span>demo@gmail.com</span>
            </div>
            <div className="mb-4 flex items-center">
              <LocationMarkerIcon className="w-5 h-5 text-green-500 mr-2" />
              <span>
                132 Dartmouth Street, Boston, Massachusetts 02156 United States
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-yellow-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9994545041427!2d2.292292315674318!3d48.85884407928785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1df9e4b81b%3A0xf4eeb04c4ac5f6e4!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1629991596893!5m2!1sen!2sfr"
              width="100%"
              height="400"
              allowFullScreen={false}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div> */}
    </>
  );
}
