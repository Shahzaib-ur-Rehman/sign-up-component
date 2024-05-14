"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import errorImage from "../../../public/images/icon-error.svg";
import styles from "./sign-up.module.css";
import Image from "next/image";
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignupSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(SignupSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={`grid-flow ${styles.inputWrapper}`}>
        <input
          type="text"
          {...register("firstName")}
          className={`${styles.input} ${errors.firstName && styles.inputError}`}
          placeholder="First Name"
          aria-label="First Name"
        />
        {errors.firstName && (
          <Image
            className={styles.errorIcon}
            src={errorImage}
            width={24}
            height={24}
            alt="error"
          />
        )}
        {errors.firstName && (
          <p className={`text-right ${styles.errorText}`}>First Name cannot be empty</p>
        )}
      </div>
      <div  className={`grid-flow ${styles.inputWrapper}`}>
        <input
          type="text"
          {...register("lastName")}
          className={`${styles.input} ${errors.lastName && styles.inputError}`}
          placeholder="Last Name"
          aria-label="Last Name"
        />
        {errors.lastName && (
          <Image
            className={styles.errorIcon}
            src={errorImage}
            width={24}
            height={24}
            alt="error"
          />
        )}
        {errors.lastName && (
          <p className={`text-right ${styles.errorText}`}>Last Name cannot be empty</p>
        )}
      </div>
      <div className={`grid-flow ${styles.inputWrapper}`}>
        <input
          type="text"
          {...register("email")}
          className={`${styles.input} ${errors.email && styles.inputError}`}
          placeholder="Email Address"
          aria-label="Email"
        />
        {errors.email && (
          <Image
            className={styles.errorIcon}
            src={errorImage}
            width={24}
            height={24}
            alt="error"
          />
        )}
        {errors.email && (
          <p className={`text-right ${styles.errorText}`}>Looks like this is not an actual email</p>
        )}
      </div>
      <div className={`grid-flow ${styles.inputWrapper}`}>
        <input
          type="text"
          {...register("password")}
          className={`${styles.input} ${errors.password && styles.inputError}`}
          placeholder="Password"
          aria-label="Password"
        />
        {errors.password && (
          <Image
            className={styles.errorIcon}
            src={errorImage}
            width={24}
            height={24}
            alt="error"
          />
        )}
        {errors.password && (
          <p className={`text-right ${styles.errorText}`}>Password cannot be empty</p>
        )}
      </div>
      <button className="btn">claim your free trail</button>
      <p>
        By clicking the button, you are agreeing to our   <a href="" className={styles.termsLink}>Terms and Services</a>
      
      </p>
    </form>
  );
};

export default SignUp;
