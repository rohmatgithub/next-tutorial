'use client';
import ClientComponent from "./components/ClientComponent";
import DarkModeToggle from "./components/DarkModeToggle";
import { ServerComponent } from "./components/ServerConponent";
// import { useMyContext } from "./context/MyContext";

export default function Home() {
  // const { value, setValue } = useMyContext();

  return (
    <div>
      <ServerComponent />
      <DarkModeToggle />
      {/* <h1>{value}</h1>
      <button onClick={() => setValue('new value')}>Change Value</button> */}
    </div>
  );
}
