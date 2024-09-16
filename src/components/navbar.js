const NavBar = () => {
    return (
        <div className="sticky z-10 top-0 items-start h-12 bg-gray-100 shadow-lg"> 
            <div className="flex flex-row items-center justify-start gap-3 ml-4">
            <a className="sm:text-2xl text-lg font-bold text-red-800 text-center p-1 mt-1" href="/" >HOME</a> <p className="text-2xl mb-1">|</p>
            <text className="sm:text-2xl text-lg font-bold text-red-800 text-center p-1 mt-1" >MULTI.GG</text> <p className="text-2xl mb-1">|</p>
            <text className="sm:text-2xl text-lg font-bold text-red-800 text-center p-1 mt-1" >LIVE</text>
            </div>
        </div>
    );
}

export default NavBar;