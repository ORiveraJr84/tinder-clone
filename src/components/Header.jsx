import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import { IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ForumIcon from "@material-ui/icons/Forum";
import WhatshotIcon from "@material-ui/icons/Whatshot";

const Header = () => {
  const theme = useTheme();
  return (
    <div className="header">
      <IconButton theme={theme} className="header__icon">
        <PersonIcon />
      </IconButton>
      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt=""
      />
      <IconButton theme={theme} className="header__icon">
        <ForumIcon />
      </IconButton>
    </div>
  );
};

export default Header;
