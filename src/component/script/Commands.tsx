import React from "react";

export default class Commands extends React.Component {
  render() {
    return (
        <section className="bg-gradient-to-b dark:from-gray-900 dark:via-gray-700 dark:to-gray-500 
        from-blue-900 via-blue-700 to-blue-300">
            <div className="my-16 w-screen flex flex-col items-center">
                <div className="mt-10 flex flex-col justify-center">
                    <h1 className="pb-5 text-blue-500 md:mb-4 lg:mb-4 text-1xl font-extrabold md:text-3xl lg:text-4xl">
                        Comandos
                    </h1>
                    <p className="text-1x1 font-normal text-center text-gray-300 md:text-2xl lg:text-3xl sm:px-16 lg:px-48">
                        Aqui trago a você todos os comandos que posso atender!
                    </p>
                </div>
                <div className="mb-10 pt-10 w-full flex flex-col items-center">
                    <div className="card w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                play 
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Pesquise por músicas ou passe um link de uma playlist do YouTube.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                search
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Pesquise por faixas ou albuns no Spotify.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                skip
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Pule faixas dentro da sua lista de reprodução.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                pause
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Pausar a reprodução atual.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                resume
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Voltar a tocar faixa.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                stop
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Parar de tocar lista de reprodução.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                loop
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Repetir faixa atual.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                stoploop
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Parar repetição de faixa atual.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                volume
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Definir volume da música.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                leave
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Me tirar do canal de voz.
                            </p>
                        </div>
                    </div>
                    <div className="card mt-4 w-screen md:w-10/12 lg:w-10/12 flex flex-row items-center">
                        <div className="flex flex-row bg-gray-900 rounded-3xl h-16 w-1/5 items-center">
                            <svg className="w-10 ml-3" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.11111 0C1.39289 0 0 1.39289 0 3.11111V24.8889C0 26.6072 1.39289 28 3.11111 28H24.8889C26.6072 28 28 26.6072 28 24.8889V3.11111C28 1.39289 26.6072 0 24.8889 0H3.11111ZM21.6214 8.42207L19.4216 6.22219L6.22222 19.4216L8.4221 21.6214L21.6214 8.42207Z" fill="#303038"></path></svg>
                            <h1 className="ml-4 mb-1 text-gray-300  text-1xl font-extrabold md:text-2xl lg:text-3xl">
                                help
                            </h1>
                        </div>
                        <div className="ml-4 pl-6 flex flex-row bg-gray-900 rounded-3xl h-16 w-10/12 items-center">
                            <p className="text-1x1 text-center font-normal text-gray-700 md:text-2xl lg:text-2xl">
                                Mostrar todos os comandos disponiveis!
                            </p>
                        </div>
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