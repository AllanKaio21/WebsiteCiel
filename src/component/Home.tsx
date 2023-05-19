import React from "react";

import "./Home.css";

export default class Home extends React.Component {
  render() {
    return ( 
      <section className="bg-gray-700 h-auto">
          <div className="home bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                  Olá, sou o Ciel!
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Então precisa de um som? me adicione ao seu servidor e tenha música do Spotify e YouTube a qualquer momento com simples comandos!
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="https://discord.com/oauth2/authorize?client_id=1090405627425198140&permissions=8&scope=applications.commands%20bot"target="_blank" className="inline-flex justify-center items-center py-3 px-10 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        <span className="text-2xl">Invite&nbsp;+</span>
                    </a>
                </div>
            </div>
          </div>
          {/* <div className=" inline-flex flex-row">
            <div className="inline-block">
                <h1 className="mt-10 mb-4 text-1xl font-extrabold tracking-tight leading-none text-white lg:text-2xl">
                  Olá, sou o Ciel!
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Então
                </p>
            </div>
            <div className="inline-block">
                <h1 className="mt-10 mb-4 text-1xl font-extrabold tracking-tight leading-none text-white lg:text-2xl">
                  Olá, sou o Ciel!
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                  Então
                </p>
            </div>
          </div> */}
      </section>
    );
  }
}