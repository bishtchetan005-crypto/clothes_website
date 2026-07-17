import "../css/review.css";

const reviews = [
  {
    name: "Noah Wilson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: "★★★★★",
    review:
      "Amazing quality! The fabric is premium and delivery was super fast. Highly recommended."
  },
  {
    name: "Sophia Miller",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: "★★★★★",
    review:
      "Beautiful collection. I loved the dresses and the customer support was excellent."
  },
  {
    name: "Liam Anderson",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: "★★★★★",
    review:
      "Exactly what I expected. Great prices with premium quality."
  },
  {
    name: "Emma Johnson",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: "★★★★★",
    review:
      "Fashion Hub is now my favorite shopping website."
  }
];

export default function Review() {
  return (
    <>
      <section className="review-hero">
        <h1>What Our Customers Say ❤️</h1>
        <p>
          Trusted by thousands of happy customers across India.
        </p>
      </section>
      <section className="review-section">
        {reviews.map((item,index)=>(
          <div className="review-card" key={index}>
            <img src={item.image} alt={item.name}/>
            <h2>{item.name}</h2>
            <span>{item.rating}</span>
            <p>{item.review}</p>
          </div>
        ))}
      </section>

      <section className="achievement">

  <div className="box">

    <img src="https://media.istockphoto.com/id/984445584/photo/stunning-and-very-beautiful-woman-in-dress-with-long-brown-hair-with-colored-shopping-box.jpg?s=170667a&w=0&k=20&c=xREwLe7FJt4r1hit_-bpH_KGrIyM0IwbwhX_Cv080yo=" alt="Happy Customers" />
    <div className="box-content">
      <h1>50K+</h1>
      <p>Happy Customers</p>
    </div>
  </div>

  <div className="box">
    <img src="https://img.freepik.com/premium-photo/delivery-man-brown-uniform-hands-cardboard-box-customer-symbolizing-service-efficiency_871349-43528.jpg" alt="Orders Delivered" />
    <div className="box-content">
      <h1>100K+</h1>
      <p>Orders Delivered</p>
    </div>
  </div>

  <div className="box">
    <img src="https://purepm.com.au/uploads/2023/03/average-rating.png" alt="Average Rating" />
    <div className="box-content">
      <h1>4.8★</h1>
      <p>Average Rating</p>
    </div>
  </div>

  <div className="box">
    <img src="https://thfvnext.bing.com/th/id/OIP.THn_aSq-cbr_2B6l8Pi66QHaEK?w=250&h=180&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3" alt="Customer Support" />
    <div className="box-content">
      <h1>24/7</h1>
      <p>Customer Support</p>
    </div>
  </div>

</section>

<section className="gallery">
<h1>Fashion Gallery</h1>

<div className="gallery-container">
<img src="https://images.pexels.com/photos/15893780/pexels-photo-15893780/free-photo-of-various-dresses-hanging-on-coathangers.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
<img src="https://thfvnext.bing.com/th/id/OIP.tU8FKYqMIFdq7oaCdZMZdwAAAA?w=204&h=306&c=7&r=0&o=7&cb=thfvnextfalcon4&dpr=1.3&pid=1.7&rm=3" alt="" />
<img src="https://tse3.mm.bing.net/th/id/OIP.F07lteUWin5dmBAVSzXGIAHaNO?cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
<img src="https://cdn.pixabay.com/photo/2022/12/10/05/50/dress-7646638_640.jpg" alt="" />
</div>

</section>

<section className="why">
<h1>Why Choose Fashion Hub?</h1>
<div className="why-container">
<div className="why-box">
<h2>🚚</h2>
<h3>Fast Delivery</h3>
<p>Quick delivery across India.</p>
</div>

<div className="why-box">
<h2>💳</h2>
<h3>Secure Payment</h3>
<p>100% Safe & Secure Checkout.</p>
</div>

<div className="why-box">
<h2>⭐</h2>
<h3>Premium Quality</h3>
<p>Only High Quality Products.</p>
</div>

<div className="why-box">
<h2>🔄</h2>
<h3>Easy Returns</h3>
<p>7 Days Easy Return Policy.</p>
</div>
</div>
</section>
    </>
  );
}