import {LOGO_URL} from "../constants/constants"

const Header = () => (
     <div className="header">
	  <div className="logo-container">
	     <img className="logo" src ={LOGO_URL} />
	  </div>
	  <div className="nav-items">
	   <ul>
	      <li>Home</li>
		  <li>About us</li>
		  <li>Contact us</li>
		  <li>Cart</li>
	   </ul>
	  </div>
	 </div>
  );
  
export default Header;