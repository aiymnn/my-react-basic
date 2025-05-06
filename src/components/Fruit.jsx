export default function Fruit({ name, price, emoji, soldOut }) {
  return (
    <>
      {/* {emoji} {name} ${price} */}

      {/* {price > 5 ? (
        <li>
          {emoji} {name} ${price}
        </li>
      ) : (
        ""
      )} */}

      <li>
        {emoji} {name} ${price} {soldOut ? "sold out" : ""}
      </li>
    </>
  );
}
