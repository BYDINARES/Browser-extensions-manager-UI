export default function Extensions(props) {
  let isItActive = props.isActive;

  return (
    <section>
      <img src={props.img} alt="The image of the extension" />
      <button></button>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </section>
  );
}
