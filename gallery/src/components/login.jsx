import { useForm } from "react-hook-form";
import "./login.css";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../store/actions/actions";
import { useHistory } from "react-router-dom";

const initialLogin = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.usersData);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialLogin });

  const onSubmit = (data) => {
    const { email, password } = data;

    const user = users.find((user) => user["email"] === email);

    if (!user) {
      toast.error("Böyle Bir Kullanıcı Bulunamadı!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (user.password != password) {
      toast.error("Yanlış Parola!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      dispatch(loginUser(user));
      history.push("/home");
      toast.success("Başarıyla Giriş Yaptınız!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="w-full h-full bg-[url('https://www.technocrazed.com/wp-content/uploads/2015/12/Audi-Wallpaper-25.jpg')]">
        <Header />
        <div className="w-full h-4/5 flex justify-center items-center">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <p className="form-title">Hesabınız İle Giriş Yapın</p>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "email alanı boş bırakılamaz.",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "Lütfen geçerli bir mail adresi giriniz!",
                  },
                })}
              />
              {errors.email && errors.email.message}
              <span></span>
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Parola belirlemeniz gerekmektedir!",
                  pattern: {
                    value:
                      "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                    message:
                      "Parolanız en az 1 harf, 1 rakam, 1 özel karakter içermelidir ve minimum 8 karakter olmalıdır!",
                  },
                })}
              />
              {errors.password && errors.password.message}
            </div>
            <button type="submit" className="submit">
              Giriş Yap
            </button>
            <p className="signup-link">
              Hesabınız yok mu?
              <a href="./register">Kayıt Ol</a>
            </p>
          </form>
        </div>
      </div>{" "}
    </>
  );
}
