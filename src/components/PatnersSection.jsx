const PartnersSection = () => {
    const partners = [
      { name: "UN Women", logo: "/images/partners/un-women.png" },
      { name: "UNICEF", logo: "/images/partners/unicef.png" },
      { name: "WHO", logo: "/images/partners/who.png" },
      { name: "Local Police", logo: "/images/partners/police.png" },
      { name: "Ministry of Health", logo: "/images/partners/moh.png" },
      { name: "Local NGO", logo: "/images/partners/ngo.png" }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnersSection;