// components/SearchToggle.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const SearchToggle = ({ showGrid, setShowGrid }) => {
  const toggleSwitch = () => {
    setShowGrid(!showGrid);
  };

  return (
    <button 
      className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={toggleSwitch}
    >
      <div
        className={`w-12 h-12 flex items-center justify-center relative rounded-full transition-all duration-500 transform p-1 text-white ${showGrid ? 'bg-gray-700 translate-x-full' : 'bg-yellow-500 -translate-x-2'}`}
      >
        <FontAwesomeIcon icon={showGrid ? faAngleRight : faMagnifyingGlass} />
      </div>
    </button>
  );
};

export default SearchToggle;
