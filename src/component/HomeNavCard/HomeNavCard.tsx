import { Link } from "react-router-dom";
import cardData from "./card_data";
function Card({ title, desc, to, link = "#" }: Athena.CardData) {
  const buttonStyle =
    "no-underline text-dark-100 float-right rounded-md px-8 py-1 border-dark-100 border-1 mt-3  hover:bg-dark-900 hover:text-light-900 transition-all duration-150";
  let buttonItem;
  if (to) {
    buttonItem = (
      <Link to={to} className={buttonStyle}>
        前往
      </Link>
    );
  } else {
    buttonItem = (
      <a href={link} className={buttonStyle} target="_blank">
        查看
      </a>
    );
  }

  return (
    <div className="rounded-md p-2 box-border bg-white w-full max-w-full border-dark-50 border-1 shadow-md hover:scale-125 bg-opacity-30 transform hover:scale-105 ease-out duration-250 hover:shadow-lg flex flex-col justify-between">
      <div>
        <div className="text-lg">{title}</div>
        <p className="text-zinc-500 text-sm">{desc}</p>
      </div>
      <div>{buttonItem}</div>
    </div>
  );
}

export default function HomeNavCard() {
  const cards = cardData.map((card) => <Card key={card.id} {...card} />);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-5 gap-5 lg:grid-cols-4 xl:grid-cols-6">{cards}</div>
  );
}
