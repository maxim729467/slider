import React, { useState } from "react";
import Container from "Components/Container";
import Background from "Components/Background";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import PackagesTable from "Components/PackagesTable";
import QuantityBadge from "Components/QuantityBadge";
import { useSelector } from "react-redux";
import { selectors } from "Redux/selectors";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const total = useSelector((state) => selectors.getTotal(state));

  const onBtnClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Background styleClassName="TopBackground">
      <nav className="NavBar">
        <Container>
          <div className="NavBar__panel">
            <div className="NavBar__leftBlock">
              <p className="NavBar__logo">Cracker</p>
            </div>
            <div className="NavBar__rightBlock">
              <div className="NavBar__quantity">
                <QuantityBadge />
              </div>

              <p className="NavBar__total">Total: {total} kg</p>
              <button
                className="NavBar__btn"
                type="button"
                onClick={() => onBtnClickHandler()}
              >
                <span className="NavBar__btn-name">Details</span>
                {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </button>
            </div>
            {isOpen && <PackagesTable onCloseModal={onBtnClickHandler} />}
          </div>
        </Container>
      </nav>
    </Background>
  );
}
