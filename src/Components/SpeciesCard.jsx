const SpeciesCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition duration-500 hover:-translate-y-2">
      
      {/* Image */}
      <div className="h-40 overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-28 h-32 object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col flex-grow">
        <h5 className="text-2xl font-semibold text-[#6F4E37] mb-3">
          {title}
        </h5>

        <p className="text-gray-900 text-base flex-grow mb-3">
          {description}
        </p>
      </div>

    </div>
  );
};

export default SpeciesCard;