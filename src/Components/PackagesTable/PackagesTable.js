import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectors } from "Redux/selectors";
import PackageItem from "./PackageItem";

import SvgIcon from "@material-ui/core/SvgIcon";
import { TiLeaf } from "react-icons/ti";
import { RiSeedlingLine } from "react-icons/ri";
import { GiThreeLeaves, GiWheat } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function PackagesTable({ onCloseModal }) {
  const packs = useSelector((state) => selectors.getPackages(state));
  const total = useSelector((state) => selectors.getTotal(state));
  const quantity = useSelector((state) => selectors.getQuantity(state));

  return (
    <div className="PackagesModal">
      {quantity === 0 ? (
        <p className="PackagesModal__placeholder">Add your first pack</p>
      ) : (
        <>
          <table className="PackagesModal__table">
            <thead>
              <tr className="PackagesModal__row">
                <th className="PackagesModal__head">
                  <SvgIcon className="PackagesModal__icon">
                    <TiLeaf />
                  </SvgIcon>
                </th>
                <th className="PackagesModal__head">
                  <SvgIcon className="PackagesModal__icon">
                    <RiSeedlingLine />
                  </SvgIcon>
                </th>
                <th className="PackagesModal__head">
                  <SvgIcon className="PackagesModal__icon">
                    <GiThreeLeaves />
                  </SvgIcon>
                </th>
                <th className="PackagesModal__head">
                  <SvgIcon className="PackagesModal__icon">
                    <GiWheat />
                  </SvgIcon>
                </th>
                <th className="PackagesModal__head">Kg</th>
                <th className="PackagesModal__head">Name Package</th>
                <th className="PackagesModal__head"></th>
              </tr>
            </thead>
            <tbody>
              {packs.map(
                ({
                  firstSeedValue,
                  secondSeedValue,
                  thirdSeedValue,
                  fourthSeedValue,
                  packSize,
                  id,
                  name,
                }) => (
                  <PackageItem
                    key={id}
                    firstIngredient={firstSeedValue}
                    secondIngredient={secondSeedValue}
                    thirdIngredient={thirdSeedValue}
                    fourthIngredient={fourthSeedValue}
                    size={packSize}
                    id={id}
                    name={name}
                  />
                )
              )}
            </tbody>
          </table>
          <div className="PackagesModal__summary-block">
            <p className="PackagesModal__total">
              Total:{" "}
              <span className="PackagesModal__total-number">{total} kg</span>
            </p>
            <button className="PackagesModal__summary-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )}
      <button
        className="PackagesModal__modal-close"
        type="button"
        onClick={() => onCloseModal()}
      >
        <SvgIcon>
          <GrClose />
        </SvgIcon>
      </button>
    </div>
  );
}

PackagesTable.propTypes = {
  onCloseModal: PropTypes.func,
};
