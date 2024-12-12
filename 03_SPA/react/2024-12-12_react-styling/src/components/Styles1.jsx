// rafce
import x from "../styles/Styles1.module.css";
const Styles1 = () => {
  return (
    <div>
      <div style={{ color: "#06b6d4", padding: 20 }}>Inline Style</div>

      <p
        style={{
          backgroundColor: "pink",
          color: "darkblue",
          height: "100px",
          borderRadius: 10,
          padding: 8,
        }}
      >
        Welcome
      </p>

      <p className="test">EXAMPLE 1</p>
      <p className={x.test}>With Module</p>
      <p className={x.bloody}>Horror Movie</p>
      <section className={`${x.felix} ${x.ammar}`}>There are names</section>
    </div>
  );
};

export default Styles1;
