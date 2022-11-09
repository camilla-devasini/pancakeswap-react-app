export function Card({ img, text }) {
  return (
    <>
      <div className="card-section1">
        <h2>{text.title}</h2>
        <h2>{text.target}</h2>
        <p>{text.description}</p>
        <div className="svg">
          <img src={img} alt="user" />
        </div>
      </div>
    </>
  );
}
