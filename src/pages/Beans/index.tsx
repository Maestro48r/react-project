import { useState } from "react";
import Cards from "../../components/Cards";
import Search from "../../components/Search";

const Beans = () => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <>
      <Search setFilterValue={setFilterValue} />
      <Cards filterValue={filterValue} />
    </>
  );
};

export default Beans;
