import { CreateTodo } from "@/components/CreateTodo";

export default function CreateSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-extrabold text-4xl mb-4">Empieza a crear tu proximo ToDo Aqui: </h1>
      <CreateTodo />
    </section>
  );
}
