import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home(){


const slides = [

"https://mir-s3-cdn-cf.behance.net/project_modules/1400/afc580168797461.6440e48791cf8.jpg",

"https://images.unsplash.com/photo-1496747611176-843222e1e57c",

"https://images.unsplash.com/photo-1485968579580-b6d095142e6e",

"https://images.unsplash.com/photo-1483985988355-763728e1935b",

"https://images.unsplash.com/photo-1490481651871-ab68de25d43d",

"https://images.unsplash.com/photo-1529139574466-a303027c1d8b"

];



const [image,setImage] = useState(0);



useEffect(()=>{


const timer = setInterval(()=>{

setImage((prev)=>(prev + 1) % slides.length);


},2500);



return ()=> clearInterval(timer);



},[]);





const products=[

{
name:"Denim Jeans",
price:"999",
img:"https://images.unsplash.com/photo-1542272604-787c3835535d",
description:"Premium denim jeans with modern fitting and durable fabric."
},

{
name:"Winter Jacket",
price:"1499",
img:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
description:"Stylish jacket designed to keep you warm and fashionable."
},

{
name:"Fashion Wear",
price:"1299",
img:"https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?cs=srgb&dl=fashion-model-blur-325876.jpg&fm=jpg",
description:"Trendy fashion collection made for a confident modern look."
},

{
name:"Premium Outfit",
price:"1799",
img:"https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?cs=srgb&dl=pexels-ylanite-koppens-934070.jpg&fm=jpg",
description:"Elegant outfit with premium quality fabric and unique design."
}

];

return (

<>

<section className="hero">

<div className="hero-text">
<h4>NEW COLLECTION 2026</h4>
<h1>
Style That
<br/>
Defines You
</h1>

<p>
Discover latest fashion trends and premium
quality clothes for your lifestyle.
</p>
<Link to="/products">
<button>Shop Now</button>
</Link>

</div>

<img 
key={image}
className="slider-img"
src={slides[image]}
alt="fashion"
/>

</section>

<section className="features">
<div className="feature-card">
<img 
className="feature-img"
src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"

alt="shipping"
/>
<h2>Free Shipping</h2>
<p>On orders above ₹999</p>
<p>Fast and safe delivery at your doorstep.</p>
</div>

<div className="feature-card">
<img 
className="feature-img"
src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
/>

<h2>Best Quality</h2>
<p>Premium Products</p>

<p>Premium fabrics with stylish designs.</p>
</div>

<div className="feature-card">
<img 
className="feature-img"
src="https://cdn-icons-png.flaticon.com/512/1828/1828843.png"
/>

<h2>Easy Returns</h2>
<p>30 Days Return Policy</p>
<p>Easy return policy for a better shopping experience.</p>
</div>

<div className="feature-card">
<img 
className="feature-img"
src="https://cdn-icons-png.flaticon.com/512/891/891419.png"
/>
<h2>Secure Payment</h2>
<p>100% Secure Payment</p>
<p>Safe and secure payment methods.</p>
</div>

</section>
<h1 className="title">Explore Our Latest Collection</h1>
<div className="products">
{
products.map((item,index)=>(
<div className="home-card" key={index}>
<img 
src={item.img} 
alt={item.name}
/>

<h3>{item.name}
</h3>

<h4>
₹{item.price}
</h4>
<p className="product-desc">{item.description}</p>

<button>Buy Now</button>

</div>
))}
</div>

<section className="zigzag">
<div className="zig-row">
<img 
src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10"
alt="shirt"
/>
<div>
<h1>Premium Shirts</h1>
<p>Comfortable fabric with modern design.Perfect style for everyday wear.</p>
<p>⭐⭐⭐⭐⭐ 4.8 (2,500+ Reviews)</p>
<p>Starting from ₹799</p>
<p>Flat 30% OFF</p>
</div>
</div>

<div className="zig-row reverse">
<img 
src="https://images.unsplash.com/photo-1551028719-00167b16eac5"
alt="jacket"
/>

<div>
<h1>Winter Collection</h1>
<p>Stay stylish with our latest jacketsand winter fashion collection.</p>
<p>⭐⭐⭐⭐⭐ 4.6 (973 Reviews)</p>
<p>Starting from ₹999</p>
<p>Flat 19% OFF</p>
</div>
</div>
</section>
<div className="zig-row">
<img 
src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
alt="tshirt"
/>
<div>
<h1>Casual T-Shirt Collection</h1>
<p>Soft fabric and trendy designs.Perfect for daily wear and comfort.</p>
<p>⭐⭐⭐⭐⭐ 4.4 (1200+ Reviews)</p>
<p>Starting from ₹499</p>
</div>
</div>
<div className="zig-row reverse">
<img 
src="https://images.unsplash.com/photo-1542272604-787c3835535d"
alt="jeans"
/>
<div>
<h1>Denim Jeans</h1>
<p>Premium denim jeans with modern fittingfor every style.</p>
<p>⭐⭐⭐⭐⭐ 4.8 (864 Reviews)</p>
<p>Starting from ₹499</p>
<p>Flat 30% OFF</p>
</div>
</div>

<section className="why-style">
<div className="why-image">
<img 
src="https://images.unsplash.com/photo-1445205170230-053b83016050"
alt="fashion"
/>
</div>

<div className="why-content">
<h1>Why Choose Style Hub</h1>

<p>We bring you premium fashion with quality fabric,modern designs and styles made for everyday confidence.</p>

<div className="why-points">
<div><h2>✨</h2>
<h3>Premium Quality</h3>
<p>Best fabrics and comfortable designs.</p>
</div>

<div>
    <h2>🚚</h2>
<h3>Fast Delivery</h3>
<p>Quick delivery at your doorstep.</p>
</div>

<div>
<h2>👕</h2>
<h3>Latest Trends</h3>
<p>Fashion that matches your style.</p>
</div>
</div>
</div>
</section>
</>
)}
export default Home;