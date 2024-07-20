import Image from "next/image";
import styles from "./PostUser.module.css";

const PostUser = async ({ userId }) => {
  const fetchingUser = async () => {
    const api = "https://jsonplaceholder.typicode.com";
    const apiCategory = "users";
    const finalURL = api + "/" + apiCategory + "/" + userId;
    console.log(finalURL);

    const res = await fetch(finalURL, { cache: "no-store" }); //the data changable as you want you can change cache
    if (!res.ok) {
      throw new Error("Check the Internet connection");
    }
    const data = res.json();
    return data;
  };
  const userDetails = await fetchingUser(); //we got user details
  console.log(userDetails);
  return (
    <div className={styles.userParent}>
      <div className={styles.img}>
        <Image
          src="https://images.pexels.com/photos/230129/pexels-photo-230129.jpeg"
          alt="uesr-image"
          fill
        />
      </div>
      <div className={`${styles.spans} ${styles.author}`}>
        <span>Author</span>
        <span className={styles.userName}>{userDetails.name}</span>
      </div>
      <div className={styles.spans}>
        <span>Published</span>
        <span>01/01/2024</span>
      </div>
    </div>
  );
};

export default PostUser;
