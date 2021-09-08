import React from "react";
import PropTypes from "prop-types";

export default function Container({ children }) {
  return <div className="Container">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
