import "./Card.css";
import { useState } from "react";

const Card = () => {
  const [userNumber, setUserNumber] = useState(0);

  const cardData = [
    {
      name: "Free",
      price: "$" + userNumber,
      content: [
        "10 users included",
        "2 GB of storage",
        "Email Support",
        "Help center access"
      ],
      btClass: "button white",
      btAction: () => setUserNumber(userNumber + 1),
      btContent: "Sign up for free"
    },
    {
      name: "Pro",
      price: "$15",
      content: [
        "20 users included",
        "10 GB of storage",
        "Priority email Support",
        "Help center access"
      ],
      btClass: "button blue",
      btAction: null,
      btContent: "Get started"
    },
    {
      name: "Enterprise",
      price: "$29",
      content: [
        "30 users included",
        "15 GB of storage",
        "Phone and email Support",
        "Help center access"
      ],
      btClass: "button blue",
      btAction: null,
      btContent: "Contact us"
    }
  ];

  return (
    <div className="container">
      {cardData.map((value, index) => (
        <div className="card" key={index}>
          <div className="name">{value.name}</div>
          <div className="info">
            <div className="permonth">
              <span className="price">{value.price}</span>
              <span className="month">/ mo</span>
            </div>
            {value.content.map((contentValue, contentIndex) => (
              <div className="content" key={contentIndex}>
                {contentValue}
              </div>
            ))}
            <button className={value.btClass} onClick={value.btAction}>
              {value.btContent}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
