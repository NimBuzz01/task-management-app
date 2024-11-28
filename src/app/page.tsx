import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-6 text-center">
      <div className="bg-custom-generic-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="heading-h2 text-custom-primary-500 mb-4">
          Hello There!
        </h1>
        <p>
          Please go to{" "}
          <Link
            href="/tasks"
            className="text-custom-primary-500 hover:underline"
          >
            /tasks
          </Link>{" "}
          to view the assignment.
        </p>
      </div>
    </main>
  );
}
