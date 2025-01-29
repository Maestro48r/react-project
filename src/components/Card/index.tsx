import { FC } from "react";
import { Bean } from "../../types/bean";
import style from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
  data: Bean;
};

const Card: FC<Props> = ({ data }) => {
  return (
    <Link to={`/react-project//bean/${data.beanId}`} className={style.card}>
      <img src={data.imageUrl} alt="" />
      <h2>{data.flavorName}</h2>
      <p>{data.description}</p>
      {data.sugarFree ? <p>Not sugar</p> : <p>With sugar</p>}
    </Link>
  );
};

export default Card;
