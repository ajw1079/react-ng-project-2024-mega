import { Link } from "react-router-dom";
import menuData from "../../assets/data/menu.json";

import ImgAtm from "../atom/ImgAtm";
import logoImg from "../../assets/images/toplogo.png";

const HeaderCp = () => {
  console.log(menuData);
  const menuLists = menuData.data;
  console.log(menuLists);

  return (
    <header className="h-60 d-flex justify-content-btween align-items-center position-relative">
      <div className="logo">
        <Link to="/">
          <ImgAtm srcProp={logoImg} altProp="National Geographic Logo" />
        </Link>
      </div>
      <div className="menu">
        <ul className="d-flex">
          {menuLists.map((v, i) => (
            <li key={i}>
              <Link to={`/${v}`}>{v}</Link>
            </li>
          ))}
          {/* <li>
            <Link to="/animal">animal</Link>
          </li>
          <li>
            <Link to="/history">history</Link>
          </li>
          <li>
            <Link to="/environment">environment</Link>
          </li>
          <li>
            <Link to="/science">science</Link>
          </li>
          <li>
            <Link to="/travel">travel</Link>
          </li> */}
        </ul>
      </div>
      <div className="mypage d-flex">
        <ul className="d-flex">
          <li className="mx-10">
            <button></button>
          </li>
          <li className="mx-10">
            <button></button>
          </li>
        </ul>
      </div>

      <div className="resBtn position-absolute d-flex justify-content-center align-items-center">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
export default HeaderCp;
