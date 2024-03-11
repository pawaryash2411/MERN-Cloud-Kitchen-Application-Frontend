// import { useAuth0 } from "@auth0/auth0-react";
import VideoOne from "../assets/video1.mp4";
// import VideoTwo from "../assets/video2.mp4";
import { Button } from "@nextui-org/react";

const Hero = () => {
  // const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <section className="relative">
        {/* <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={VideoOne} type="video/mp4" />
        </video> */}

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right text-white">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-start poppins-text">
              Order the Best Food Cuisine
              <strong className="block font-extrabold text-purple-700">
                directly to your Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed text-start">
              Craving delicious food? Look no further! Order from our wide range
              of mouthwatering dishes and have them delivered straight to your
              doorstep in no time.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button className="block w-full rounded bg-purple-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none active:bg-purple-500 sm:w-auto">
                Order Food
              </Button>

              <Button className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-600 shadow hover:text-purple-700 focus:outline-none  active:text-purple-500 sm:w-auto">
                Run Restaurant
              </Button>
            </div>
          </div>

          {/* <div>dddddd</div> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
