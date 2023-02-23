const ABC = () => {
  return (
    <div>
      <div class="grid grid-cols-12 grid-rows-4 gap-5 p-5 md:grid-rows-6 sm:grid-cols-1 sm:grid-rows-2">
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-9 md:col-span-7 md:row-span-2 sm:row-span-2 sm:col-span-1">
          1
        </div>
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-3 row-span-2 md:col-span-5 md:row-span-2 sm:row-span-1 sm:col-span-1">
          2
        </div>
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-5 md:col-span-6 md:row-span-2 sm:hidden">
          3
        </div>
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-4 row-span-3 md:col-span-6 md:row-span-2 sm:hidden">
          4
        </div>
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-5 row-span-2 md:col-span-6 md:row-span-2 sm:hidden">
          5
        </div>
        <div class="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2 col-span-3 md:col-span-6 md:row-span-2 sm:hidden">
          6
        </div>
      </div>
    </div>
  );
};

export default ABC;
