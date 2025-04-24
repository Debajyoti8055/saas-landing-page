
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small teams",
    features: [
      "Up to 5 team members",
      "Basic collaboration tools",
      "2GB storage per user",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing businesses",
    popular: true,
    features: [
      "Up to 20 team members",
      "Advanced collaboration",
      "10GB storage per user",
      "Priority support",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise collaboration",
      "Unlimited storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Choose the perfect plan for your team
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? "border-indigo-600 shadow-lg scale-105"
                  : "border-gray-200"
              } p-8 shadow-sm hover:shadow-lg transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  className={`w-full rounded-full px-4 py-2 text-base font-semibold ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                  } transition-colors`}
                >
                  Get started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
