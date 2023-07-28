import heroImage from './assets/robothand.png'

function App() {
    return (
        <main className="min-h-screen min-w-screen dark:text-white dark:bg-zinc-900">
            <div className="pt-16 lg:flex lg:place-items-center lg:justify-between">
                <div className="px-4 lg:pl-32">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        I build things with machine learning
                    </h1>
                    <p className="mt-6 text-slate-600 dark:text-slate-400">
                        Hello, my name is Shawn! I like experimenting with machine learning algorithms.
                        Currently, I study Data Science at Ngee Ann Polytechnic.
                    </p>
                </div>
                <div className="max-w-screen-lg">
                    <img src={heroImage} alt="heroimage" className='relative right-0'/>
                </div>
            </div>
        </main>
    )
}

export default App
