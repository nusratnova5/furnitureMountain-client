import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import logo from '../Header/Logo/logo.jpg'

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handlelogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err =>console.log(err));
  }
    return (
        <div>
            <div className="navbar bg-cyan-700">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      {/* responsive */}
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl text-white font-bold"><img src={logo} alt=''className='h-15 w-10 p-2'/>Furniture Mountain</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
        user?.uid?
        <>
        <li><Link to='/' className='text-white'>Home</Link></li>
        <li><Link to='/dashboard' className='text-white'>Dashboard</Link></li>
        <li><Link to='/blog' className='text-white'>Blog</Link></li>
        </>
        :
        <>
        <li><Link to='/' className='text-white'>Home</Link></li>
        <li><Link to='/blog' className='text-white'>Blog</Link></li>
        </>
        
      }
      
      
    </ul>
  </div>
  <div className="navbar-end gap-3">
    
    {
      user?.uid?
      <>
      <Link to='' className="btn className='text-white'"><button onClick={handlelogOut}>SIGN OUT</button></Link>
      </>
      :
      <>
      <Link to='/register' className="btn className='text-white'">SIGN UP</Link>
      <Link to='/login' className="btn className='text-white'">SIGN IN</Link>
      </>
      
    }
  </div>
</div>
        </div>
    );
};

export default Header;