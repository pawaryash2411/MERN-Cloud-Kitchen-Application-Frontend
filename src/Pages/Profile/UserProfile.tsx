import { Button, Input, Spinner } from "@nextui-org/react";
import VideoTwo from "../../assets/HeroThree.mp4";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";
import { useGetUserDetails, useUpdateUserProfile } from "../../api/UserApi";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { User } from "../../utils/types";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const { user } = useAuth0();
  const { isLoading: isGetLoading, currentUser: userDetails } =
    useGetUserDetails();
  const { isLoading, UpdateUser } = useUpdateUserProfile();

  console.log(userDetails?.user);

  const handleUpdateUser = (data: object) => {
    console.log("FF", data);

    const formData = {
      email: user?.email,
      address: data?.address,
      name: user?.name,
      city: data?.city,
      country: data?.country,
      phone: data?.phone,
    };

    UpdateUser(formData);
  };

  useEffect(() => {
    if (!userDetails) {
      toast.error("Can't Load User Details");
    }
  }, [userDetails]);

  return (
    <>
      <section className="relative p-10">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src={VideoTwo} type="video/mp4" />
        </video>

        {isGetLoading ? (
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
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                </span>{" "}
                Update Profile
              </h1>
            </div>
            <form onSubmit={handleSubmit(handleUpdateUser)}>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    type="text"
                    label="Full Name"
                    value={userDetails?.user?.name}
                    {...register("name", { required: true })}
                  />
                  {errors && errors.name && touchedFields.name && (
                    <span className="text-red-600 text-sm">
                      Full Name is required!!
                    </span>
                  )}
                </div>
                <div className="md:w-1/2 px-3">
                  <Input
                    type="number"
                    label="Contact Number"
                    value={userDetails?.user?.phone}
                    {...register("phone", { required: true })}
                  />
                  {errors && errors.phone && touchedFields.phone && (
                    <span className="text-red-600 text-sm">
                      Contact Number is required!!
                    </span>
                  )}
                </div>
              </div>

              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <Input
                    type="email"
                    label="Email Address"
                    value={user?.email}
                  />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <Input
                    type="text"
                    label="Address"
                    value={userDetails?.user?.address}
                    {...register("address", { required: true })}
                  />
                  {errors && errors.address && touchedFields.address && (
                    <span className="text-red-600 text-sm">
                      Address is required!!
                    </span>
                  )}
                </div>
              </div>
              <div className="-mx-3 md:flex mb-2">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <Input
                    type="text"
                    label="City"
                    value={userDetails?.user?.city}
                    {...register("city", { required: true })}
                  />
                  {errors && errors.city && touchedFields.city && (
                    <span className="text-red-600 text-sm">
                      City Name is required!!
                    </span>
                  )}
                </div>
                <div className="md:w-1/2 px-3">
                  <Input
                    type="text"
                    label="Country"
                    value={userDetails?.user?.country}
                    {...register("country", { required: true })}
                  />
                  {errors && errors.country && touchedFields.country && (
                    <span className="text-red-600 text-sm">
                      Country Name is required!!
                    </span>
                  )}
                </div>
              </div>

              {isLoading ? (
                <Button
                  className="mt-10 flex justify-center gap-2 w-full rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto"
                  type="submit"
                  disabled="disabled"
                >
                  <Spinner color="white" size="sm" />
                  Updating...
                </Button>
              ) : (
                <Button
                  className="mt-10 flex justify-center gap-2 w-full rounded bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto"
                  type="submit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                    />
                  </svg>
                  Update
                </Button>
              )}
            </form>
          </div>
        )}
      </section>
    </>
  );
};

export default UserProfile;
