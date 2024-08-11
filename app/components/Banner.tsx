import Image from "next/image";

export const Banner = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl dark:bg-black">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <Image
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src="/img/building.jpg" // Adjusted path
                        alt="Modern building architecture"
                        width={500} // Provide the actual width
                        height={500} // Provide the actual height
                    />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline dark:text-white">Incredible accommodation for your team</a>
                    <p className="mt-2 text-slate-500 dark:text-slate-50">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                </div>
            </div>
        </div>
    );
}
