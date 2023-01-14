import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgCloseR } from 'react-icons/cg';

const Header = () => {
    const menu = <>
        <Link className='btn btn-ghost' to='/'>Home</Link>
        <Link className='btn btn-ghost' to='/about'>About</Link>

    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 font-semibold uppercase">Laptop Bazar</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menu}
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-1/2 bg-base-100">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <CgCloseR className='w-7 h-7'></CgCloseR>
                        </label>
                    </div>
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;