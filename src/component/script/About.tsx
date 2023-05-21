import React from "react";

import "../css/About.css";

export default class About extends React.Component {
  render() {
    return (
        <section className="bg-gradient-to-b dark:from-gray-900 dark:via-gray-700 dark:to-gray-500 
        from-blue-900 via-blue-700 to-blue-300">
          <div className="my-16 w-full flex flex-col md:flex-row lg:flex-row items-center">
            <img className="justify-start w-1/3" src="../images/chibi_standing.png" alt="chibi"/>
            <div className="mb-10 flex flex-col justify-end">
              <h1 className="pb-5 text-blue-500 md:mb-4 lg:mb-4 text-1xl font-extrabold md:text-5xl lg:text-6xl">
                Sobre mim ?
              </h1>
              <p className="text-1x1 font-normal text-center text-gray-300 md:text-3xl lg:text-3xl sm:px-16 lg:px-48">
                Sou o Ciel, um bot que adora um bom som, criado apenas para trazer alegria ao seu servidor. Com músicas para os tipos e gostos!
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row items-center">
            <div className="mb-10 flex flex-col justify-start">
              <h1 className="pb-5 text-blue-500 md:mb-4 lg:mb-4 text-1xl font-extrabold md:text-5xl lg:text-6xl">
                O que posso fazer?
              </h1>
              <p className="text-1x1 font-normal text-center text-gray-300 md:text-3xl lg:text-3xl sm:px-16 lg:px-48">
                Tenho uma lista de comandos interativos para você ter total controle do prefere ouvir, desde pesquisas por faixas e playlist, tanto no Spotify ou Youtube. Apenas me convide a sua Guilda e aproveite!
              </p>
            </div>
            <img className="justify-end w-1/3" src="../images/chibi_happy.png" alt="chibi"/>
          </div>
          <div className="w-full flex flex-col md:flex-row lg:flex-row items-center">
            <img className="justify-start w-1/3" src="../images/chibi_slime.png" alt="chibi"/>
            <div className="mb-10 flex flex-col justify-end">
              <h1 className="pb-5 text-blue-500 md:mb-4 lg:mb-4 text-1xl font-extrabold md:text-5xl lg:text-6xl">
                Humm... Slime?
              </h1>
              <p className="text-1x1 font-normal text-center text-gray-300 md:text-3xl lg:text-3xl sm:px-16 lg:px-48">
                Uma Slime não é considerado humano ou humanóide, sendo imune a magias e efeitos que afetam apenas estas criaturas.
              </p>
            </div>
          </div>
          <div className="flex justify-start">
            <h1 className="items-start text-blue-900 font-bold">
                GitHub: https://github.com/AllanKaio21
            </h1>
          </div>
        </section>
    );
  }
}