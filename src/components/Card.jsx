import "./Card.css";
import { useState } from "react";

const Card = () => {
  const [userNumber, setUserNumber] = useState({
    Free: 0,
    Pro: 15,
    Enterprise: 29
  });

  const btAction = (type) => {
    setUserNumber((prev) => {
      return { ...prev, [type]: prev[type] + 1 };
    });
  };

  const cardData = [
    {
      name: "Free",
      price: "$" + userNumber.Free,
      content: [
        "10 users included",
        "2 GB of storage",
        "Email Support",
        "Help center access"
      ],
      btClass: "button white",
      btAction: () => btAction("Free"),
      btContent: "Sign up for free"
    },
    {
      name: "Pro",
      price: "$" + userNumber.Pro,
      content: [
        "20 users included",
        "10 GB of storage",
        "Priority email Support",
        "Help center access"
      ],
      btClass: "button blue",
      btAction: () => btAction("Pro"),
      btContent: "Get started"
    },
    {
      name: "Enterprise",
      price: "$" + userNumber.Enterprise,
      content: [
        "30 users included",
        "15 GB of storage",
        "Phone and email Support",
        "Help center access"
      ],
      btClass: "button blue",
      btAction: () => btAction("Enterprise"),
      btContent: "Contact us"
    }
  ];

  return (
    <div className="container">
      {cardData.map(
        ({ name, price, content, btClass, btAction, btContent }, index) => (
          <div className="card" key={index}>
            <div className="name">{name}</div>
            <div className="info">
              <div className="permonth">
                <span className="price">{price}</span>
                <span className="month">/ mo</span>
              </div>
              {content.map((contentValue, contentIndex) => (
                <div className="content" key={contentIndex}>
                  {contentValue}
                </div>
              ))}
              <button className={btClass} onClick={btAction}>
                {btContent}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Card;
