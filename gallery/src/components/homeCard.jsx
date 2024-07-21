export default function Card({ car, index, handleClick }) {
  return (
    <>
      <button
        key={index}
        name={car["model"]}
        className="w-[15vw] h-[30vh] flex flex-col justify-around items-center bg-[#A3A3A3] rounded-2xl"
        onClick={handleClick}
      >
        <img
          src={car["pictures"]["on"]}
          className="w-[95%] h-[15vh] rounded-xl"
        />
        <h1>Model: {car["model"]}</h1>
        <p>Fiyatı: {car["price"]} $</p>
        <p>Yılı: {car["yil"]}</p>
      </button>
    </>
  );
}
