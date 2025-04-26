
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 dark:from-purple-900 dark:via-violet-900 dark:to-indigo-900 opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-8">
            Streamline Your Workflow with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-purple-400 dark:to-violet-400">
              Powerful Tools
            </span>
          </h1>

          <p className="mt-3 max-w-2xl mx-auto text-xl text-muted-foreground sm:mt-4 mb-8">
            Boost your productivity with our all-in-one platform. Manage tasks, collaborate with your team, and achieve your goals faster than ever.
          </p>

          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-full shadow">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 dark:bg-purple-600 hover:bg-indigo-700 dark:hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-all">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
