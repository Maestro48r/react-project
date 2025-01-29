import style from "./style.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  user_name: string;
  user_email: string;
  category: string;
};

const Review = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  console.log(register);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Имя{" "}
            <input
              type="text"
              {...register("user_name", {
                required: {
                     value: true,
                      message: "Обязательное поле"
                     },
                minLength: {
                  value: 3,
                  message: "В поле с именем недостаточно символов",
                },
              })}
            />
          </label>
          {errors.user_name && <p>{errors.user_name.message}</p>}

          <label>
            Email{" "}
            <input
              type="email"
              {...register("user_email", { required: true })}
            />
          </label>

          <select {...register("category")}>
            <option value="a">Select A</option>
            <option value="b">Select B</option>
            <option value="c">Select C</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Review;
