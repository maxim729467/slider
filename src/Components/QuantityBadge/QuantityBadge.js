import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import EcoIcon from "@material-ui/icons/Eco";
import { selectors } from "Redux/selectors";
import { useSelector } from "react-redux";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  iconColor: {
    color: orange.A700,
  },
}));

export default function QuantityBadge() {
  const classes = useStyles();
  const quantity = useSelector((state) => selectors.getQuantity(state));

  return (
    <div className={classes.root}>
      <Badge
        badgeContent={quantity}
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <EcoIcon />
      </Badge>
    </div>
  );
}
