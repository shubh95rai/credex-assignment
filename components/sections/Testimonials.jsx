import AnimatedComponent from "../AnimatedComponent";
import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    name: "Jane Doe",
    role: "IT Manager",
    company: "TechCorp",
    review:
      "SoftSell made it so easy to recover value from our unused licenses. Highly recommended!",
  },
  {
    name: "Dave Smith",
    role: "Procurement Head",
    company: "BizSolutions",
    review:
      "Great service, fair pricing, and fast payouts. We’ll definitely use SoftSell again.",
  },
  {
    name: "Sarah Jones",
    role: "Sales Manager",
    company: "BizSolutions",
    review: "Great tool for our small business. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-secondary px-4 text-center">
      <AnimatedComponent>
        <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, company, review }) => (
            <Card key={name}>
              <CardContent className="p-6">
                <p className="mb-4">“{review}”</p>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-600">
                  {role}, {company}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedComponent>
    </section>
  );
}
