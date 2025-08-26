import Extensions from "./components/Extensions";
import data from "./data/data.json";
import logo from "./assets/logo.svg";
import sun from "./assets/icon-sun.svg";
import { useState } from "react";

export default function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");
  const [background, setBackground] = useState("warm");

  /* const [wasClicked, setWasClicked] = useState(all filters) */

  // Toggle active/inactive
  const toggleIsActive = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  //Remove the extension from the list
  const removeFromList = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== id));
  };

  // Filter list
  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true; // "all"
  });

  //The backgrounds
  const styles = {
    backgroundColor: "somrthing", //HERE YOU SET THE BACKGROUND AND THEN YOU TRY to add the logic
    //Maybe with a usetate()
  };

  return (
    <>
      <header>
        <img className="logo" src={logo} alt="The logo of the App" />
        <button className="sun-container">
          <img className="sun" src={sun} alt="The image of the Sun" />
        </button>
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
            removeFromList={removeFromList}
          />
        ))}
      </main>
    </>
  );
}
