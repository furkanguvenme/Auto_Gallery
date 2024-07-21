import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modelData } from "../store/actions/actions";
import Loading from "./loading";
import Example from "./carousel";

export default function CarPage() {
  const dispatch = useDispatch();
  const modelName = useSelector((store) => store.model);
  const carData = useSelector((store) => store.modelData);
  const brandData = useSelector((store) => store.activeBrandData);

  useEffect(() => {
    if (modelName) {
      const data = brandData.find((item) => item["model"] === modelName);

      if (data) {
        dispatch(modelData(data));
      } else {
        console.error("Model not found in brandData");
      }
    }
  }, [modelName, brandData, dispatch]);

  if (!carData) {
    return <Loading />;
  }

  const { motor, performans, yakitTuketimi, model, yil, pictures } = carData;

  if (!motor || !performans || !yakitTuketimi) {
    console.error("carData is missing some properties:", carData);
    return <Loading />;
  }

  console.log("carData:", carData);
  return (
    <div className="bg-cover bg-[url('https://i.pinimg.com/originals/54/94/f7/5494f774316237246626b2a819b86203.jpg')] w-full h-full">
      <div className="w-full h-full flex flex-col items-center">
        <header className="w-full flex items-center justify-center h-[13vh]">
          <h1 className="font-bold text-emerald-400 text-[52px] ">
            {model + " " + yil}
          </h1>
        </header>
        <div className="w-[62.5vw]">
          <Example pictures={pictures} />
        </div>
        <main className="flex flex-row gap-[10vw] h-1/2 items-center justify-center text-white">
          <div>
            <h1 className="font-bold text-[32px]">Motor Özellikleri</h1>
            <p className="font-medium text-[24px]">
              Motor Hacmi: {motor.hacim}
            </p>
            <p className="font-medium text-[24px]">Motor Gücü: {motor.guc}</p>
            <p className="font-medium text-[24px]">
              Üretilen Tork: {motor.tork}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[32px]">Performans Bilgileri</h1>
            <p className="font-medium text-[24px]">
              Maximum Hız: {performans.hiz}
            </p>
            <p className="font-medium text-[24px]">
              İvmelenme: {performans.ivmelenme}
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[32px]">Yakıt Tüketimi Bilgileri</h1>
            <p className="font-medium text-[24px]">
              Şehir İçi Yakıt Tüketimi: {yakitTuketimi.sehirIci}
            </p>
            <p className="font-medium text-[24px]">
              Şehir Dışı Yakıt Tüketimi: {yakitTuketimi.sehirDisi}
            </p>
            <p className="font-medium text-[24px]">
              Ortalama Yakıt Tüketimi: {yakitTuketimi.ortalama}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
