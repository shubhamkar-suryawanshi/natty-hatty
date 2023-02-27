import Activeity from './Activeity';

const Activities = () => {
  return (
    <div className="md:bg-[#F5F6F8]">
      <div className="p-5 space-y-4 md:py-5 md:px-3  md:m-0 md:bg-[#F5F6F8]">
        <div className="flex md:justify-between mb:hidden sm:hidden md:flex ">
          <h1 className="font-bold ">Activities</h1>
          <button className="text-white my-1 bg-[#0C611A] font-[Work_Sans] font-semibold text-sm px-2 py-1 rounded-sm">
            View All
          </button>
        </div>

        <div className="md:bg-[#F5F6F8]">
          <Activeity />
          <Activeity />
          <Activeity />
          <Activeity />
        </div>
      </div>
    </div>
  );
};

export default Activities;
