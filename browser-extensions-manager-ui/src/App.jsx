import Extensions from "./components/Extensions";
import data from "./data/data.json";
import logo from "./assets/logo.svg";

const extensionsArray = data.map((item) => {
  return (
    <Extensions
      img={item.logo}
      name={item.name}
      description={item.description}
      isActive={item.isActive}
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

      {extensionsArray}
    </>
  );
}
