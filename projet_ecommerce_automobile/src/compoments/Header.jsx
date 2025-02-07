import "../styles/style.css";
import React, { useState } from "react";
import Logo from "../images/logo2.svg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import NavBar from "./NavBar";
import Button from "./Button";

function Header() {
  const [Open, setOpen] = useState(false);

  return (
      <header className="relative flex flex-row justify-between items-center py-2 lg:p-6 bg-white">
          {/* Logo */}
          <img src={Logo} alt="logo de l'entreprise" className="w-[131px] h-auto " />

          {/* Menu de navigation visible uniquement sur les grands écrans */}
          <NavBar isOpen={Open} />


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
                    className="pr-2 pl-10 py-1 rounded-2xl font-amstelvar focus:outline-none"
                  />
                  <SearchIcon className="absolute left-3 text-gray-500" />
              </div>
              {/* Icône du panier */}
              <ShoppingCartIcon className="text-blueCustom cursor-pointer hover:bg-grayCustom hover:opacity-80 transition-all duration-200" />

              {/* Icône du compte */}
              <AccountCircleIcon className="text-blueCustom cursor-pointer hover:bg-grayCustom hover:opacity-80 transition-all duration-200" />
          </div>

          {/* Menu hamburger pour petits écrans */}
          <div
                onClick={() => setOpen(!Open)}
                className="text-3xl right-8 top-6 cursor-pointer md:hidden"
              >
                <ion-icon name={Open ? "close" : "menu"}></ion-icon>
              </div>

          {/* Alternative avec Material-UI si Ionicons n'est pas installé */}
          {/* 
          <Button
            bgColor="bg-white"
            textColor="text-black"
            padding="p-2 block lg:hidden"
            onClick={() => setOpen(!Open)}
          >
            <MenuIcon className="text-black text-4xl font-black" />
          </Button> 
          */}
      </header>
  );
}

export default Header;
