
import { Calendar, Users, Globe, Shield } from "lucide-react";

const features = [
  {
    name: "Team Calendar",
    description: "Keep your team synchronized with shared calendars and scheduling tools.",
    icon: Calendar,
  },
  {
    name: "Collaboration Tools",
    description: "Work together seamlessly with real-time collaboration features.",
    icon: Users,
  },
  {
    name: "Global Access",
    description: "Access your workspace from anywhere in the world, anytime.",
    icon: Globe,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and protected.",
    icon: Shield,
  },
];

const Features = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
            Everything you need to succeed
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Powerful features to help you manage, collaborate, and grow.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.name}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
