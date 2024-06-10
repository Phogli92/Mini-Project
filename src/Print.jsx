import React from "react";
function PrintHtml(props) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:'15px', justifyContent:'center'}}>
      <h2>{props.data.name}</h2>
      <p>{props.data.narx}</p>
      <p>{props.data.bor}</p>
    </div>
  );
}
export default PrintHtml;
