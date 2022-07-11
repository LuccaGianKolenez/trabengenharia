import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <input value={filter || ""} placeholder={"Nome"} onChange={(e) => setFilter(e.target.value)} />
      <div className="button-pesquisar"> Pesquisar{" "}</div>
    </span>
  );
};
