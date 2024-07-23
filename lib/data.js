// import { Dev } from "./models";
import { connectToDb } from "./utils";

export const allDevelopers = [
  {
    name: "Ahmed Yasser",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Hamza.jpg",
    parag: () => (
      <>A backEnd Developer who plays a big role in backEnd development.</>
    ),
    title: "Back-End Developer",
    id: 1,
  },
  {
    name: "Philip Maher",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Philip.jpg",
    parag: () => (
      <>A front end Developer who plays a big role in front end development</>
    ),
    title: "Front-End Developer",
    id: 2,
  },
  {
    name: "Hesham Abdelazim",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Hesham.jpg",
    parag: () => (
      <>
        Hello There. <br />I Hope meet your expectation, I have got +1 year of
        experinece. on Web Development using <br />{" "}
        <strong>NEXT.JS, Tailwind & Bootstrap</strong>. <br />I adore working
        with team and okay with remote work. <br />I have got reading
        documentation skill, Trying to solve BUGs and Errors.
      </>
    ),
    title: "Front-End Developer",
    id: 3,
  },
];

// export const getDevs = async () => {
//   try {
//     connectToDb(); //if there is connection the function will stop. but if no connection make a connection
//     const Devs = Dev.find();
//     return Devs;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch Devs");
//   }
// };
