import unWomen from '../assets/images/partners/un-women.png';
import unicef from '../assets/images/partners/unicef.png';
import who from '../assets/images/partners/who.png';
import police from '../assets/images/partners/police.png';
import moh from '../assets/images/partners/moh.png';
import ngo from '../assets/images/partners/ngo.png';

const PartnersSection = () => {
    const partners = [
      { name: "UN Women", logo: unWomen },
      { name: "UNICEF", logo: unicef },
      { name: "WHO", logo: who },
      { name: "National Police Service", logo: police },
      { name: "Ministry of Health", logo: moh },
      { name: "Local NGOs", logo: ngo }
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
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default PartnersSection; 