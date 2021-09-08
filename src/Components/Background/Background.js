import React from "react";

export default function Background({ children, styleClassName }) {
  return <div className={styleClassName}>{children}</div>;
}
