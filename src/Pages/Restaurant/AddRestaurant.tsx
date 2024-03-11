import { useState } from "react";
import { useCreateRestaurant } from "../../api/RestaurantApi";
import VideoThree from "../../assets/HeroThree.mp4";
import { Button, Input, Spinner, Chip } from "@nextui-org/react";
interface CuisineInput {
  cuisine: string;
}
const AddRestaurant = () => {
  const { isLoading, CreateRestaurant } = useCreateRestaurant();
  const [cuisineInput, setCuisineInput] = useState<CuisineInput>({
    cuisine: "",
  });
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [coverImage, setCoverImage] = useState<File>(null);
  const [restaurantName, setRestaurantName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [deliveryPrice, setDeliveryPrice] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCuisineInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCuisineInput({ cuisine: e.target.value });
  };

  const handleAddCuisine = () => {
    if (cuisineInput.cuisine.trim() !== "") {
      setSelectedCuisines([...selectedCuisines, cuisineInput.cuisine.trim()]);
      setCuisineInput({ cuisine: "" });
    }
  };

  const handleRemoveCuisine = (index: number) => {
    const updatedCuisines = [...selectedCuisines];
    updatedCuisines.splice(index, 1);
    setSelectedCuisines(updatedCuisines);
  };

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0];
    console.log("flag", image);
    setCoverImage(image);
  };

  const CreateRestaurantHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("restaurantName", restaurantName.trim());
      formData.append("city", city.trim());
      formData.append("country", country.trim());
      formData.append("deliveryPrice", parseFloat(deliveryPrice).toString());
      formData.append(
        "estimatedDeliveryTime",
        parseInt(deliveryTime).toString()
      );
      selectedCuisines.forEach((cuisine) =>
        formData.append("cuisines[]", cuisine)
      );
      if (coverImage) {
        formData.append("imageFile", coverImage);
      }

      console.log("formData:", formData);

      await CreateRestaurant(formData);
    } catch (error) {
      console.error("Error creating restaurant:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <section className="relative p-10">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={VideoThree} type="video/mp4" />
        </video> */}

        {isLoading ? (
          <>
            <Spinner
              label="Loading..."
              color="secondary"
              labelColor="secondary"
              className="flex justify-center"
            />
          </>
        ) : (
          <div className="text-purple-800 bg-transparent p-16 flex flex-col rounded-lg m-10">
            <div>
              <h1 className="flex gap-1 items-center text-white text-3xl mb-4 m-1">
                Add Restaurant
              </h1>
            </div>
            <form
              onSubmit={CreateRestaurantHandler}
              encType="multipart/form-data"
            >
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <Input
                    type="text"
                    label="Restaurant Name"
                    value={restaurantName}
                    onChange={(e) => setRestaurantName(e.target.value)}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    type="text"
                    label="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <Input
                    type="text"
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    type="number"
                    label="Delivery Price"
                    value={deliveryPrice}
                    onChange={(e) => setDeliveryPrice(e.target.value)}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <Input
                    type="number"
                    label="Estimated Delivery Time"
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <Input
                    type="text"
                    label="Add Cuisines"
                    onChange={handleCuisineInputChange}
                    value={cuisineInput.cuisine}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddCuisine();
                      }
                    }}
                  />
                </div>
              </div>

              <div className="flex my-2 items-center gap-2">
                {selectedCuisines.map((cuisine, index) => (
                  <Chip
                    key={index}
                    color="secondary"
                    onClose={() => handleRemoveCuisine(index)}
                  >
                    {cuisine}
                  </Chip>
                ))}
              </div>

              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAddImage}
                  />
                </div>
              </div>

              {isLoading ? (
                <Button
                  className="mt-10 flex justify-center gap-2 w-full rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto"
                  type="submit"
                  disabled="disabled"
                >
                  <Spinner color="white" size="sm" />
                  Adding...
                </Button>
              ) : (
                <Button
                  className="mt-10 flex justify-center gap-2 w-full rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto"
                  type="submit"
                >
                  Add
                </Button>
              )}
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default AddRestaurant;
