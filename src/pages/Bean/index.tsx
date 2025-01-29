import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bean } from "../../types/bean";

const BeanPage = () => {
  const params = useParams();
  const [beanData, setBeanData] = useState<Bean | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const reg = await fetch(
          `https://jellybellywikiapi.onrender.com/api/beans/${params.id}`
        );
        const data = await reg.json();
        setBeanData(data);
      } catch (e) {
        console.log("Error->", e);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {beanData && (
        <div className="">
          <img src={beanData.imageUrl} alt="" />
          <h1>{beanData.flavorName}</h1>
          <p>{beanData.description}</p>
        </div>
      )}
    </div>
  );
};

export default BeanPage;
