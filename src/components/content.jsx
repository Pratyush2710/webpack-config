const eleven = {
  a: 2,
  b: 3,
  c: 4,
};
const twelve = {
  ...eleven,
  d: 5,
  a: 10,
};

console.log(eleven);
console.log(twelve);

import React, { useState } from "react";

const Content = () => {
  const [content, setContent] = useState([]);
  return (
    <div>
      <h3>Current Content</h3>
      <button onClick={() => setContent(eleven)}>Eleven Content</button>
      <button onClick={() => setContent(twelve)}>Twelve Content</button>

      <ul>
        {Object.keys(content).map((obj) => (
          <li key={obj}>
            {obj}:{content[obj]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
