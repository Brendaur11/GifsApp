import { useState } from 'react';
import { AddCategory, GifGrid } from '../components';
import { Link } from 'react-router-dom'


export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'The Simpsons' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory]);
    }
    

    return (
        <>

            <div className="bg-gray-900 w-full min-h-screen flex flex-col overflow-hidden">
                <header className="absolute inset-x-0 top-0 z-30 mx-auto px-8">
                    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1" id='logo'>
                        <Link to="/" className="-m-1.5 p-1.5 text-gray-200">
                            GIFS<span className='text-indigo-700'>APP</span>
                        </Link>
                    </div>
                    <div className="lg:flex lg:flex-1 lg:justify-end">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWtJREFUWEftVluOgzAMTMgNgjjPtidrOVnZ8yByg5CtERO54EAK3UUrwSdOnPGMX1od/OmD31cngFUGnHNhlKmx1l5zJOu67q61vtFZ7/21qqomde9fAHgQ+hDCd9/3QySpiNq2vSBSYwwYqHcxAIfk3BgDMHVZlvcprZArhCDaJRlWJTgcACUUgdBafymlQHFDkkwjQuI9z0U7ybZLAlYFOQUwO/PJKvg7AGMdE+X0Rdq99zX9GDM8ZjyQUbSCPfYAqY+IScgbCQs7NqKEXVlrB39rdk7lCwDUcVEUF5ZQOL8bABjivSQC4HWeEHs3AInNdwDQfd7TZzmQYZ+x+S6ATZUgXIpsngBEBmiYYPJhAG3lPuFrWQI+zXgrpv85QPjc4K1YWm6SDGDcfnIjOgHkMDCsUTTrmQSzlQx5gDnPV7Gllcw5F33B/6aNaHwk2Zp/fSU7BAA9OqWar1pLtqXSzZYgp/63nDkB/ABKcYIw8aHE8AAAAABJRU5ErkJggg=="/>
                    </div>
                    </nav>
                </header>
               
                <div className="relative isolate px-6 py-10 lg:px-8 flex-1 flex flex-col justify-center max-w-6xl mx-auto">
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

                    <AddCategory 
                        onNewCategory={ (value) => onAddCategory(value) }
                    />

                    { 
                        categories.map( ( category ) => (
                            <GifGrid 
                                key={ category } 
                                category={ category } 
                            />
                        ))
                    }
                
                </div>
            </div>
        </>
    )
}
