import './Navbar.css';

const Navbar = () => {

  return (
    <div className='nav_container'>
      <div>Task Control</div>
      <ul className='ul_nav'>
        <li className='li_nav'>Home</li>
        <li className='li_nav'>New task</li>
      </ul>
    </div>
  )
}

export default Navbar