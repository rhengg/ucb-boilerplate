import React from "react";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import "./dropdown.css";

type DropdownPropTypes = {
  options: string[];
  placeholder?: string;
  selectedValue: (val: string) => void;
  id?: string;
  value?: string;
};

export default function Index({
  id,
  value,
  options,
  placeholder,
  selectedValue,
}: DropdownPropTypes) {
  const [openDropdown, setOpenDropdown] = React.useState(false);

  const handleDropdownClick = () => {};

  return (
    <div className="dropdown-main">
      <div className="dropdown-container">
        <div style={{ width: "80%" }}>
          {value
            ? value.charAt(0).toUpperCase() + value.slice(1)
            : placeholder
            ? placeholder
            : "Select"}
        </div>
        <div className="dropdown-arrow-container">
          <div style={{ cursor: "pointer" }} onClick={handleDropdownClick}>
            {openDropdown ? (
              <MdOutlineArrowDropUp size={28} />
            ) : (
              <MdOutlineArrowDropDown size={28} />
            )}
          </div>
        </div>
      </div>
      <div
        id={`dropdown-options-container_${id ? id : ""}`}
        className="dropdown-options-container"
        style={{
          opacity: -1,
          zIndex: -100,
        }}
      >
        <p
          style={{ margin: "0.5rem 0", cursor: "pointer" }}
          onClick={() => {
            selectedValue("");
            handleDropdownClick();
          }}
        >
          All
        </p>
        {options.map((item, index) => {
          return (
            <p
              key={index}
              style={{ margin: "0.5rem 0", cursor: "pointer" }}
              onClick={() => {
                selectedValue(item);
                handleDropdownClick();
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
}
