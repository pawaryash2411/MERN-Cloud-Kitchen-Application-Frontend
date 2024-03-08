import { Button } from "@nextui-org/react";
import Video1 from "../assets/HeroTwo.mp4";
import Video2 from "../assets/HeroThree.mp4";

const HeroTwo = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="text-purple-700 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-purple-700 md:text-3xl poppins-text">
                  Discover Delicious Meals, Delivered to Your Doorstep
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Craving something tasty? Let us take care of your hunger with
                  our mouthwatering selection of dishes, made fresh and
                  delivered straight to your home. Whether it's a quick bite or
                  a hearty meal, we've got you covered.
                </p>
                <div className="mt-4 md:mt-8">
                  <Button className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-purple-700 transition hover:bg-transparent hover:text-white focus:outline-none">
                    Get Started Today
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <video
                autoPlay
                loop
                muted
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              >
                <source src={Video1} type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              >
                <source src={Video2} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTwo;
