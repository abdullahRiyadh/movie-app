const Error = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 md:p-6 lg:p-8 rounded-md transition-transform transform duration-500 mx-4">
      <p className="text-center">{message}</p>
    </div>
  );
};

export default Error;
