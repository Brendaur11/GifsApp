import { Link } from 'react-router-dom'

export default function Example() {

  return (
    <div className="bg-gray-900 w-full min-h-screen flex flex-col overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-30 mx-auto px-8">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1" id='logo'>
            <a href="#" className="-m-1.5 p-1.5 text-gray-200">
              GIFS<span className='text-indigo-700'>APP</span>
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWtJREFUWEftVluOgzAMTMgNgjjPtidrOVnZ8yByg5CtERO54EAK3UUrwSdOnPGMX1od/OmD31cngFUGnHNhlKmx1l5zJOu67q61vtFZ7/21qqomde9fAHgQ+hDCd9/3QySpiNq2vSBSYwwYqHcxAIfk3BgDMHVZlvcprZArhCDaJRlWJTgcACUUgdBafymlQHFDkkwjQuI9z0U7ybZLAlYFOQUwO/PJKvg7AGMdE+X0Rdq99zX9GDM8ZjyQUbSCPfYAqY+IScgbCQs7NqKEXVlrB39rdk7lCwDUcVEUF5ZQOL8bABjivSQC4HWeEHs3AInNdwDQfd7TZzmQYZ+x+S6ATZUgXIpsngBEBmiYYPJhAG3lPuFrWQI+zXgrpv85QPjc4K1YWm6SDGDcfnIjOgHkMDCsUTTrmQSzlQx5gDnPV7Gllcw5F33B/6aNaHwk2Zp/fSU7BAA9OqWar1pLtqXSzZYgp/63nDkB/ABKcYIw8aHE8AAAAABJRU5ErkJggg=="/>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 flex-1 flex flex-col justify-center">
        <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        <div
            style={{
            clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#343bf9] to-[#3489f9] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        </div>
        <div className="mx-auto max-w-2xl py-32 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center font-medium">
              <div className="relative px-3 text-sm/6 text-indigo-400">
               Bienvenido a GIFSAPP
              </div>
          </div>
          <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-200 sm:text-7xl" id='titulo'>
               GIFS<span className='text-indigo-700'>APP</span>
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
               GIFSAPP is a web application that allows you to search and share GIFs from the Giphy API. It is built with React, Tailwind CSS, and Vite. 
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                to="/busqueda"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Buscar gifs
              </Link>
              </div>
          </div>
        </div>
        <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
              style={{
              clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#343bf9] to-[#3489f9] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
