import Extensions from "./components/Extensions";
import data from "./data/data.json";
import logo from "./assets/logo.svg";
import { useState } from "react";

const [activeExtensions, setActiveExtensions] = useState(data);
const [filter, setFilter] = useState("all");

const toggleIsValue = (id) => {
  setActiveExtensions((prev) =>
    prev.map((ext) =>
      ext.name === id ? { ...ext, isValue: !ext.isValue } : ext
    )
  );

  console.log("Hello");
};

const extensionsArray = data.map((item) => {
  return (
    <Extensions
      img={item.logo}
      name={item.name}
      description={item.description}
      isActive={item.isActive}
      handleCLick={toggleIsValue}
    />
  );
});

console.log(extensionsArray);

export default function App() {
  return (
    <>
      <header>
        <img src={logo} alt="The logo of the App" />
      </header>

      <section className="filter">
        <h1>Extensions List</h1>

        <div>
          <button>All</button>
          <button>Inactive</button>
          <button>Active</button>
        </div>
      </section>

      <main>{extensionsArray}</main>
    </>
  );
}
