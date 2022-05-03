import Link from "next/link";
import { GoPerson } from "react-icons/go";

const Card = (props) => {
  const { age, children, state, records, id } = props;
  let predictor = "/predictor/";
  let assigner = "/assign/";

  if (state === "UNASSIGNED") {
    return (
      <Link href={assigner + id}>
        <div className="relative block p-8 border border-red-400 shadow-xl rounded-xl cursor-pointer my-4">
          <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            {records}
          </span>
          <div className="mt-4 text-gray-500 sm:pr-8">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <div>
              <GoPerson></GoPerson>
            </div>
            <h5 className="mt-4 text-xl font-bold text-gray-900">{children}</h5>
            <p className="hidden mt-2 text-sm sm:block">age = {age}</p>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href={predictor + id}>
      <div className="relative block p-8 border border-gray-100 shadow-xl rounded-xl cursor-pointer my-4">
        <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
          {records}
        </span>
        <div className="mt-4 text-gray-500 sm:pr-8">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <div>
            <GoPerson></GoPerson>
          </div>
          <h5 className="mt-4 text-xl font-bold text-gray-900">{children}</h5>
          <p className="hidden mt-2 text-sm sm:block">age = {age}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
