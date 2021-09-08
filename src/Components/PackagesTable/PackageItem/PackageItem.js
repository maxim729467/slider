import React from "react";
import PropTypes from "prop-types";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { changePackName, removePack } from "Redux/slice";

export default function PackageItem({
  firstIngredient,
  secondIngredient,
  thirdIngredient,
  fourthIngredient,
  size,
  id,
  name,
}) {
  const dispatch = useDispatch();

  const onPackNameChange = (e) => {
    const updatedName = e.target.value;
    const payload = { updatedName, id };
    dispatch(changePackName(payload));
  };

  const onRemovePack = () => {
    dispatch(removePack(id));
  };

  return (
    <>
      <tr className="PackagesModal__pack-row">
        <td className="PackagesModal__data">{firstIngredient}%</td>
        <td className="PackagesModal__data">{secondIngredient}%</td>
        <td className="PackagesModal__data">{thirdIngredient}%</td>
        <td className="PackagesModal__data">{fourthIngredient}%</td>
        <td className="PackagesModal__data">{size} kg</td>
        <td className="PackagesModal__data">
          <input
            className="PackagesModal__input"
            name="name"
            type="text"
            value={name}
            onChange={onPackNameChange}
          />
        </td>
        <td>
          <button
            onClick={() => onRemovePack()}
            className="PackagesModal__remove-btn"
            type="button"
          >
            <GrClose />
          </button>
        </td>
      </tr>
      <tr className="PackagesModal__decor-row" />
    </>
  );
}

PackageItem.propTypes = {
  firstIngredient: PropTypes.number,
  secondIngredient: PropTypes.number,
  thirdIngredient: PropTypes.number,
  fourthIngredient: PropTypes.number,
  size: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
};
