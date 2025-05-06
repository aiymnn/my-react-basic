import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pear"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: true },
    { name: "Orange", price: 2, emoji: "🍊", soldout: true },
    { name: "Banana", price: 5, emoji: "🍌", soldout: false },
    { name: "Mango", price: 7, emoji: "🥭", soldout: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldout: true },
  ];
  return (
    <>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldout}
          />
        ))}
      </ul>
    </>
  );
}
