export default function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>
        <strong>{title}</strong>
      </h3>
      <p>{description}</p>
    </li>
  );
}