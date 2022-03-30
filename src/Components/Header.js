import { Link } from 'react-router-dom';

function Header(){
return(
    <header className ='headerMain '>
        <nav className = 'flex flex-jc-sb flex-ai-c'>
    <div className ='logo'>
 <img class= "img"src="image/logo.png" alt="eagle"></img>
    </div>
    <div className ='listMenu'>
   
        <Link to='/'>
            All Meetup's
       </Link>
       <Link to='/favorites'>
            Recent Meetup's
       </Link>
       <Link to='/recent'>
           Favorite Meetup's
        </Link>
   
    </div>
   
      <div className ='signupBtn'><Link to='/favorites'>SignUp</Link></div>
   
    </nav>
    </header>
);
}

export default Header;