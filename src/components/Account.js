import card from '../assets/card.png';

const Account = () => {
  return (
    <div className="flex flex-col  p-5 m-2 rounded-sm md:bg-[#F5F6F8] md:space-y-4 md:py-5 md:px-3  md:m-0 lg:h-[200px]">
      <h1 className="font-bold mb:hidden sm:hidden md:block">Bank Account</h1>
      <div className="flex flex-col mb:space-y-3 sm:space-y-3 lg:space-y-0 lg:flex-row lg:space-x-5 lg:items-center">
        <div className="card-1  max-w-[350px] h-20 rounded-md flex justify-between bg-[#F5F6F8] md:bg-white items-center">
          <div className="flex items-center space-x-4  m-2 p-2 rounded-sm">
            <img className="w-16" alt="card" src={card} />
            <div>
              <h1 className="font-semibold text-sm">**** **** **** 1234</h1>
              <h5 className="font-md text-gray-300">Expires 09/30</h5>
            </div>
          </div>
          <button className="rounded-sm md:hidden  text-white bg-[#0C611A] w-20 h-8 m-4 cursor-pointer">
            Edit
          </button>
        </div>
        <div className="card-2  max-w-[350px] h-20 rounded-md flex justify-between bg-[#F5F6F8] md:bg-white items-center">
          <div className="flex items-center space-x-4  m-2 p-2 rounded-sm">
            <img className="w-16" alt="card" src={card} />
            <div>
              <h1 className="font-semibold text-sm">**** **** **** 5678</h1>
              <h5 className="font-md text-gray-300">Expires 04/27</h5>
            </div>
          </div>
          <button className="rounded-sm md:hidden  text-white bg-[#0C611A] w-20 h-8 m-4 cursor-pointer">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
