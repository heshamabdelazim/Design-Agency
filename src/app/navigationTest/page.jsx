"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const NavigationTest = () => {
  // The default behavior of the Link is => pre-fetching the given URL.
  // This allow us to see the Link much faster
  // But if you have many links on your component. You might want to disable pre-fetching because it might cause some performance issue. HOW?
  // <Link prefetch={false}
  // Sometimes, instead of using a Link, We have to implement some functionalities and then re-direct the user to somewhere else, How?
  // Router hook this hook comes from ((Next navigation)) (careful, Because there is another router hook from next router not next navigation )
  //

  const router = useRouter(); //Came from next/navigation

  //================
  const handleClick = () => {
    console.log("this is output and after this, router will work");
    router.push("/"); //This like pushing in the histor stack a link and go to that link after any function
    // router.replace("/"); //This doesn't affect in history stack. Like You are doing something then replace current site
    // router.refresh(); //will refresh current route and will make a new request to the server so If you wanna refresh your data or refetch any thing
    // router.back(); //It opens previous page in history stack. For example the user enters his login then back to his page
    // router.forward(); //It opens the next page in history stack.
  };

  // ========= pathName
  let pathName = usePathname(); //imported from next/navigation
  console.log(pathName); ////the output is /navigationTest

  // =========== searchParams
  // before we start this? Look at the following=> http://localhost:3000/navigationTest This is a link you are working
  // I added to the link a query ?q=beso  so the link is http://localhost:3000/navigationTest?q=beso
  // but wait, I tried console.log(pathName); it gave me navigationTest only without q=beso . HOW TO REACH IT? look the following
  const searchParams = useSearchParams();
  console.log(searchParams); //it has many methods like get(), getAll(), has(), forEach(), entries()
  const q = searchParams.get("q"); //Note the following is q because you wrote ?q=beso but if you wrote ?c=beso you will make => searchParams.get("c")
  console.log(q); //the output is beso
  // after this example I add another query like the following c=lol  and Added it to the link to be the following
  // http://localhost:3000/navigationTest?q=beso&c=lol   So this link has 2 queries q & c
  const c = searchParams.get("c");
  console.log(c); // the output is lol
  console.log(pathName); //the output is /navigationTest  It doesn't change

  return (
    <div>
      This is Navigation
      <Link href="/" prefetch={false}>
        <h2 style={{ margin: "5rem" }}>Click here</h2>
      </Link>
      <button onClick={handleClick}>
        <h2>do some function then re-direct</h2>
      </button>
    </div>
  );
};

export default NavigationTest;
