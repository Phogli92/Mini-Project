import React from "react";
import Print from "./Print";
const Products = [
  { id: 1, name: Kartoshka, narx: "$2", bor: true },
  { id: 2, name: Kartoshka, narx: "$3", bor: false },
  { id: 3, name: Kartoshka, narx: "$4", bor: false },
  { id: 4, name: Kartoshka, narx: "$5", bor: true },
  { id: 5, name: Kartoshka, narx: "$1", bor: false },
];
function Search(props) {
  return (
    <>
      {Products.map((el) => {
        <Print data={el} key={el.id} />;
      })}
    </>
  );
}

export default Search;
