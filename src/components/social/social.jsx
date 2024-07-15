import styles from "./social.module.css";

const Social = () => {
  const socialArray = [
    {
      icon: "creative",
      link: "sssss",
    },
    {
      icon: "H",
      link: "sssss",
    },
    {
      icon: "sdfd",
      link: "sssss",
    },
    {
      icon: "ssdf",
      link: "sssss",
    },
  ];
  // function that loop then put ever jsx
  const puttingSocial = () => {
    return socialArray.map((obj, ind) => {
      return (
        <>
          <a href={obj.link}>{obj.icon}</a>
        </>
      );
    });
  };

  return <div className={styles.socialParent}>{puttingSocial()}</div>;
};

export default Social;
