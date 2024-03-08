import { Input } from "@nextui-org/react";

const FoodSection = () => {
  return (
    <>
      <article className="rounded-xl m-10 mx-36 p-4 ring ring-indigo-50 sm:p-6 lg:p-8 shadow-md shadow-purple-500">
        <div className="flex items-center sm:gap-8">
          <h3 className="mt-4 text-lg font-medium poppins-text text-purple-700 sm:text-xl">
            <a href="/" className="hover:underline">
              Search your Favorite Restaurants & Cuisine...
            </a>
          </h3>

          <div className="text-4xl w-full mt-5">
            <Input
              key="secondary"
              type="text"
              color="secondary"
              className="w-full"
              placeholder="Search your Favorite Restaurants & Cuisine..."
            />
          </div>
        </div>
      </article>
    </>
  );
};

export default FoodSection;
