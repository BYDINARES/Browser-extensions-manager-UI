import Extensions from "./components/Extensions";
import data from "./data/data.json";
import logo from "./assets/logo.svg";
import sun from "./assets/icon-sun.svg";
import { useState } from "react";

export default function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  const [wasClicked, setWasClicked] = useState(/* All the filters */);

  // Toggle active/inactive
  const toggleIsActive = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  // Filter list
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true; // "all"
  });

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="The logo of the App" />
        <img className="sun" src={sun} alt="The image of the Sun" />
      </header>

      <section className="filter">
        <h1>Extensions List</h1>

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("inactive")}>Inactive</button>
          <button onClick={() => setFilter("active")}>Active</button>
        </div>
      </section>

      <main>
        {filteredExtensions.map((item) => (
          <Extensions
            key={item.name}
            img={item.logo}
            name={item.name}
            description={item.description}
            isActive={item.isActive}
            handleClick={toggleIsActive}
          />
        ))}
      </main>
    </>
  );
}
