const PartnersSection = () => {
    const partners = [
      { name: "UN Women", logo: "../src/assets/images/un-women-logo.png" },
      { name: "UNICEF", logo: "../src/assets/images/unicef-logo.png" },
      { name: "WHO", logo: "../src/assets/images/who-logo.jpg" },
      { name: "Local Police", logo: "../src/assets/images/kenya-police.png" },
      { name: "Ministry of Health", logo: "../src/assets/images/ministry-of-health.png" },
      { name: "Local NGO", logo: "../src/assets/images/fida-kenya.jpg" }
    ];
  
    return (
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Partners</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="flex items-center justify-center p-2 sm:p-4 hover:scale-105 transition-all duration-300 ease-in-out rounded-lg"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-12 sm:max-h-14 md:max-h-16 w-auto object-contain filter drop-shadow-sm hover:drop-shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;