import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="m-0 footer bg-gradient-to-r from-blue-900 to-cyan-400 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center md:text-left">
          <h1 className="lg:text-4xl text-3xl font-semibold mb-4">
            <span className="text-teal-400">Free</span> until
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0 flex justify-center">
            <div
              className="bg-black text-white p-4 rounded backdrop-contrast-125 bg-white/30
             hover:bg-blue-700 hover:text-white transition duration-300 flex justify-center flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">Columna 1</h3>
              <a
                href="#"
                className=" hover:text-teal-400 outline outline-offset-2 outline-blue-500"
              >
                Contenido de la columna 1
              </a>
              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0 flex justify-center">
            <div
              className="bg-black text-white p-4 rounded backdrop-contrast-125 bg-white/30
             hover:bg-blue-700 hover:text-white transition duration-300 flex justify-center flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">Columna 2</h3>
              <a
                href="#"
                className=" hover:text-teal-400 outline outline-offset-2 outline-blue-500"
              >
                Contenido de la columna 2
              </a>

              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0 flex justify-center">
            <div
              className="bg-black text-white p-4 rounded backdrop-contrast-125 bg-white/30
             hover:bg-blue-700 hover:text-white transition duration-300 flex justify-center flex-col"
            >
              <h3 className="text-lg font-semibold mb-2 ">Columna 3</h3>

              <a
                href="#"
                className=" hover:text-teal-400 outline outline-offset-2 outline-blue-500"
              >
                Contenido de la columna 3
              </a>

              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 flex justify-center">
            <div
              className=" bg-black text-white p-4 rounded backdrop-contrast-125 bg-white/30
             hover:bg-blue-700 hover:text-white transition duration-300 flex justify-center flex-col"
            >
              <h3 className="text-lg font-semibold mb-2">Columna 4</h3>

              <a
                href="#"
                className=" hover:text-teal-400 outline outline-offset-2 outline-blue-500"
              >
                Contenido de la columna 4
              </a>

              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <div className="border-b-2  border-blue-300 pb-2 mb-2"></div>
          <div className="flex justify-center mt-3">
           
            {/*<a
              href="#"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>*/}

            <Link className="mx-2" href="/contact">
              <FaFacebook className="text-2xl overflow-hidden transition-transform transform hover:scale-110" />
            </Link>


            {/*<a
              href="#"
              className="mx-0 px-1.5 overflow-hidden transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>*/}


            <Link className="mx-2" href="/contact">
              <FaTelegram className="text-2xl overflow-hidden transition-transform transform hover:scale-110" />
            </Link>

            {/*<a
              href="#"
              className="mx-0 px-1.5 overflow-hidden transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-6 w-6 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>*/}

            <Link className="mx-2" href="/contact">
              <FaInstagram className="text-2xl overflow-hidden transition-transform transform hover:scale-110" />
            </Link>

            {/* <a
              href="#"
              className="overflow-hidden transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a> */}


            <Link className="mx-2" href="/contact">
              <FaWhatsapp className="text-2xl overflow-hidden transition-transform transform hover:scale-110" />
            </Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
