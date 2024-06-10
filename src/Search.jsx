import React, { useState } from "react";
import Print from "./Print";
const Products = [
  { id: 1, name: "Kartoshka", narx: "$2", bor: 'bor' },
  { id: 2, name: "Pomidor", narx: "$3", bor: 'yoq' },
  { id: 3, name: "Sut", narx: "$4", bor: 'yoq' },
  { id: 4, name: "Sok", narx: "$5", bor: 'bor' },
  { id: 5, name: "Karam", narx: "$1", bor: 'yoq' },
];
function Search(props) {
  const [value, setValue]=useState('')

  const SearchProducts = Products.filter(product => {
    return product.name.includes(value)
  })


  return (
    <>
      <input type="text" placeholder="Search" onChange={(e)=>setValue(e.target.value)}/>
      <br />
      <br />
      <input type="checkbox" id="bor" style={{ cursor: "pointer" }}/>
      <label htmlFor="bor">Skladda bor mahsulotlar</label>
      {SearchProducts.map((el) => {
        return <Print data={el} key={el.id} />;
      })}
    </>
  );
}

export default Search;
