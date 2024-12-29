import React from 'react';

function GBVFacts() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* First Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold inline-block relative">
            Defining Gender Based Violence
          </h1>
          <div className="border-t border-gray-300 mt-4"></div>
        </div>

        <div className="prose max-w-none">
          {/* First paragraph with large T */}
          <div className="flex">
            <span className="text-6xl font-bold text-green-600 mr-2 leading-none">T</span>
            <p className="text-gray-700">
              there is no single definition for the term gender based violence (GBV). Global reports indicate that most violence is towards women and that the perpetrators are men. While women form the bulk of the statistics men and boys have also suffered GBV in different contexts.
            </p>
          </div>

          <p className="my-6 text-gray-700">
            Earlier definitions of GBV were geared toward violence against women and girls and in 1993, the first official definition was made. Delegates at the United Nations General Assembly defined violence against women as any act of gender-based violence that results in, or is likely to result in, physical, sexual or psychological harm or suffering to women, including threats of such acts, coercion or arbitrary deprivations of liberty, whether occurring in public or in private life. The definition further states that violence against women (VAW) is a manifestation of historically unequal power relations between men and women, which have led to the domination over and discrimination against women by men and to the prevention of the full advancement of women and that VAW is one of the crucial social mechanisms by which women are forced into a subordinate position compared with men (United Nations, 1993).
          </p>

          <p className="my-6 text-gray-700">
            In 1995, the Beijing Platform for Action expanded the definition to include: Violations of the rights of women in situations of armed conflict, including systematic rape, sexual slavery and forced pregnancy; forced sterilization, forced abortion, coerced or forced use of contraceptives; pre-natal sex selection and female infanticide. It further highlighted the most vulnerable women to GBV to include the elderly, the displaced, indigenous women, refugees and migrant communities, women living in impoverished rural or remote areas or women in detention (United Nations, 1996).
          </p>

          <p className="my-6 text-gray-700">
            Many countries have adopted and domesticated these definitions. Kenya has expanded the definition to include violence against men and boys. The Sexual Offences Act No. 3 that was revised in 2007 has captured these definitions and also recognizes males as victims of GBV. For GBV we use the pragmatic definition of 'a range of acts of violence committed against females because they are females and against males because they are males.'
          </p>

          {/* Second heading with border line */}
          <div className="text-center my-12">
            <h2 className="text-3xl font-bold inline-block relative">
              What you need to know about Gender Based Violence
            </h2>
            <div className="border-t border-gray-300 mt-4"></div>
          </div>
        </div>
        <div className="prose max-w-none mb-16">
  <ul className="list-disc space-y-4 pl-5 text-gray-700">
    <li>
      Gender Based Violence is any act that results in physical, sexual or psychological harm or suffering, including threats of such acts, coercion or arbitrary deprivations of liberty, whether occurring in public or private life perpetrated against a person based on socially-ascribed (gender) differences between males and females.
    </li>
    
    <li>
      Violence is a common method used to dominate management of power relations
    </li>
    
    <li>
      GVRC has supported over 44,000 survivors since inception in 2001
    </li>
    
    <li>
      An estimate 3,000 survivors of GBV report at GVRC-NWH every year
    </li>
    
    <li>
      Men are the main perpetrators of violence. Exhibited by GVRC statistics at over 90% reported cases; KDHS 08/09; Kenya VAC 2010 revealing similar findings. This is not to put off the fact that women can be perpetrators as well.
    </li>
    
    <li>
      The female population is most affected with 56% women and 36% girls reported cases in GVRC.
    </li>
    
    <li>
      One-in-Three Kenyan females has experienced an episode of sexual violence before attaining age 18 (Kenya VAC 2010)
    </li>
    
    <li>
      Between 39% and 47% of Kenyan women experience GBV in their lifetime- among the highest rates in the world
    </li>
    
    <li>
      GBV towards pregnant women in Kenya is estimated to be 13.5%,17 a higher prevalence than that of many conditions normally screened for during pregnancy (KDHS 07/08)
    </li>
    
    <li>
      Men are survivors too with GVRC reported cases rating at 5% boys and 3% men
    </li>
    
    <li>
      One-in-Five Kenyan males has experienced an episode of sexual violence before attaining age 18 (Kenya VAC 2010)
    </li>
    
    <li>
      Domestic Violence -38% of ever-married women have ever experienced physical violence compared to 9% of ever-married men. 14% of ever-married women have ever experienced sexual violence compared to 4% of ever-married men. 41% of ever-married women have ever experienced physical or sexual violence, while 11% of ever-married men have ever experience either form of violence from a partner (KDHS 2014)
    </li>
  </ul>
</div>

        {/* Talk to us Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-green-600 mb-8">Talk to us</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-gray-700 mb-2">Your question</label>
              <textarea
                id="question"
                rows="6"
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
            >
              Ask us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GBVFacts;