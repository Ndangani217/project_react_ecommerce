import '../styles/style.css';
import React, { useState }  from "react";
import Logo from "../images/logo2.svg";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import NavBar from './NavBar';
import Button from "./Button";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex flex-row justify-between items-center p-4 lg:p-6 bg-white">
      
        {/* Logo */}
        <img src={Logo} alt="logo de l'entreprise" className="w-[131px] h-[65px]" />

        {/* Menu de navigation visible uniquement sur les grands écrans */}
        <div className="hidden lg:flex">
            <NavBar />
        </div>

        {/* Icônes de recherche, panier et compte */}
        <div className="flex flex-row items-center gap-x-4">
            
            {/* Barre de recherche visible sur grands écrans */}
            <div className="relative hidden lg:flex items-center text-gray-400 rounded-2xl border-2 border-grayCustom focus-within:text-gray-400">
                <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    autoComplete="off"
                    aria-label="Search"
                    className="pr-2 pl-10 py-1 rounded-2xl font-amstelvar"
                />
                <SearchIcon className="w-4 h-4 absolute ml-3 pointer-events-none" />
            </div>

            {/* Icône du panier */}
            <ShoppingCartIcon className="text-blueCustom cursor-pointer hover:bg-grayCustom hover:opacity-80 transition" />

            {/* Icône du compte */}
            <AccountCircleIcon className="text-blueCustom cursor-pointer hover:bg-grayCustom hover:opacity-80 transition" />
        </div>

        {/* Menu hamburger visible uniquement sur petits écrans */}
        <Button 
          bgColor="bg-white" 
          textColor="text-black" 
          padding="p-2 block lg:hidden" 
          onClick={toggleMenu} 

        >
          <MenuIcon className="text-black text-4xl font-black" />
        </Button>
        {/* Menu de navigation visible uniquement lorsqu'on clique */}
        {isMenuOpen && (
          <div className="absolute top-100 right-0 lg:flex">
              <NavBar />
          </div>
        )}
    </header>
  );
}

export default Header;
