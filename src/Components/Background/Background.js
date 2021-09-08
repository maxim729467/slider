import React from "react";
import PropTypes from "prop-types";

export default function Background({ children, styleClassName }) {
  return <div className={styleClassName}>{children}</div>;
}

Background.propTypes = {
  styleClassName: PropTypes.string,
  children: PropTypes.node,
};
