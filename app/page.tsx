import Image from "next/image";


export default function Home() {
  return (
    <>
    <h1 className="text-7xl text-center my-10 font-semibold">Ali Shahzad</h1>
    <div className="flex justify-between items-center ">
        <div><h1 className="w-fit px-20 py-6 text-6xl font-black">
          Hey,
          <br />
          My Name is <span className="text-red-500">Ali</span>
        </h1>
        <p className="px-20 text-3xl font-black">
        Passionate web developer with expertise in <br /> HTML, CSS, JavaScript, and TypeScript.
        </p>
        </div>
        <div className="pr-16">
          <img className="h-96 w-96 rounded-full" src={"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"} alt="Profile"/>
        </div>
      </div>
      </>
  );
}
