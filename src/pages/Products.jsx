import { useState, useEffect } from "react";
import "../css/style.css";

import offer1 from "../assets/offer1.png";
import offer2 from "../assets/offer2.png";
import offer3 from "../assets/offer3.png";

export default function Products() {

const offers = [
  { image: offer1 },
  { image: offer2 },
  { image: offer3 }
  
];

const products = [



{
name:"Floral Dress",
category:"women",
rating:"4.4⭐",
price:799,
img:"https://myquickurl.com/inspireinlet.com/69-inspireinlet_20250123001706.webp"
},

{
name:"Black Hoodie",
category:"hoodie",
rating:"4.2⭐",
price:559,
img:"https://thfvnext.bing.com/th?id=OIF.TyD8OiLUZc5poxdoCu%2bNFQ&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
name:"White T-Shirt",
category:"tshirt",
rating:"4.1⭐",
price:209,
img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
name:"Designer Saree",
category:"saree",
rating:"4.7⭐",
price:699,
img:"https://www.karagiri.com/cdn/shop/products/patola-saree-magenta-pink-patola-saree-silk-saree-online-32259700949185_1200x1200.jpg?v=1651150218"
},

{
name:"Slim Fit Jeans",
category:"jeans",
rating:"4.4⭐",
price:199,
img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/21695422/2023/3/10/85f2e0a7-a5ea-448f-84cd-77c7e5e712c91678424141875-Blue-CottonPolyLycra-Slim-Fit-Jeans-6771678424141175-1.jpg"
},

{
name:"Classic White Shirt",
category:"men",
rating:"4.3⭐",
price:369,
img:"https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500"
},

{
name:"Ethnic Suit",
category:"suit",
rating:"4.8⭐",
price:499,
img:"https://peachmode.com/cdn/shop/files/2_AARD-2030-PEACH-PEACHMODE_668a600e-6d6d-4541-bfdc-944db530c57e.jpg?v=1713521914"
},

{
name:"Gym T-Shirt",
category:"sports",
rating:"4.5⭐",
price:379,
img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/527090/30/mod01/fnd/IND/fmt/png/Men's-Active-Training-Mesh-T-shirt"
},

{
name:"Blue Denim Shirt",
category:"men",
rating:"4.5⭐",
price:299,
img:"https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=500"
},
{
name:"Mans Baggy jeans ",
category:"men",
rating:"4.8⭐",
price:699,
img:"https://tse2.mm.bing.net/th/id/OIP.VVSXyPxy46ZhT__MGTaSggHaLG?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
name:"Premium Polo Shirt",
category:"men",
rating:"4.5⭐",
price:359,
img:"https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=500"
},

{
name:"Slim Fit Shirt",
category:"men",
rating:"4.2⭐",
price:499,
img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500"
},
{
name:"Leather Jacket",
category:"men",
rating:"4.5⭐",
price:899,
img:"https://thegenuineleather.com/wp-content/uploads/2019/12/Mens-Brown-Casual-Leather-Jacket.jpg"
},

{
name:"Black Jeans",
category:"men",
rating:"4.5⭐",
price:499,
img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"
},

{
name:"Checked Shirt",
category:"men",
rating:"4.1⭐",
price:619,
img:"https://tse2.mm.bing.net/th/id/OIP.iI7Bl49yQb2ZfYexPV9qgQHaJD?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
},

{
name:"Summer Dress",
category:"women",
rating:"4.5⭐",
price:599,
img:"https://i.pinimg.com/originals/e7/15/32/e7153230bb4df4d3255bc6b3bc6b8c9a.jpg"
},

{
name:"Printed Kurti",
category:"women",
rating:"4.7⭐",
price:1999,
img:"https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2024/AUGUST/21/kM7wZTAT_8f3564b45d824c08967363db9b94b891.jpg"
},


{
name:"Office wear",
category:"women",
rating:"5⭐",
price:3199,
img:"https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1675704431-1613HCS_JAYDA_SOFTCAMELMULTIHOUNDSTOOTH_6751.jpg?crop=0.889xw:1xh;center,top&resize=980:*"
},
{
name:"Beutiful Hoodie",
category:"women",
rating:"4.2⭐",
price:1299,
img:"https://5.imimg.com/data5/SELLER/Default/2022/10/SD/EL/RN/70629218/women-hoodies-1000x1000.jpg"
},
{
name:"Party Wear Dress",
category:"women",
rating:"4.3⭐",
price:999,
img:"https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500"
},
{
name:"Women night  set ",
category:"women",
rating:"4.0⭐",
price:499,
img:"https://i.etsystatic.com/13321184/r/il/7d172d/2285475059/il_1588xN.2285475059_5clj.jpg"
},

{
name:"Cotton Saree",
category:"women",
rating:"4.8⭐",
price:4999,
img:"https://jaipuriaapparels.com/cdn/shop/files/DSC_6175copy_47adab1d-88df-4462-b232-8f3655732ff8.jpg?v=1718978775&width=940"
},

{
name:"Blue Cotton T-Shirt",
category:"tshirt",
rating:"4.2⭐",
price:629,
img:"https://media.landmarkshops.in/cdn-cgi/image/h=831,w=615,q=85,fit=cover/max-new/1000015594521-Blue-LIGHTBLUE-1000015594521_01-2100.jpg"
},
{
name:"Oversized T-Shirt",
category:"tshirt",
rating:"4.3⭐",
price:599,
img:"https://cdna.lystit.com/1040/1300/n/photos/3904-2015/11/22/asos-white-super-oversized-sleeveless-t-shirt-in-heavy-weight-fabric-product-2-208291460-normal.jpeg"
},
{
name:"Graphic Tee",
category:"tshirt",
rating:"4.4⭐",
price:383,
img:"https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=500"
},

{
name:"Casual T-Shirt",
category:"tshirt",
rating:"4.3⭐",
price:299,
img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500"
},

{
name:"Premium Cotton Tee",
category:"tshirt",
rating:"4.5⭐",
price:1899,
img:"https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500"
},
{
name:"Round Neck T-Shirt",
category:"tshirt",
rating:"4.5⭐",
price:299,
img:"https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500"
},


{
name:"Running Shorts",
category:"sports",
rating:"4.6⭐",
price:399,
img:"https://runbryanrun.com/wp-content/uploads/2022/04/rabbit-running-clothes.jpg"
},
{
name:"Training Tracksuit",
category:"sports",
rating:"4.5⭐",
price:599,
img:"https://i.pinimg.com/originals/86/ae/65/86ae65b18534af5bb85bd31b5e0d0804.jpg"
},
{
name:"Sports Hoodie",
category:"sports",
rating:"4.8⭐",
price:799,
img:"https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500"
},
{
name:"Fitness Wear",
category:"sports",
rating:"4.1⭐",
price:739,
img:"https://tse4.mm.bing.net/th/id/OIP.Cok8eh1slb1-bjnmniMGzQHaHa?cb=thfvnextfalcon4&w=800&h=800&rs=1&pid=ImgDetMain&o=7&rm=3"
},
{
name:"Yoga Outfit",
category:"sports",
rating:"4.4⭐",
price:999,
img:"https://i.pinimg.com/originals/a8/8b/f4/a88bf4653aeba219c43a0c0f8c794420.jpg"
},

{
name:"Athletic Wear",
category:"sports",
rating:"4.5⭐",
price:399,
img:"https://mediahub.boohoo.com/cmm00989_black_xl"
},

{
name:"Running Jacket",
category:"sports",
rating:"3.9⭐",
price:449,
img:"https://assets.adidas.com/images/w_940,f_auto,q_auto/586616f5d3224f3dbcac00433722d4b7_9366/IT7585_HM1.jpg"
},


{
name:"Kids T-Shirt",
price:499,
category:"children",
rating:"4.5⭐",
img:"https://i5.walmartimages.com/seo/Little-Boy-Tshirts-Short-Sleeve-O-Neck-Graphic-T-Shirt-Cotton-Casual-T-Shirt-Kids-Clothes_f6825568-bf2b-4dbd-8045-00d4acc87d07.813e721a9e6f5a3d5a4ebc496f8a6d16.jpeg"
},
{
name:"Kids Hoodie",
price:799,
category:"children",
rating:"4.6⭐",
img:"https://frankybros.com/wp-content/uploads/2022/11/cute-hoodies-for-girls-pink-hoodie-for-kids-online-in-india.webp"
},
{
name:"Girls Dress",
price:999,
category:"children",
rating:"4.7⭐",
img:"https://i.pinimg.com/736x/b7/65/cb/b765cbe650bb4f0754856a218a8c20aa.jpg"
},
{
name:"Boys Jeans",
price:899,
category:"children",
rating:"4.2⭐",
img:"https://lsco.scene7.com/is/image/lsco/864880050-front-pdp-lse?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=1120&hei=1494"
},
{
name:"Kids Jacket",
price:1199,
rating:"4.5⭐",
category:"children",
img:"https://i5.walmartimages.com/seo/Boys-Winter-Puffer-Jacket-Kids-Hooded-Quilted-Coat-Warm-Lightweight-Water-Resistant-with-Pockets-Blue-3-12-Years_2fcea22f-af80-4f01-8263-cf10fc9d6d0c.9a082d4e0428077c653e1442c40141bc.jpeg"
},
{
name:"Kids Shorts",
price:599,
category:"children",
rating:"4.1⭐",
img:"https://i.pinimg.com/originals/e6/82/4e/e6824e5d630fddf2b0e507098069c510.jpg"
},
{
name:"School Uniform",
price:1299,
category:"children",
rating:"4.0⭐",
img:"https://tiimg.tistatic.com/fp/2/009/498/polycotton-kids-school-uniforms-412.jpg"
},
{
name:"Kids Sports Wear",
price:999,
category:"children",
rating:"4.8⭐",
img:"https://i.pinimg.com/originals/5b/5a/45/5b5a45399b788d6fb1486970201eb66f.jpg"
},

];

const [offer, setOffer] = useState(0);
const [filter, setFilter] = useState("all");

const [search, setSearch] = useState("");


useEffect(() => {

const timer = setInterval(() => {
setOffer((prev) => (prev + 1) % offers.length);
},2500);

return () => clearInterval(timer);

},[]);

const data = products.filter((item) => {

const categoryMatch =
filter === "all" || item.category === filter;

const searchMatch =
item.name.toLowerCase().includes(search.toLowerCase());

return categoryMatch && searchMatch;

});

return(
<>

<h1 className="product-title">
Shop Our Collection
</h1>


<div className="filter-btn">

<button onClick={()=>setFilter("all")}>All</button>
<button onClick={()=>setFilter("men")}>Men</button>
<button onClick={()=>setFilter("women")}>Women</button>
<button onClick={()=>setFilter("sports")}>Gym wear </button>
<button onClick={()=>setFilter("tshirt")}>T-Shirts</button>
<button onClick={() => setFilter("children")}>Children</button>

</div>


<div className="product-container">

{data.slice(0,4).map((item,index)=>(

<div className="product-card" key={index}>

<img src={item.img} alt={item.name}/>

<h2>{item.name}</h2>

<p className="rating">
{item.rating}
</p>

<h3>₹{item.price}</h3>

<div className="buttons">

<button>
Add To Cart
</button>


</div>

</div>

))}

</div>


<div className="offer">

<img
src={offers[offer].image}
alt="Offer Banner"
/>

</div>


<div className="product-container">

{data.slice(4,8).map((item,index)=>(

<div className="product-card" key={index}>


<img src={item.img} alt={item.name}/>

<h2>{item.name}</h2>

<p className="rating">
{item.rating}
</p>
<h3>₹{item.price}</h3>
<div className="buttons">
<button>Add To Cart</button>


</div>

</div>

))}

</div>


<div className="service">

<div className="service-box">

<h2>🚚</h2>

<h3>Free Shipping</h3>

<p>On orders above ₹999</p>

</div>

<div className="service-box">

<h2>🔄</h2>

<h3>Easy Returns</h3>

<p>7 Days Return Policy</p>

</div>

<div className="service-box">

<h2>💳</h2>

<h3>Secure Payment</h3>

<p>100% Safe Checkout</p>

</div>

<div className="service-box">

<h2>📞</h2>

<h3>24/7 Support</h3>

<p>Always Here To Help</p>

</div>

</div>

</>
);

}

