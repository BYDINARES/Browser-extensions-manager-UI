export default function Extensions(props) {
  return (
    <section className="component-body" id={props.name}>
      <div className="top">
        <img src={props.img} alt="The image of the extension" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <button>Remove</button>

        <label className="switch">
          <input
            type="checkbox"
            checked={props.isActive} // controlled by state
            onChange={() => props.handleClick(props.name)} // updates state
          />
          <span className="slider round"></span>
        </label>
      </div>
    </section>
  );
}
