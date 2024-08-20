import React from 'react';
import './hero.css';

function Hero() {
  const recipes = [
    { 
      id: 1,
      title: "Greek salad",
      price: 12.99,
      image: "https://i.ibb.co/68c9bLv/greek-salad.jpg",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style fota cheese, garnished with crunchy garlic and rosemary croutons",
    },
    {
      id: 2,
      title: "Bruchetta",
      price: 5.99,
      image: "https://i.ibb.co/317GqZv/Bruchetta.png",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: 3,
      title: "Lemon Dessert",
      price: 4.78,
      image: "https://i.ibb.co/sm6MfcH/desert.jpg",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
    {
      id: 4,
      title: "Lemon Dessert",
      price: 4.78,
      image: "https://i.ibb.co/sm6MfcH/desert.jpg",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];

  return (
    <div className="hero">
      {recipes.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
}

function Card({ title, description, image, price }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="card-price"><strong>${price.toFixed(2)}</strong></p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Hero;