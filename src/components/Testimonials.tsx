
const testimonials = [
  {
    quote: "This platform has completely transformed how our team works together. The efficiency gains are incredible!",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
  },
  {
    quote: "The best investment we've made for our team's productivity. Simple yet powerful.",
    author: "Michael Chen",
    role: "CEO at StartupX",
  },
  {
    quote: "Outstanding collaboration features and top-notch security. Exactly what we needed.",
    author: "Emma Davis",
    role: "CTO at InnovateHub",
  },
];

const Testimonials = () => {
  return (
    <div id="testimonials" className="py-24 bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Loved by teams worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-white hover:transform hover:scale-105 transition-all"
            >
              <p className="text-lg mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-indigo-200">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
