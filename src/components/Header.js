import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getTextAsync } from "../redux/texts/textSlice";

function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(4);
  const [resType, setResType] = useState("html");

  const handleInput = (value) => {
    setInput(value);
  };
  useEffect(() => {
    dispatch(getTextAsync({ input, resType }));
  }, [dispatch, input, resType]);

  return (
    <header className="header">
      <h1>React Sample Text Generator App</h1>
      <hr />
      <div className="input-container">
        <div className="header-column">
          <span>Paragraphs</span>
          <input
            type="number"
            value={input}
            onChange={(e) => {
              +e.target.value > 0
                ? handleInput(e.target.value)
                : handleInput(1);
            }}
          />
        </div>
        <div className="header-column">
          <span>Include HTML</span>
          <select
            className="select"
            value={resType}
            onChange={(e) => setResType(e.target.value)}
          >
            <option value="html">Yes</option>
            <option value="text">No</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
