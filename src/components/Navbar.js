import React,{useState} from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState("hidden");
    const toggleHandler = () => {
        showMenu === "hidden"? setShowMenu("block"): setShowMenu("hidden")
    }
    return (
        <div className='md:col-span-1 md:flex md:justify-end'>
                <nav className='text-right'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
                            <a href='/' className='hover:text-gray-700'>Yummy Food</a></h1>
                    
                    <div className={`px-4 cursor-pointer md:hidden`} onClick={toggleHandler}>
                    <svg className='w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                    </div>
                    </div>
                <ul className={`text-sm mt-6 ${showMenu} md:block`}>
                        <li className='text-gray-700 font-bold py-1'>
                            <a href='/' className='px-4 flex justify-end border-r-4 border-primary'>
                            <span >Home</span>
                            <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                            </a>
                        </li>
                        <li className='py-1'>
                            <a href='/about' className='px-4 flex justify-end border-r-4 border-white'>
                            <span>About</span>
                            <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

                            </a>
                        </li>
                        <li className='py-1'>
                            <a href='/contact' className='px-4 flex justify-end border-r-4 border-white'>
                                <span>Contact</span>
                        <svg className='w-5 ml-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

                        </a></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Navbar;
