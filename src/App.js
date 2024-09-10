import CardContainer from "./components/CardContainer";
import MyFooter from "./components/MyFooter";
import MyNavbar from "./components/MyNavbar";

import { FaArrowUp } from "react-icons/fa";

import { data } from "./helper/data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="app">
      <MyNavbar search={search} setSearch={setSearch} />

      <CardContainer data={filteredData} />

      <MyFooter />
      <div className="icon-up">
        <FaArrowUp />
      </div>
    </div>
  );
}

export default App;
