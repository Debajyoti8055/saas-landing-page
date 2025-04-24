
import { Check } from "lucide-react";
import { Switch } from "./ui/switch";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "29",
    yearlyPrice: "290",
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
    monthlyPrice: "79",
    yearlyPrice: "790",
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
    monthlyPrice: "199",
    yearlyPrice: "1990",
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
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-8">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Choose the perfect plan for your team
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monthly</span>
            <Switch 
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly <span className="text-green-500">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-card ${
                plan.popular
                  ? "border-2 border-purple-500 dark:border-purple-400 shadow-lg scale-105"
                  : "border border-border"
              } p-8 shadow-sm hover:shadow-lg transition-all`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-flex rounded-full bg-purple-600 dark:bg-purple-500 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-4 text-muted-foreground">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500" />
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  className={`w-full rounded-full px-4 py-2 text-base font-semibold ${
                    plan.popular
                      ? "bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600"
                      : "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800"
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
