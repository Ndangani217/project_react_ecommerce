import '../styles/style.css';

function NavBar() {
  return (
      <nav className='item-center content-center'>
          <ul className="flex flex-row item-center content-center gap-x-8 text-base font-amstelvar">
              <li className="active:text-blueCustom">Home</li>
              <li>About</li>
              <li>Hot Product</li>
              <li>Spare Parts</li>
              <li>Appointment</li>
              <li>Contact Us</li>
          </ul>
      </nav>
  )
}

export default NavBar;

/*
justify-between
*/