import card from '../assets/card.png';

const Account = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-5 m-5 rounded-sm">
      <h1 className="font-bold">Bank Account</h1>
      <div className="flex">
        <div className="flex bg-white m-2 p-2 rounded-sm">
          <img className="w-20" alt="card" src={card} />
          <div>
            <h1>**** **** **** 1234</h1>
            <h5 className="font-md text-gray-300">Expires 09/30</h5>
          </div>
        </div>
        <div className="flex bg-white m-2 p-2 rounded-sm">
          <img className="w-20" alt="card" src={card} />
          <div>
            <h1>**** **** **** 1234</h1>
            <h5 className="font-md text-gray-300">Expires 09/30</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
