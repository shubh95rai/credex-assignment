import AnimatedComponent from "../AnimatedComponent";
import { Card, CardContent } from "../ui/card";

const whyChooseUs = [
  { title: "Fast Payouts", icon: "⏳" },
  { title: "Secure Platform", icon: "🔐" },
  { title: "Trusted by Businesses", icon: "💼" },
  { title: "Transparent Pricing", icon: "📊" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-secondary px-4 text-center border-b">
      <AnimatedComponent>
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {whyChooseUs.map(({ title, icon }) => (
            <Card key={title}>
              <CardContent className="py-6">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-sm">
                  We make selling licenses fast, fair, and safe.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedComponent>
    </section>
  );
}
