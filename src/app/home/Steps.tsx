export const Steps = () => {
  const steps = [
    {
      title: "Choose a Template",
      description: "Select from our professionally designed templates",
      icon: "🎨"
    },
    {
      title: "Fill in Your Details",
      description: "Add your experience, education, and skills",
      icon: "✍️"
    },
    {
      title: "Customize & Download",
      description: "Make it yours and download in multiple formats",
      icon: "📥"
    }
  ];

  return (
    <div className="py-20 animate-slide-up">
      <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
        Create Your Resume in 3 Simple Steps
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="card p-6 text-center">
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
