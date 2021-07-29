import { SearchIcon, ShoppingCartIcon, MenuIcon } from "@heroicons/react/outline"
import Image from "next/image"

function Header2() {
    return (
        <header className="sticky top-0 z-50">
            {/* TOP */}
            <div className="flex bg-amazon_blue items-center flex-grow p-1 py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image 
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                
                <div className="bg-yellow-400 hover:bg-yellow-500 h-10 items-center hidden sm:flex rounded-md flex-grow cursor-pointer">
                    <input type="text" className="rounded-l-md flex-grow h-full p-2 w-6 flex-shrink focus:outline-none px-4" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                <div className="text-white flex items-center text-xs space-x-4 mx-4 whitespace-nowrap">
                    <div className="link">
                        <p>Hello, User</p>
                        <p className="font-extrabold md:text-sm">Accounts & Lists</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-black font-bold text-center">0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="mt-2 hidden md:inline font-extrabold md:text-sm">Basket</p>
                    </div>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="lg:hidden h-6 mr-1" />
                    All
                </p>
                <p className="link">Prime Video</p>
                <p className="link">Amazon Business</p>
                <p className="link">Today's Deals</p>
                <p className="link hidden lg:inline-flex">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkits</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header2
