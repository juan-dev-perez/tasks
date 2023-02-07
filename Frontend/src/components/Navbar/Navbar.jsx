import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className='nav_container'>
      <div>
        <Link className='link_navbar' to='/'>
          Task Control
        </Link>
      </div>
      <ul className='ul_nav'>
        <li className='li_nav'>
          <Link className='link_navbar' to='/'>
            Home
          </Link>
        </li>
        <li className='li_nav'>
          <Link className='link_navbar' to='/new-task'>
            New Task
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar