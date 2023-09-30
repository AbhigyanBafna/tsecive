const Manual = ({ branches }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:bg-blue-100 transition hover:shadow-lg"
          >
            <img src={branch.img} alt={branch.name} className="w-52 h-30 object-cover rounded mx-auto"/>
            <h2 className="text-center mt-2">{branch.name}</h2>
          </div>
        ))}
      </div>
    );
  };
  
  export default Manual;
  