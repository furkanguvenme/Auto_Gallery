import { CgProfile } from "react-icons/cg";
import "./home.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeBrand,
  brandName,
  modelData,
  modelName,
} from "../store/actions/actions";
import Card from "./homeCard";
import { useHistory } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  let history = useHistory();
  const allCars = useSelector((store) => store.carData);
  const brand = useSelector((store) => store.brand);
  const brandCars = useSelector((store) => store.activeBrandData);
  const nameModel = useSelector((store) => store.model);

  useEffect(() => {
    if (allCars) {
      const selectedBrand = allCars.find((item) => item["marka"] === brand);
      if (selectedBrand) {
        dispatch(activeBrand(selectedBrand["modeller"]));
      }
    }
  }, [brand, allCars, dispatch]);

  const handleClick = (e) => {
    dispatch(brandName(e.target.name));
  };

  const handleModel = (e) => {
    dispatch(modelName(e.target.name));
    history.push("/carPage");
  };

  return (
    <>
      <header className="flex flex-row justify-around items-center w-full h-[15vh]">
        <img
          src="https://i.hizliresim.com/5zl6d7o.png"
          className="w-[456px] h-[71.72px] shadow"
        />
        <div className="flex flex-row w-4/6 justify-around">
          <div className="flex flex-row justify-between gap-[5vw]">
            <button className="button" name="Toyota" onClick={handleClick}>
              TOYOTA
            </button>
            <button className="button" name="Honda" onClick={handleClick}>
              HONDA
            </button>
            <button className="button" name="BMW" onClick={handleClick}>
              BMW
            </button>
            <button
              className="button"
              name="Mercedes-Benz"
              onClick={handleClick}
            >
              MERCEDES-BENZ
            </button>
          </div>
          <button className="button flex flex-row justify-center items-center gap-[1vw]">
            <CgProfile className="scale-125" /> Profile
          </button>
        </div>
      </header>
      <main className="flex flex-row w-full h-[85vh] justify-around items-center">
        {brandCars.map((car, index) => (
          <Card key={index} car={car} handleClick={handleModel} />
        ))}
      </main>
    </>
  );
}
