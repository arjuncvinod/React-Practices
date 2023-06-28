var React = require("react");
var ReactDOM = require("react-dom");
const img = "https://picsum.photos/200";
let a = 1;
const style = {
  color: "red",
  fontSize: "50px",
  textAlign: "center"
};
if (a === 1) {
  style.color = "blue";
} else if (a === 2) {
  style.color = "green";
}

ReactDOM.render(
  <div>
    <h1 style={style}>Random images</h1>
    <img alt="" src={img} />
  </div>,
  document.getElementById("root")
);
