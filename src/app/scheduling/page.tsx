import NavBar from "@/components/NavBar";
import Scheduling from "./components/Scheduling";

export default function Login() {
  return (
  <>
    <NavBar />
    <div className="flex flex-col justify-between">
      <div className="flex-auto ">
        <Scheduling />
      </div>
    </div>
  </>
  );
}