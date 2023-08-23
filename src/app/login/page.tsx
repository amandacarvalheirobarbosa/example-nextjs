import FormLogin from "@/components/login/FormLogin";

export default function Login() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex-auto ">
        <FormLogin />
      </div>
    </div>
  );
}