import "./MyComponent.css";
import style from "./MyComponent.module.css";

const MyComponent = () => {
  return (
    <div>
      <h1 className={style.my_tittle}>My Tittle</h1>
      <p className="paragraph">Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default MyComponent;
