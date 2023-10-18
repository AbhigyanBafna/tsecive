import Link from 'next/link';

// BranchGrid component
export const BranchGrid = ({ branches, path }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {branches.map((branch, index) => (
        <Link
          key={index}
          href={ path + branch.link }
        >
          <div className="border rounded-xl p-4 hover:bg-blue-100 transition hover:shadow-lg">
            <img src={branch.img} alt={branch.name} className="w-40 h-30 object-cover rounded mx-auto" />
            <h2 className="text-center mt-2 font-poppins text-lg">{branch.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

// SemesterGrid component
export const SemesterGrid = ({ semesters, path }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-8 px-44">
      {semesters.map((semester, index) => (
        <Link key={index} href={path + semester.link}>
          <div className="border rounded-lg p-2 hover:bg-blue-100 transition hover:shadow-lg flex">
            <img src={semester.img} alt={semester.name} className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex flex-col justify-center text-3xl font-poppins">
              <h2 className="text-center">{semester.name}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

// SemesterGrid component
export const SubjectGrid = ({ subjects, path }) => {

  console.log(subjects)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 py-20 px-20">
      {subjects?.map((subject, index) => (
        <Link key={index} href={path + '/' + subject?.slug?.current}>
          <div className="border rounded-lg p-2 hover:bg-blue-100 transition hover:shadow-lg flex">
            <img src="/label.svg" alt="label" className="w-24 h-24 object-cover rounded mr-4" />
            <div className="flex flex-col justify-center text-3xl font-poppins">
              <h2 className="text-center">{subject?.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
