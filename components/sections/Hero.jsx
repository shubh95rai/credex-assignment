import AnimatedComponent from "../AnimatedComponent";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-card h-screen flex items-center justify-center pt-16">
      <AnimatedComponent>
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center ">
            <h1 className="text-4xl font-bold sm:text-5xl">
              Turn Unused Software Into
              <span className="text-indigo-600"> Cash</span>
            </h1>

            <p className="mt-4 text-base text-pretty text-muted-foreground sm:text-lg/relaxed">
              Sell your unused software licenses quickly and securely.
            </p>

            <div className="inline-grid sm:grid-cols-2 gap-4 mt-6 ">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-neutral-100 shadow-sm transition-colors hover:bg-indigo-700 text-sm sm:text-base"
                href="#"
              >
                Sell Licenses
              </a>

              <a
                className="inline-block rounded border border-primary px-5 py-3 font-medium text-primary shadow-sm transition-colors hover:bg-muted-foreground hover:text-background hover:border-muted-foreground text-sm sm:text-base"
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
