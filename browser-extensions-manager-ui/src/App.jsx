import Extensions from "./components/Extensions";
import data from "./data/data.json";
import logo from "./assets/logo.svg";
import sun from "./assets/icon-sun.svg";
import { useRef, useState } from "react";

export default function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState("all");

  // all possible backgrounds
  const backgroundColors = [
    "linear-gradient(to bottom, #010416, #0e0e41)",
    "linear-gradient(to bottom, #010416, #e02c2cff)",
    "linear-gradient(to bottom, #010416, #e08c2cff)",
  ];

  const [backgroundStyle, setBackground] = useState(backgroundColors[0]);
  const currentIndex = useRef(0); // stores current background index

  const toggleIsActive = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const removeFromList = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== id));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true; // "all"
  });

  function toggleBackgrounds() {
    // pick a new random index different from current
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * backgroundColors.length);
    } while (newIndex === currentIndex.current && backgroundColors.length > 1);

    currentIndex.current = newIndex;
    setBackground(backgroundColors[newIndex]);
  }

  return (
    <div style={{ background: backgroundStyle, minHeight: "100vh" }}>
      <header>
        <img className="logo" src={logo} alt="The logo of the App" />
        <button className="sun-container" onClick={toggleBackgrounds}>
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
    </div>
  );
}
