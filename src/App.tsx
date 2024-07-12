//imports (safe to remove)
import reactLogo from './assets/svgs/react.svg'
import viteLogo from './assets/svgs/vite.svg'
import tsLogo from './assets/svgs/typescript.svg'
import tailwindcssLogo from './assets/svgs/tailwindcss.svg'
import mkgstr from './assets/imgs/mkgstrLogoC.png';

import './App.css'
import './index.css'
function App() {

  return (
    <>
      {/* Everything in here can be removed. */}
      <div className='w-screen h-screen bg-white'>
        <section className="dark:bg-white rounded-b-3xl dark:text-gray-800">
          <div className="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-1 lg:px-3 xl:max-w-3xl">

            <div className='justify-center hidden w-full grid-cols-2 gap-4 md:grid place-items-center md:grid-cols-4'>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="w-32 h-32 md:h-56 md:w-56 logo react" alt="React logo" />
              </a>

              <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="w-32 h-32 md:h-56 md:w-56 logo" alt="Vite logo" />
              </a>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img src={tsLogo} className="w-32 h-32 md:h-56 md:w-56 logo ts" alt="Vite logo" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <img src={tailwindcssLogo} className="w-32 h-32 md:h-56 md:w-56 logo tws" alt="Vite logo" />
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <img className="h-16 w-16 -mx-1.5" src={reactLogo} alt="" />
              <img className="h-16 w-16 -mx-1.5" src={viteLogo} alt="" />
              <img className="h-16 w-16 -mx-1.5" src={tsLogo} alt="" />
              <img className="h-16 w-16 -mx-1.5" src={tailwindcssLogo} alt="" />
            </div>

            <div>
              <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                <span className="dark:text-[#58C4DC]"> React Typescript</span> Template.
              </h1>
              <p className="px-8 mt-8 mb-5 text-lg md:mb-12">a ready basic react setup template with best technologies along with vite, typescript and tailwindcss </p>
            </div>

            <div>
              <div className='space-y-3'>
                <h1 className='text-3xl'>how to use.</h1>
                <div className='bg-gray-800 h-60 w-96 rounded-t-2xl rounded-xl'>
                  <div className='bg-gray-700 rounded-t-xl'>
                    <span className='flex p-5 space-x-3'>
                      <div className='w-5 h-5 duration-150 bg-gray-500 rounded-full hover:scale-125 hover:bg-red-500'></div>
                      <div className='w-5 h-5 duration-150 bg-gray-500 rounded-full hover:scale-125 hover:bg-yellow-500'></div>
                      <div className='w-5 h-5 duration-150 bg-gray-500 rounded-full hover:scale-125 hover:bg-emerald-500'></div>
                    </span>
                  </div>
                  <div className='z-50 p-5 text-gray-500'>
                    <p className='text-white'>
                      to get started just edit the <code className='text-emerald-500'>src/App.tsx</code><div>then</div>
                    </p>
                    <p className='py-3'><code><span className='text-emerald-500'>$</span> <span className='text-yellow-500'>npm</span> run dev. </code></p>
                    <p className=''> // note: click on the Vite and React and other logos to learn more.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <a href='https://github.com/r-mikegester?tab=repositories' target='_blank' className="px-8 py-3 m-2 text-lg duration-150 ease-in-out border-4 border-transparent text-emerald-900 rounded-xl hover:text-white hover:scale-110 dark:text-gray-900 dark:bg-transparent hover:border-emerald-600 hover:bg-emerald-600">More Templates</a>
            </div>

            <div className='flex justify-center w-screen p-3 md:mt-10'>
              <div className='flex flex-col items-center space-y-2'>
                <a href="https://mikegester.vercel.app" target="_blank" className='flex flex-col items-center justify-center logo mkgstr'>
                  <img src={mkgstr} className='w-20 h-20 md:h-32 md:w-32 ' />
                  <h2 className='text-2xl font-medium text-emerald-900'>Mike Gester </h2>
                </a>
              </div>
            </div>
          </div>


        </section>
        <div>


        </div>


      </div>
      {/* Everything in here can be removed. */}
    </>
  )
}

export default App
