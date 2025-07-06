// import { Dev } from "./models";
// import { connectToDb } from "./utils";
let devId = 0;
export const allDevelopers = [
  {
    name: "Ahmed Yasser",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Hamza.jpg",
    parag: () => (
      <>A backEnd Developer who plays a big role in backEnd development.</>
    ),
    title: "Back-End Developer",
    id: devId++,
  },
  {
    name: "Philip Maher",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Philip.jpg",
    parag: () => (
      <>A front end Developer who plays a big role in front end development</>
    ),
    title: "Front-End Developer",
    id: devId++,
  },
  {
    name: "Hesham Abdelazim",
    social: [{ icon: "zzzzzz" }, { icon: "zzzzzzzz" }, { icon: "zz" }],
    path: "/Hesham.jpg",
    parag: () => (
      <>
        Hello There.🫡 <br /> I have over 1 year of experience in Web
        Development, specializing in{" "}
        <strong>React (NEXT.JS), Tailwind, and Bootstrap.</strong> <br />I enjoy
        working with teams and am comfortable with remote work. I am skilled at
        troubleshooting bugs and errors. <br />
        <strong>THANK YOU.🤓</strong>
      </>
    ),
    title: "Front-End Developer",
    id: devId++,
  },
];

export let user = null;
export const upDateUser = (name, password) => {
  user = { name, password };
};

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
