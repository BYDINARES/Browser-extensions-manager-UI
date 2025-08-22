export default function Extensions(props) {
  let isItActive = props.isActive;

  return (
    <section className="component-body">
      <div className="top">
        <img src={props.img} alt="The image of the extension" />
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
      <div className="bottom">
        <button>Remove</button>

        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </section>
  );
}
