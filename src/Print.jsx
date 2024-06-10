import React from "react";

function PrintHtml(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.narx}</p>
      <p>{props.data.bor}</p>
    </div>
  );
}
export default PrintHtml;
