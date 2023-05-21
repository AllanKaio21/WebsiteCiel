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
              <h1 className="p-4 pt-5 text-2xl font-bold text-gray-300 text-center">
                Ouça músicas playlist ou faixas do YouTube pesquisando pelo seu nome!
              </h1>
            </div>
          </div>
        </div>
        <div className="end w-full">
          <div className="line mt-44 mb-20 flex w-full items-center justify-center">
            <div className="w-11/12 border-solid border border-slate-400"> </div>
          </div>
          <div className="w-full flex flex-col pl-5">
            <h1 className="flex flex-row text-gray-300 font-bold pb-8 pl-10 text-2xl">
              Contato
            </h1>
            <h1 className="flex flex-row text-gray-300 font-normal">
              <svg className="pr-2 pb-3 h-10 w-10" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
              GitHub, AllanKaio21.
            </h1>
            <h1 className="flex flex-row text-gray-300 font-normal">
              <svg className="pr-2 pb-3 h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" focusable="false">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
              Linkedin, AllanKaio21.
            </h1>
            <h1 className="flex flex-row text-gray-300 font-normal pl-1 pr-1">
              <img className="pr-2 pb-3 h-8 w-8" alt="Gmail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/120px-Gmail_icon_%282020%29.svg.png?20221017173631" decoding="async" data-file-width="512" data-file-height="384"></img>
              Email, AllanKaio276@gmail.com.
            </h1>
          </div>
        </div>
      </section>
    );
  }
}