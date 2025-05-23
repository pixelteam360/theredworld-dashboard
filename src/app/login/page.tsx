import LoginForm from "@/components/modules/Auth/LoginForm";
import logo from "../../assets/images/logo.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-12 items-center">
        <Image src={logo} alt="EOL" height={100} width={100} />
        <LoginForm />
      </div>
    </div>
  );
}
