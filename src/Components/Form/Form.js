import React from "react";
import shortid from "shortid";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { green, yellow } from "@material-ui/core/colors";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { addPack } from "Redux/slice";
import { useDispatch } from "react-redux";

import SvgIcon from "@material-ui/core/SvgIcon";
import { TiLeaf } from "react-icons/ti";
import { RiSeedlingLine } from "react-icons/ri";
import { GiThreeLeaves, GiLightBackpack, GiWheat } from "react-icons/gi";

const blockWidth = 500;

const useStyles = makeStyles({
  firstSeed: {
    width: blockWidth,
    color: green.A200,
    marginBottom: "10px",
    marginRight: "40px",
  },
  secondSeed: {
    width: blockWidth,
    color: green.A700,
    marginBottom: "10px",
    marginRight: "40px",
  },
  thirdSeed: {
    width: blockWidth,
    color: yellow.A700,
    marginBottom: "10px",
    marginRight: "40px",
  },
  fourthSeed: {
    width: blockWidth,
    marginBottom: "10px",
    marginRight: "40px",
  },
});

export default function Form() {
  const classes = useStyles();
  const [firstSeed, setFirstSeed] = React.useState(25);
  const [secondSeed, setSecondSeed] = React.useState(25);
  const [thirdSeed, setThirdSeed] = React.useState(25);
  const [packSize, setPackSize] = React.useState(100);
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();

  const rest = 100 - (firstSeed + secondSeed + thirdSeed);
  const fourthSeedValue = rest >= 0 ? rest : 0;

  let firstSeedValue = firstSeed,
    secondSeedValue = secondSeed,
    thirdSeedValue = thirdSeed;

  if (fourthSeedValue <= 0 && firstSeed + secondSeed + thirdSeed >= 100) {
    thirdSeedValue = 100 - (firstSeedValue + secondSeedValue);
  }

  if (fourthSeedValue <= 0 && thirdSeedValue <= 0) {
    secondSeedValue = 100 - firstSeedValue;
    thirdSeedValue = 0;
  }

  const handleFirstSeed = (e, newValue) => {
    setFirstSeed(newValue);
  };

  const handleSecondSeed = (e, newValue) => {
    setSecondSeed(newValue);
  };

  const handleThirdSeed = (e, newValue) => {
    setThirdSeed(newValue);
  };

  const onPackBtnClickHandler = () => {
    setIsOpen(!isOpen);
  };

  const onHandlePackSizeSelect = (e) => {
    setPackSize(Number(e.target.value));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const pack = {
      firstSeedValue,
      secondSeedValue,
      thirdSeedValue,
      fourthSeedValue,
      packSize,
      id: shortid.generate(),
      name: "Package",
    };

    dispatch(addPack(pack));

    setFirstSeed(25);
    setSecondSeed(25);
    setThirdSeed(25);
    setPackSize(100);
    setIsOpen(false);
  };

  return (
    <form className="Form" onSubmit={onFormSubmit}>
      <div className="Form__flex-block">
        <div className="Form__slider-block ">
          <div className="Form__icon-block Form__first-icon">
            <SvgIcon className="Form__input-icon">
              <TiLeaf />
            </SvgIcon>
          </div>

          <Slider
            className={classes.firstSeed}
            value={firstSeedValue}
            onChange={handleFirstSeed}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            name="firstSeed"
          />
          <p>{firstSeedValue}%</p>
        </div>
        <div className="Form__slider-block">
          <div className="Form__icon-block Form__second-icon">
            <SvgIcon className="Form__input-icon">
              <RiSeedlingLine />
            </SvgIcon>
          </div>

          <Slider
            className={classes.secondSeed}
            value={secondSeedValue}
            onChange={handleSecondSeed}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            name="secondSeed"
          />
          <p>{secondSeedValue}%</p>
        </div>
        <div className="Form__slider-block">
          <div className="Form__icon-block Form__third-icon">
            <SvgIcon className="Form__input-icon">
              <GiThreeLeaves />
            </SvgIcon>
          </div>

          <Slider
            className={classes.thirdSeed}
            value={thirdSeedValue}
            onChange={handleThirdSeed}
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            name="thirdSeed"
          />
          <p>{thirdSeedValue}%</p>
        </div>
        <div className="Form__slider-block">
          <div className="Form__icon-block Form__fourth-icon">
            <SvgIcon className="Form__input-icon">
              <GiWheat />
            </SvgIcon>
          </div>

          <Slider
            className={classes.fourthSeed}
            disabled
            defaultValue={25}
            value={fourthSeedValue}
            aria-labelledby="disabled-slider"
            min={0}
            max={100}
            name="fourthSeed"
          />
          <p>{fourthSeedValue}%</p>
        </div>
        <div className="Form__pack-btn-row">
          <div className="Form__icon-block Form__fifth-icon">
            <SvgIcon className="Form__input-icon">
              <GiLightBackpack />
            </SvgIcon>
          </div>

          <button
            className="Form__pack-btn"
            type="button"
            onClick={() => onPackBtnClickHandler()}
          >
            <span>Choose your pack</span>
            {isOpen ? (
              <KeyboardArrowUpIcon className="Form__btn-icon" />
            ) : (
              <KeyboardArrowDownIcon className="Form__btn-icon" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="Form__radio-block">
            <div className="Form__decorated-label">
              <label className="Form__radio-label">
                <input
                  className="Form__radio-btn"
                  type="radio"
                  id="small"
                  name="small"
                  value={100}
                  onChange={onHandlePackSizeSelect}
                  checked={packSize === 100}
                />
                <span>Small pack</span>
                <span className="Form__radio-value">(100kg)</span>
              </label>
            </div>
            <div className="Form__decorated-label Form__label-margin">
              <label className="Form__radio-label">
                <input
                  className="Form__radio-btn"
                  type="radio"
                  id="medium"
                  name="medium"
                  value={150}
                  onChange={onHandlePackSizeSelect}
                  checked={packSize === 150}
                />
                <span>Medium pack</span>
                <span className="Form__radio-value">(150kg)</span>
              </label>
            </div>
            <div className="Form__label-margin">
              <label className="Form__radio-label">
                <input
                  className="Form__radio-btn"
                  type="radio"
                  id="large"
                  name="large"
                  value={200}
                  onChange={onHandlePackSizeSelect}
                  checked={packSize === 200}
                />
                <span>Large pack</span>
                <span className="Form__radio-value">(200kg)</span>
              </label>
            </div>
          </div>
        )}

        <button className="Form__submit-btn" type="submit">
          Add to cart
        </button>
      </div>
    </form>
  );
}
