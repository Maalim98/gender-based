const TestimonialsSection = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Stories of Hope</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic mb-4">
                &ldquo;The support I received helped me rebuild my life. I am now stronger and helping others.&rdquo;
              </p>
              <div className="text-teal-600 font-semibold">Community Leader</div>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;