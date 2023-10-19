import Image from 'next/image';
import SearchToggle from '@/components/SearchToggle';

const Navbar = ({ showGrid, setShowGrid }) => {
  return (
    <nav className="bg-white p-4 px-10 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Image className="h-28 w-auto" width={500} height={500} src="/TSECive.png" alt='tsecive'/>

        {showGrid !== undefined && (
          <SearchToggle showGrid={showGrid} setShowGrid={setShowGrid} />
        )}

        <div className="space-x-4">
          <button className="bg-blue-700 text-white hover:bg-blue-800 py-2 px-4 rounded">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
