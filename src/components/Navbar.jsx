import {Link} from "react-router-dom";


function Navbar(){

return(

<nav>

<h2>FashionHub</h2>

<ul>

<li>
<Link to="/">Home</Link>
</li>

<li>
<Link to="/products">Products</Link>
</li>

<li>
<Link to="/reviews">Reviews</Link>
</li>

<li>
<Link to="/contact">Contact</Link>
</li>

</ul>

</nav>

)

}

export default Navbar;