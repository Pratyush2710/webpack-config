import "./styles/index.css";
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
