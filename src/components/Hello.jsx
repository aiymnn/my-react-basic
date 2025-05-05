function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.name}
      </h1>
      <div>
        <p>
          Saya sudah makan {person.makanan} {person.emoji} di meja number{" "}
          {person.seatNumbers}
        </p>
      </div>
    </div>
  );
}

export default Hello;
