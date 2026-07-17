function ProductCard({name,price,image}){


return(

<div className="card">


<img src={image} alt={name}/>


<h2>{name}</h2>


<p>₹ {price}</p>


<button>
Buy Now
</button>


</div>

)


}


export default ProductCard;