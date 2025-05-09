import AnimatedComponent from "../AnimatedComponent";

const howItWorks = [
  { step: "Upload License", icon: "📁" },
  { step: "Get Valuation", icon: "💸" },
  { step: "Get Paid", icon: "💳" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-card px-4 text-center border-t">
      <AnimatedComponent>
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map(({ step, icon }) => (
            <div key={step} className="text-lg">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold mb-2">{step}</h3>
              <p>Simple and transparent process from start to finish.</p>
            </div>
          ))}
        </div>
      </AnimatedComponent>
    </section>
  );
}
