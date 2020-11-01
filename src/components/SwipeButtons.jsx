import { IconButton } from "@material-ui/core";
import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__replay">
        <ReplayIcon />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
