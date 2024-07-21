import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelData } from "../store/actions/actions";
import Loading from "./loading";

export default function CarPage() {
  const dispatch = useDispatch();
  const modelName = useSelector((store) => store.model);
  const carData = useSelector((store) => store.modelData);
  const brandData = useSelector((store) => store.activeBrandData);

  useEffect(() => {
    console.log("modelName:", modelName);
    console.log("brandData:", brandData);

    if (modelName) {
      const data = brandData.find((item) => item["model"] === modelName);
      console.log("Found data:", data);
      dispatch(modelData(data));
    }
  }, [modelName, brandData, dispatch]);

  if (carData === null || carData === undefined) {
    return <Loading />;
  }

  console.log("carData:", carData);
  return (
    <>
      <div></div>
    </>
  );
}
