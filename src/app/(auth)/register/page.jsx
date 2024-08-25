"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { upDateUser, user } from "../../../../lib/data";
import { useRouter } from "next/navigation";

const Register = () => {
  let [name, setName] = useState();
  let [password, setPassword] = useState();

  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    upDateUser(name, password);
    router.replace("/");
    console.log(user);
  };

  return (
    <div className={`container`}>
      <h2 className={styles.head}>You need to register.</h2>
      <form
        action=""
        className={styles.form}
        besodo="Enter any for Test"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className={styles.line}>
          <label htmlFor="name">User-Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.line}>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Register;
