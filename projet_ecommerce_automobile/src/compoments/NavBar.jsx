import '../styles/style.css';

function NavBar() {
  return (
      <nav className='item-center content-center'>
          <ul className="flex flex-col lg:flex-row item-center content-center gap-x-8 text-base font-amstelvar">
              <li><a href="#">Home</a></li>
              <li><a href="#"> aAbout</a></li>
              <li><a href="#"> Hot Product</a></li>
              <li><a href="#"> Spare Parts</a></li>
              <li><a href="#"> Appointment</a></li>
              <li><a href="#"> Contact Us</a></li>
          </ul>
      </nav>
  )
}

export default NavBar;