"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-3xl font-bold text-red-500">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600">
        An unexpected error occurred.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>

    </div>
  );
}