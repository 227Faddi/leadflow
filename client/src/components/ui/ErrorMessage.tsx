const ErrorMessage = ({ message }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Something went wrong.</strong>
        <span className="block sm:inline">
          {message} Please try again later.
        </span>
      </div>
    </div>
  );
};

export default ErrorMessage;
