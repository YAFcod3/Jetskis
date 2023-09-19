import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8">
      <div className="container mx-auto">
        <div className="text-center md:text-left">
          <h1 className="lg:text-4xl text-3xl font-semibold mb-4">
            <span className="text-teal-400">Free</span> until
          </h1>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-black text-white p-4 rounded hover:bg-blue-700 hover:text-white transition duration-300">
              <h3 className="text-lg font-semibold mb-2 hover:text-teal-400">
                Columna 1
              </h3>
              <p>Contenido de la columna 1</p>
              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-black text-white p-4 rounded hover:bg-blue-700 hover:text-white transition duration-300">
              <h3 className="text-lg font-semibold mb-2 hover:text-teal-400">
                Columna 2
              </h3>
              <p>Contenido de la columna 2</p>
              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 md:mb-0">
            <div className="bg-black text-white p-4 rounded hover:bg-blue-700 hover:text-white transition duration-300">
              <h3 className="text-lg font-semibold mb-2 hover:text-teal-400">
                Columna 3
              </h3>
              <p>Contenido de la columna 3</p>
              <div className="line"></div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <div className="bg-black text-white p-4 rounded hover:bg-blue-700 hover:text-white transition duration-300">
              <h3 className="text-lg font-semibold mb-2 hover:text-teal-400">
                Columna 4
              </h3>
              <p>Contenido de la columna 4</p>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <div className="border-b-2 border-blue-300 pb-2 mb-2"></div>
          <div className="flex justify-center">
            <p className="mx-2 px-6">Términos y Condiciones</p>
            <p className="mx-2 px-6">Política de Privacidad</p>
            <p className="mx-2 px-6">Derechos Reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;


