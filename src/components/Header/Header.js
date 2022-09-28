import { useState } from "react";
import "./Header.scss";
import { Menu } from "semantic-ui-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");
 
  console.log(currentPath);
  console.log(finalCurrentPath);

  const [activeItem, setActiveItem] = useState(finalCurrentPath);
  console.log(activeItem);
  const navigate = useNavigate();

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
    navigate(name);
  };

  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
}
