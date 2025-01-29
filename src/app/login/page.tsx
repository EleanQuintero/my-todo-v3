import { LogRegisterInput } from "@/components/ui/LogRegisterInput";

export default function Login() {
  return (
    <section className={`grid m-auto p-0 justify-items-center items-center`}>
      <h1 className="text-2xl font-extrabold justify-items-center m-auto">
        Inicia Sesion en tu cuenta de my to-Do-App
      </h1>
      <LogRegisterInput />
    </section>
  );
}
