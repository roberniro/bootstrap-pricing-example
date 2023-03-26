import "./Card.css";

const cardData = [
  {
    name: "Free",
    price: "$0",
    content: [
      "10 users included",
      "2 GB of storage",
      "Email Support",
      "Help center access"
    ],
    btClass: "button white",
    btContent: "Sign up for free"
  },
  {
    name: "Free",
    price: "$0",
    content: [
      "10 users included",
      "2 GB of storage",
      "Email Support",
      "Help center access"
    ],
    btClass: "button blue",
    btContent: "Sign up for free"
  },
  {
    name: "Free",
    price: "$0",
    content: [
      "10 users included",
      "2 GB of storage",
      "Email Support",
      "Help center access"
    ],
    btClass: "button blue",
    btContent: "Sign up for free"
  }
];

const Card = () => {
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
            <button className={value.btClass}>{value.btContent}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
