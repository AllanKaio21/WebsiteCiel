import React from "react";

import "../css/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <section className="bg-gradient-to-b dark:from-gray-900 dark:via-gray-700 dark:to-gray-500 
        from-blue-900 via-blue-700 to-blue-300">
        <div className="home mt-10 pt-6  bg-centermd:pt-0 lg:pt-0 min-h-500 md:h-screen md:bg-cover lg:h-screen lg:bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply">
          <div className="px-4 mx-auto md:bg-cover lg:bg-cover text-center py-1 lg:py-44 bg-transparent">
            <h1 className="py-4 mb-1 md:mb-4 lg:mb-4 text-1xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
              Olá, sou o Ciel!
            </h1>
            <p className="text-1x1 font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
              Então precisa de um som? me adicione ao seu servidor e tenha música do Spotify e YouTube a qualquer momento com simples comandos!
            </p>
          </div>
        </div>
        <div className="w-full justify-center text-center bg-transparent">
          <h3 className="pt-16 mb-10 md:mb-20 lg:mb-20 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Features
          </h3>
          <div className="min-h-full w-full flex flex-col md:flex-row lg:flex-row justify-center">
            <div className="features flex flex-col justify-center bg-gray-700 m-5 border-solid border-1 border-gray-500">
              <h1 className="text-3xl font-extrabold tracking-tight leading-none text-green-400 md:text-4xl lg:text-4xl">
                Spotify
              </h1>
              <h1 className="pt-5 mb-20 text-2xl font-bold text-gray-300 text-center">
                Tem sua playlist favorita no Spotify? Ouça aqui ou pesquise por albuns e faixas do momento!
              </h1>
            </div>
            <div className="features flex flex-col justify-center bg-gray-700 m-5 border-solid border-1 border-gray-500">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-blue-500 md:text-4xl lg:text-4xl">
                Pesquisa
              </h1>
              <h1 className="pt-5 mb-20 text-2xl font-bold text-gray-300 text-center">
                Pesquise por suas músicas favoritas de forma facíl. Encontre suas faixas e playlists favoritas!
              </h1>
            </div>
            <div className="features flex flex-col justify-center bg-gray-700 m-5 border-solid border-1 border-gray-500">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-red-500 md:text-4xl lg:text-4xl">
                YouTube
              </h1>
              <h1 className="p-4 pt-5 mb-20 text-2xl font-bold text-gray-300 text-center">
                Ouça músicas playlist ou faixas do YouTube pesquisando pelo seu nome!
              </h1>
            </div>
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