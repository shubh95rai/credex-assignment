import AnimatedComponent from "../AnimatedComponent";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-white h-[calc(100vh-64px)] flex items-center justify-center mt-16">
      <AnimatedComponent>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center ">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Turn Unused Software Into
              <span className="text-indigo-600"> Cash</span>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Sell your unused software licenses quickly and securely.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Sell My Licenses
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </AnimatedComponent>
    </section>
  );
}
