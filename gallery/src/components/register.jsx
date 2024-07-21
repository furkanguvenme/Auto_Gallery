import { useForm } from "react-hook-form";
import Header from "./header";
import "./register.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postUser } from "../store/actions/actions";
import { useHistory } from "react-router-dom";

const initialUser = {
  allname: "",
  email: "",
  age: "",
  phone: "",
  gender: "",
};

export default function Register() {
  const users = useSelector((store) => store.usersData);
  const dispatch = useDispatch();
  let history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialUser,
  });

  const onSubmit = (data) => {
    if (users.some((item) => item["email"] === data.email)) {
      setError("email", {
        type: "manual",
        message: "Bu e-posta adresi zaten kayıtlı.",
      });
      toast.error("Bu e-posta adresi zaten kayıtlı.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (users.some((item) => item.phone === data.phone)) {
      setError("phone", {
        type: "manual",
        message: "Bu telefon numarası zaten kullanılıyor.",
      });
      toast.error("Bu telefon numarası zaten kullanılıyor.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    dispatch(postUser(data));
    reset({
      allname: "",
      email: "",
      password: "",
      age: "",
      phone: "",
      gender: "",
    });
    history.push("/");
    toast.success("Başarıyla Kayıt Oldunuz", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <div className="w-full h-full bg-[url('https://wallpaper.caricos.com/Mercedes-Benz-F800-Style-Concept-%282010%29----Front-Angle--25949-1920x1080.jpg')] bg-cover bg-no-repeat bg-origin-border">
        <Header />
        <div className="w-full h-[80vh] flex flex-col justify-center items-center text-black font-medium text-[18px]">
          <form
            className="w-[20vw] h-[60vh] flex flex-col justify-center items-center bg-white/50 gap-[0.5vh] py-[2vh] rounded-2xl border-4 border-solid border-neutral-400 shadowx"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label htmlFor="allname">Adınız ve Soyadınız</label>
            <input
              type="text"
              className="input"
              placeholder="İsim Soyisim"
              {...register("allname", {
                required: "İsim alanı boş bırakılamaz.",
                pattern: {
                  value: /^[A-Za-z çÇİıöÖğĞşŞsüÜ,.'-]+$/i,
                  message: "Lütfen özel karakter ve sayı kullanmayınız!",
                },
                minLength: {
                  value: 4,
                  message: "Minimum 4 karakter kullanabilirsiniz!",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum 30 karakter kullanabilirsiniz!",
                },
              })}
            />
            {errors.allname && <p>{errors.allname.message}</p>}
            <label htmlFor="email">Mail Adresinizi Giriniz</label>
            <input
              type="email"
              className="input"
              placeholder="email"
              {...register("email", {
                required: "email alanı boş bırakılamaz.",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Lütfen geçerli bir mail adresi giriniz!",
                },
              })}
            />
            {errors.email && errors.email.message}
            <label htmlFor="password">Parola Giriniz</label>
            <input
              type="password"
              className="input"
              placeholder="password"
              {...register("password", {
                required: "Parola belirlemeniz gerekmektedir!",
                pattern: {
                  value:
                    "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$",
                  message:
                    "Parolanız en az 1 büyük harf, 1 küçük harf, 1 rakam, 1 özel karakter içermelidir ve minimum 8 karakter olmalıdır!",
                },
              })}
            />
            {errors.password && errors.password.message}
            <label htmlFor="age">Yaşınızı Giriniz</label>
            <input
              type="number"
              className="input"
              {...register("age", {
                required: "Yaş zorunludur!",
                min: {
                  value: 18,
                  message:
                    "Üye olabilmek için en az 18 yaşında olmanız gerekmektedir!",
                },
                max: {
                  value: 99,
                  message:
                    "Üye olabilmek için en fazla 99 yaşında olmanız gerekmektedir!",
                },
              })}
            />
            {errors.age && errors.age.message}
            <label htmlFor="phone">Telefon Numaranızı Giriniz</label>
            <input
              type="tel"
              className="input"
              placeholder="(5xx) xxx xx xx"
              {...register("phone", {
                required: "Telefon numarası boş bırakılamaz.",
                min: {
                  value: 10,
                  message:
                    "Lütfen numaranızın başında 0 kullanmadan 10 haneli olarak giriniz!",
                },
                max: {
                  max: {
                    value: 10,
                    message:
                      "Lütfen numaranızın başında 0 kullanmadan 10 haneli olarak giriniz!",
                  },
                },
              })}
            />
            {errors.phone && errors.phone.message}
            <div className="flex flex-col items-center justify-center">
              <p>Cinsiyet Seçiniz</p>
              <div className="radio-input">
                <input
                  value="Erkek"
                  id="gender-male"
                  type="radio"
                  {...register("gender", {
                    required: "Cinsiyet seçimi zorunludur.",
                  })}
                />
                <label htmlFor="gender-male">Erkek</label>
                <input
                  value="Kadın"
                  id="gender-female"
                  type="radio"
                  {...register("gender", {
                    required: "Cinsiyet seçimi zorunludur.",
                  })}
                />
                <label htmlFor="gender-female">Kadın</label>
              </div>
              {errors.gender && errors.gender.message}
            </div>
            <button type="submit" className="mt-[2vh] btn scale-75">
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
