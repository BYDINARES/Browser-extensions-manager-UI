export default function Extensions(props) {
  let isItActive = props.isActive;

  return (
    <section>
      <div className="top">
        <img src={props.img} alt="The image of the extension" />
        <button></button>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <button>Remove</button>

        <div className="toggle-switch">
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="empty-space"></label>
        </div>
      </div>
    </section>
  );
}
