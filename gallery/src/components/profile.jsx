import { useSelector } from "react-redux";
import "./profile.css";
import { CgProfile } from "react-icons/cg";
export default function Profile() {
  const user = useSelector((store) => store.loginUser);
  console.log(user);
  return (
    <label className="popup">
      <input type="checkbox" />
      <div tabIndex="0" className="burger">
        <CgProfile className="scale-125" />
      </div>
      <nav className="popup-window">
        <legend>Profil Bilgileri</legend>
        <ul>
          <li>
            <button>
              <span>{user.allname}</span>
            </button>
          </li>
          <li>
            <button>
              <span>{user.email}</span>
            </button>
          </li>
          <li>
            <button>
              <span>{user.born}</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
}
