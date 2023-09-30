import Image from 'next/image';
import SearchToggle from '@/components/SearchToggle';

const Navbar = ({ showGrid, setShowGrid }) => {
  return (
    <nav className="bg-blue-500 p-3 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Image className="h-14 w-auto" width={500} height={500} src="/TSECive.png" />

        <SearchToggle showGrid={showGrid} setShowGrid={setShowGrid} />

        <div className="space-x-4">
          <button className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded">Login</button>
          <button className="bg-white text-blue-500 hover:bg-gray-100 py-2 px-4 rounded">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
