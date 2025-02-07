import { routes } from "../datas/Routes.js";

function NavBar({ isOpen }) {
  const listItems = routes.map((link) => (
    <li key={link.id} className="hover:bg-white p-2 lg:p-2 lg:items-center">
      <a className="text-base font-amstelvar hover:text-blueCustom duration-500" href={link.href}>
        {link.title}
      </a>
    </li>
  ));

  return (
    <nav
      className={`w-full md:w-auto lg:w-auto absolute md:static transition-all duration-500 ease-in bg-grayCustom md:bg-transparent ${
        isOpen ? "top-20 opacity-100" : "top-[-490px] opacity-0"
      } md:opacity-100 md:top-auto`}
    >
      <ul className="flex flex-col md:flex-row py-4">
        {listItems}
      </ul>
    </nav>
  );
}

export default NavBar;
