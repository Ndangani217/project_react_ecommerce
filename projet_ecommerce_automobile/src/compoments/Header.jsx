import '../styles/style.css';
import React from "react";
import Logo from "../images/logo2.svg"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavBar from './NavBar';

function Header() {
  return (
    <header className="flex flex-row justify-between item-center content-center bg-white px-14">
        <img src={Logo} alt="logo de l'entreprise" />
        <NavBar/>
        <div className='flex flex-row '>
            <div className="item-center content-center pt-2 relative text-gray-600">
                <input
                    className="border-2 border-gray-300 bg-white w-[240px] h-8 px-4 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                />
                <span
                    type="submit" className="absolute right-0 top-0 mt-2 mr-4 text-gray-600 hover:text-blue-500 focus:outline-none w-3 h-3  ">
                    <SearchIcon/>
                </span>
            </div>
            <div className='item-center content-center'>
                <ShoppingCartIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    </header>
  )
}

export default Header;


/*
<div class="pt-2 relative mx-auto text-gray-600">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
           <Search />
        </button>
      </div>
*/