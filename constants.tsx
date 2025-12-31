
import React from 'react';
import { ServiceInfo, AreaInfo, Client } from './types';

export const COMPANY_NAME = "Hygienic Cleaning Services";
export const PRIMARY_CITY = "Bangalore";
export const PHONE_NUMBER = "+91 99866 55556";
export const PHONE_NUMBER_2 = "+91 97395 60560";
export const WHATSAPP_NUMBER = "919986655556";
export const EMAIL = "contact@hygieniccleaning.com";

export const ADDRESS = "207, 4th Cross, 2nd Main, 2nd Stage, Nagarabhavi, Bangalore, Karnataka, 560072";
export const ADDRESS_OBJ = {
  streetAddress: "207, 4th Cross, 2nd Main, 2nd Stage",
  locality: "Nagarabhavi",
  city: "Bangalore",
  region: "Karnataka",
  postalCode: "560072",
  country: "IN"
};

export const AREAS: AreaInfo[] = [
  // Primary Hubs
  { slug: "rajarajeshwari-nagar", name: "Rajarajeshwari Nagar", city: "Bangalore", landmarks: ["Global Village Tech Park", "RR Nagar Arch", "BEML Layout"], zipCodes: ["560098"] },
  { slug: "indiranagar", name: "Indiranagar", city: "Bangalore", landmarks: ["Metro Station", "100 Ft Road", "ESI Hospital"], zipCodes: ["560038"] },
  { slug: "koramangala", name: "Koramangala", city: "Bangalore", landmarks: ["Sony Signal", "Forum Mall", "St. Johns Hospital"], zipCodes: ["560034"] },
  { slug: "whitefield", name: "Whitefield", city: "Bangalore", landmarks: ["ITPL", "Phoenix Marketcity", "Hope Farm"], zipCodes: ["560066"] },
  { slug: "jayanagar", name: "Jayanagar", city: "Bangalore", landmarks: ["Jayanagar 4th Block", "Lalbagh", "Madhavan Park"], zipCodes: ["560011"] },

  // Expanded Coverage Areas
  { slug: "agrahara", name: "Agrahara", city: "Bangalore", landmarks: ["Yelahanka Air Force Station", "Agrahara Main Road", "Cogent E-Services"], zipCodes: ["560064"] },
  { slug: "airport-area-hal", name: "Airport Area (HAL)", city: "Bangalore", landmarks: ["HAL Airport", "Murugeshpalya", "Manipal Hospital"], zipCodes: ["560017"] },
  { slug: "arekere", name: "Arekere", city: "Bangalore", landmarks: ["Arekere Mico Layout", "Bannerghatta Road", "IIM Bangalore"], zipCodes: ["560076"] },
  { slug: "b-narayanapura", name: "B. Narayanapura", city: "Bangalore", landmarks: ["Mahadevapura", "KR Puram", "Tin Factory"], zipCodes: ["560016"] },
  { slug: "banashankari", name: "Banashankari", city: "Bangalore", landmarks: ["Banashankari Temple", "BDA Complex", "PES University"], zipCodes: ["560050"] },
  { slug: "bangalore-city-gpo", name: "Bangalore City (GPO)", city: "Bangalore", landmarks: ["Vidhana Soudha", "Cubbon Park", "Town Hall"], zipCodes: ["560002"] },
  { slug: "bangalore-md", name: "Bangalore MD", city: "Bangalore", landmarks: ["Raj Bhavan", "Infantry Road", "Commercial Street"], zipCodes: ["560001"] },
  { slug: "basaveshwara-nagar", name: "Basaveshwara Nagar", city: "Bangalore", landmarks: ["Shankar Mutt", "Pavithra Paradise", "Kamal Nagar"], zipCodes: ["560079"] },
  { slug: "dasarahalli", name: "Dasarahalli", city: "Bangalore", landmarks: ["Peenya Industry", "Tumkur Road", "Jalahalli Cross"], zipCodes: ["560057"] },
  { slug: "harogadde", name: "Harogadde", city: "Bangalore", landmarks: ["Jigani Industrial Area", "Bannerghatta National Park", "Anekal"], zipCodes: ["562112"] },
  { slug: "hmt-layout", name: "HMT Layout", city: "Bangalore", landmarks: ["Jalahalli", "HMT Factory", "Peenya"], zipCodes: ["560013"] },
  { slug: "ittamadu-layout", name: "Ittamadu Layout", city: "Bangalore", landmarks: ["Banashankari 3rd Stage", "Kathriguppe", "Vidyapeeta"], zipCodes: ["560085"] },
  { slug: "jc-nagar", name: "J. C. Nagar", city: "Bangalore", landmarks: ["Fun World", "TV Tower", "Munireddy Palya"], zipCodes: ["560006"] },
  { slug: "jakkur", name: "Jakkur", city: "Bangalore", landmarks: ["Jakkur Aerodrome", "GKVK", "Jakkur Lake"], zipCodes: ["560064"] },
  { slug: "jayachamaraja-road", name: "Jayachamaraja Road", city: "Bangalore", landmarks: ["JC Road", "Town Hall", "Ravindra Kalakshetra"], zipCodes: ["560002"] },
  { slug: "k-narayanapura", name: "K. Narayanapura", city: "Bangalore", landmarks: ["Kristu Jayanti College", "Kothanur", "Hennur Road"], zipCodes: ["560077"] },
  { slug: "kannamangala", name: "Kannamangala", city: "Bangalore", landmarks: ["Kadugodi", "Whitefield", "Seegehalli"], zipCodes: ["560067"] },
  { slug: "mallesh-palaya", name: "Mallesh Palaya", city: "Bangalore", landmarks: ["BEML Hospital", "GM Palya", "Vignana Nagar"], zipCodes: ["560075"] },
  { slug: "mayasandra", name: "Mayasandra", city: "Bangalore", landmarks: ["Attibele", "Anekal", "Border Checkpost"], zipCodes: ["562123"] },
  { slug: "rmv-extension-ii-stage", name: "R. M. V. Extension II Stage", city: "Bangalore", landmarks: ["Dollars Colony", "ISRO HQ", "Sanjaynagar"], zipCodes: ["560094"] },
  { slug: "seegehalli", name: "Seegahalli", city: "Bangalore", landmarks: ["Whitefield", "Kadugodi", "Belathur"], zipCodes: ["560067"] },
  { slug: "someshwara nagar", name: "Someswarapura", city: "Bangalore", landmarks: ["Jayanagar", "Siddapura", "Nimhans"], zipCodes: ["560011"] },
  { slug: "sri-jayachamarajendra-road", name: "Sri Jayachamarajendra Road", city: "Bangalore", landmarks: ["SJC Road", "Corporation Circle", "Unity Building"], zipCodes: ["560002"] },
  { slug: "venkateswara-layout", name: "Venkateswara Layout", city: "Bangalore", landmarks: ["Hosakerehalli", "Padmanabhanagar", "Kathriguppe"], zipCodes: ["560085"] },
  { slug: "vimanapura", name: "Vimanapura", city: "Bangalore", landmarks: ["HAL", "Isro Colony", "Old Airport Road"], zipCodes: ["560017"] }
];

export const CLIENTS: Client[] = [
  { name: "Columbia Pacific Communities" },
  { name: "HM Group" },
  { name: "United Spirits" },
  { name: "Embassy Group" },
  { name: "Mantri Developers" },
  { name: "Prestige Group" },
  { name: "ESIC Hospital" },
  { name: "SNR Verity" },
  { name: "Shriram Properties" },
  { name: "Prakriya Hospitals" },
  { name: "L&T Construction" },
  { name: "Toyota Boshoku" },
  { name: "Provident Harmony" },
  { name: "Bhartiya City" },
  { name: "Featherlite" },
  { name: "Mahindra" },
  { name: "The Pride Hotel" },
  { name: "BMS Institute of Technology" },
  { name: "Reliance Trends" },
  { name: "Brigade Group" },
  { name: "VAR Group" },
  { name: "Prestige Tranquility" },
  { name: "BHIVE Workspace" },
  { name: "Kalyani Developers" }
];

export const SERVICES: ServiceInfo[] = [
  {
    id: "tank",
    slug: "water-tank-cleaning",
    name: "Water Tank Cleaning Services",
    // Clean, crystal clear blue water texture to symbolize the result
    image: "images/water-tank-cleaning.jpg",
    shortDesc: "Professional mechanical and chemical cleaning of water storage systems for safe, bacteria-free water.",
    longDesc: "Contaminated water tanks are breeding grounds for bacteria, viruses, and algae. Our advanced cleaning process removes sludge and disinfects your storage system thoroughly. Whether you require clean, bacteria-free water for your home, business, residential society, hotel, or industrial building, we can provide it for you.",
    benefits: [
      "Prevents water-borne diseases like cholera and jaundice.",
      "Removes harmful sediment and algae buildup.",
      "Improves the longevity of your plumbing and appliances.",
      "Ensures water meets health and safety standards."
    ],
    whyChooseUs: [
      "Scientific 6-stage cleaning process.",
      "Use of food-grade disinfectants.",
      "Highly trained and background-verified technicians.",
      "Advanced UV radiation treatment for bacteria elimination."
    ],
    workflow: [
      "Dewatering: Removing existing water using high-power pumps.",
      "Sludge Removal: Manual removal of mud and dirt.",
      "High-Pressure Washing: Deep cleaning of walls and floor.",
      "Vacuum Cleaning: Removing minute particles.",
      "Anti-Bacterial Spraying: Disinfecting the entire surface.",
      "UV Treatment: Final stage sterilization."
    ],
    dos: [
      "Emptying the entire tank using a high-pressure jet.",
      "Remove all the accumulated layers of algae and bacteria.",
      "Scrubbing the water tank using brushes.",
      "Vacuuming the gunk and algae.",
      "Removal of dirt, dust, plants, animal droppings, or mud.",
      "Make use of disinfectants for effective results.",
      "Leaving the water tank to dry."
    ],
    donts: [
      "If you are still getting contaminated water for drinking you need to examine your RO for repair.",
      "Our team should not be asked to fill water after the service is done."
    ],
    faqs: [
      {
        question: "Why is regular water tank cleaning critical?",
        answer: `Standing water in overhead tanks often becomes a breeding ground for algae, silt, and harmful bacteria over time. Regular professional cleaning by ${COMPANY_NAME} ensures that the water your family uses for drinking, cooking, and bathing is pathogen-free, significantly reducing the risk of waterborne diseases.`
      },
      {
        question: `How often does ${COMPANY_NAME} recommend cleaning?`,
        answer: "For most residential properties in Bangalore, we recommend a thorough deep cleaning every 6 months. For commercial buildings, hotels, or older properties with galvanized iron tanks, a quarterly schedule (every 3 months) is advisable to maintain optimal water quality."
      },
      {
        question: "Is the disinfectant used safe for drinking water?",
        answer: "Absolutely. We strictly use industrial-grade, eco-friendly, and food-safe disinfectants that are approved for use in potable water storage. Our rigorous 6-step process involves thorough rinsing, ensuring no chemical residue remains, making the water perfectly safe for consumption immediately after refilling."
      },
      {
        question: "Do you clean both underground sumps and overhead tanks?",
        answer: "Yes, we are fully equipped to handle both. In fact, we highly recommend cleaning your underground sump and overhead tank on the same day. Since the sump feeds the overhead tank, cleaning both ensures the entire water supply chain in your property is sanitized."
      },
      {
        question: "How much time does the service take?",
        answer: "For a standard residential setup (1000L - 5000L), the entire process typically takes between 2 to 4 hours. This duration can vary based on the tank's accessibility, the amount of sludge accumulation, and whether dewatering is required."
      },
      {
        question: "Do I need to empty the tank before you arrive?",
        answer: "It is helpful if you can minimize the water level to avoid wastage, but it is not mandatory. Our team carries high-speed dewatering pumps to drain the tank quickly before starting the cleaning process."
      },
      {
        question: "Do you offer Annual Maintenance Contracts (AMC)?",
        answer: `Yes, ${COMPANY_NAME} offers cost-effective AMC packages for apartments, societies, and corporate offices. This includes scheduled visits 3-4 times a year at discounted rates, ensuring you never have to worry about tracking your cleaning schedule.`
      },
      {
        question: "Are your technicians trained and insured?",
        answer: `Safety is our priority. All ${COMPANY_NAME} technicians undergo rigorous background checks and technical training. They follow strict safety protocols, especially when entering confined spaces like underground sumps, and use safety harnesses and oxygen monitoring where necessary.`
      },
      {
        question: "What happens if I am not satisfied with the cleaning?",
        answer: "We offer a 100% satisfaction guarantee. After the cleaning is done, our supervisor will inspect the tank with you. If you spot any issues or missed spots, we will reclean it immediately before leaving your premises."
      }
    ],
    testimonials: [
      { name: "Rahul Sharma", area: "Indiranagar", content: "Amazing service! The team was professional and the tank looks like new.", rating: 5 },
      { name: "Anita K.", area: "Whitefield", content: "Very thorough process. They even showed me the 'before and after' photos.", rating: 5 }
    ],
    avgRating: 4.9,
    reviewCount: 1540,
    serviceTime: "2 To 6 Hours (Size Dependent)",
    staffSent: "2 To 3 Trained Cleaners",
    equipmentUsed: ["High-pressure plunger pumps", "Vacuuming pumps", "Tank Washing nozzles", "Scrubbing Brushes", "Anti-Bacterial Sprays", "UV Sterilizers"]
  },
  {
    id: "stp",
    slug: "stp-cleaning-maintenance",
    name: "STP Cleaning & Maintenance",
    // Industrial piping/treatment plant - High contrast
    image: "images/stp-cleaning.png",
    shortDesc: "End-to-end Sewage Treatment Plant operation, cleaning, and regulatory compliance services.",
    longDesc: "Effective sewage treatment is critical for environmental compliance and health. We provide expert maintenance for STPs in apartments, hotels, and industries using industry-grade tools.",
    benefits: [
      "Guarantees compliance with PCB regulations.",
      "Eliminates foul odors and neighborhood complaints.",
      "Maintains the efficiency of pumps and blowers.",
      "Reduces operational downtime and emergency repairs."
    ],
    whyChooseUs: [
      "Experienced in handling complex industrial STPs.",
      "Quick response time for emergency blockages.",
      "Transparent reporting and maintenance logs.",
      "Focus on sustainable and eco-friendly treatment."
    ],
    workflow: [
      "Initial Assessment: Checking pH, TDS, and machinery status.",
      "Sludge Dewatering: Systematic removal and disposal of sludge.",
      "Media Cleaning: Cleaning and replacing filter media if needed.",
      "Mechanical Check: Servicing pumps, motors, and blowers.",
      "Optimization: Adjusting chemical dosing for better output."
    ],
    dos: [
      "Monitor daily logs of inflow and outflow.",
      "Conduct regular water quality tests.",
      "Ensure proper ventilation in the STP room."
    ],
    donts: [
      "Don't dump non-biodegradable waste into toilets.",
      "Don't skip periodic maintenance schedules.",
      "Don't ignore pump failure alarms."
    ],
    faqs: [
      {
        question: "Why is STP cleaning and maintenance important?",
        answer: "A well-maintained Sewage Treatment Plant (STP) ensures that wastewater is treated correctly before disposal or reuse. Neglecting it can lead to hazardous health conditions, foul odors, and legal penalties from pollution control boards. Regular maintenance ensures the treated water meets safety standards for gardening or flushing."
      },
      {
        question: "Is STP maintenance mandatory by law?",
        answer: "Yes, mandated by the Pollution Control Board (PCB), all residential apartments, commercial complexes, and industries generating sewage above a certain limit must maintain an operational STP. Failure to do so can result in hefty fines, electricity disconnection, or sealing of the property."
      },
      {
        question: "How do I fix foul smells coming from the STP?",
        answer: "Foul odors usually indicate anaerobic conditions due to lack of aeration or bacterial imbalance. It can also be caused by sludge accumulation. Our experts check the Dissolved Oxygen (DO) levels, clear sludge, and add culture bacteria to restore the balance and eliminate odors."
      },
      {
        question: "How often should an STP be cleaned or serviced?",
        answer: "Operational checks should be done daily. Comprehensive preventive maintenance, including machinery checks and filter cleaning, should be conducted monthly. Sludge dewatering frequency depends on the load but is typically required every 3 to 6 months."
      },
      {
        question: "Why hire a professional service for STP maintenance?",
        answer: "STP management involves complex chemistry and biology, along with mechanical and electrical knowledge. Professionals understand the delicate balance of MLSS (Mixed Liquor Suspended Solids), can repair pumps/blowers, and ensure the treated water parameters (BOD, COD, pH) meet legal standards."
      },
      {
        question: "Is your staff trained to handle industrial STPs?",
        answer: `Yes, our technicians are certified and experienced in handling various STP technologies like SBR, MBR, and MBBR. We continuously train our staff on the latest environmental regulations and safety protocols.`
      },
      {
        question: "Do you offer Annual Maintenance Contracts (AMC)?",
        answer: `Yes, we offer comprehensive AMC packages that include manpower for daily operations, chemicals, consumables, and periodic electromechanical maintenance. Contact us at ${PHONE_NUMBER} for a customized quote based on your plant capacity (KLD).`
      },
      {
        question: "What method do you use for sludge handling?",
        answer: "We use a combination of screw press dewatering and filter presses. For disposal, we coordinate with government-approved vendors to transport the sludge safely, ensuring full compliance with environmental laws."
      },
      {
        question: "How long does a general maintenance visit take?",
        answer: "A standard monthly preventive maintenance visit typically takes 4 to 8 hours, depending on the plant size. Emergency breakdown services are handled on a priority basis to restore functionality immediately."
      },
      {
        question: "What capacity STPs do you handle?",
        answer: "We handle plants ranging from small residential units of 10 KLD to large industrial plants of over 1 MLD (Million Liters Daily). We have the infrastructure to support all scales of operation."
      },
      {
        question: "Do you help with Pollution Control Board audits?",
        answer: "Yes, part of our AMC service involves maintaining all necessary logbooks and water testing reports. We assist our clients during PCB inspections to ensure all documentation and plant parameters are compliant."
      },
      {
        question: "How do I reschedule a maintenance visit?",
        answer: `Rescheduling is simple. Call our support line at ${PHONE_NUMBER} or email us. We appreciate at least 24 hours' notice for routine visits to adjust our technicians' roster efficiently.`
      },
      {
        question: "Are there hidden costs in the AMC?",
        answer: "Our AMC contracts are transparent. The scope of work (consumables, spares, manpower) is clearly defined in the agreement. Any major spare part replacement outside the contract scope is quoted separately for approval before work begins."
      }
    ],
    testimonials: [
      { name: "Apartment Secretary", area: "Koramangala", content: "They fixed our STP issues that multiple vendors failed to solve.", rating: 5 },
      { name: "Hotel Manager", area: "Jayanagar", content: "Professional team, always on time for monthly checks.", rating: 4 }
    ],
    avgRating: 4.8,
    reviewCount: 450,
    serviceTime: "4 To 8 Hours",
    staffSent: "3 To 4 Specialized Technicians",
    equipmentUsed: ["Sludge dewatering pumps", "Filter media cleaning tools", "pH meters", "Aeration blowers", "Specialized sludge tankers"]
  },
  {
    id: "deep",
    slug: "home-office-deep-cleaning",
    name: "Home and Office Deep Cleaning",
    // Pristine bright modern interior
    image: "images/deep-cleaning.png",
    shortDesc: "Intensive cleaning of every nook and corner using professional machinery and premium chemicals.",
    longDesc: "Standard cleaning often misses hidden dust and allergens. Our deep cleaning service targets tough stains, grout, and high-touch surfaces for a sanitized environment.",
    benefits: [
      "Complete removal of deep-seated dust and allergens.",
      "Restores the shine of floors and fixtures.",
      "Creates a healthier living and working space.",
      "Saves time and effort for busy professionals."
    ],
    whyChooseUs: [
      "Industrial-grade vacuum and scrubbing machines.",
      "Eco-friendly and pet-safe cleaning solutions.",
      "Insured and background-checked professional crew.",
      "100% satisfaction guarantee."
    ],
    workflow: [
      "Inspection: Identifying high-priority areas and stains.",
      "Dusting: Top-to-bottom dusting of fans, lights, and walls.",
      "Sanitization: Disinfecting high-touch areas like switches.",
      "Floor Scrubbing: Machine scrubbing for deep stains.",
      "Bathroom/Kitchen: Targeted degreasing and descaling.",
      "Final Polish: Buffing surfaces for a brand-new look."
    ],
    dos: [
      "Declutter your space before the team arrives.",
      "Communicate specific stain issues beforehand.",
      "Schedule deep cleaning once every quarter."
    ],
    donts: [
      "Don't expect permanent stains on marble to disappear without polishing.",
      "Don't use harsh acids on high-end fittings.",
      "Don't ignore hidden corners during your regular cleanup."
    ],
    faqs: [
      {
        question: "Why is deep cleaning important compared to regular maid cleaning?",
        answer: "Regular cleaning mostly involves surface-level dusting and mopping. Deep cleaning attacks hidden dust, grime, and allergens in hard-to-reach areas like ceiling fans, window tracks, behind appliances, and bathroom grouts. It significantly improves indoor air quality and hygiene."
      },
      {
        question: "Is deep cleaning mandatory for tenants?",
        answer: "While not always legally mandatory, most rental agreements in Bangalore require the property to be returned in a clean state. A professional move-out deep cleaning ensures you get your full security deposit back and leaves a good impression on landlords."
      },
      {
        question: "How do I remove tough stains from my floors?",
        answer: "Household mops cannot remove ingrained dirt or hard water stains. Our professional service uses single-disc scrubbing machines with specialized buffing pads and eco-friendly descaling agents to mechanically lift stains without damaging the floor surface."
      },
      {
        question: "How often should I book a deep cleaning service?",
        answer: "For homes, we recommend a deep cleaning every 3 to 6 months to maintain a healthy environment. For offices with high footfall, a quarterly deep clean is advised to keep the workspace professional and hygienic."
      },
      {
        question: "Why should I hire professionals instead of doing it myself?",
        answer: "Deep cleaning an entire home or office requires industrial equipment (like wet & dry vacuums, steam cleaners) and specific chemical knowledge that homeowners typically don't possess. Professionals complete in hours what might take you days, with far superior results."
      },
      {
        question: "Is your cleaning staff trustworthy and safe?",
        answer: `Absolutely. All our staff members undergo background verification and rigorous training. ${COMPANY_NAME} ensures that a supervisor is present or available to monitor the team, ensuring safety and accountability for your property.`
      },
      {
        question: "Do you offer Annual Contracts for offices?",
        answer: `Yes, we provide custom cleaning contracts for corporate offices, co-working spaces, and commercial establishments. Call ${PHONE_NUMBER} to discuss a schedule that fits your operations (weekends or after-hours).`
      },
      {
        question: "What cleaning methods do you use?",
        answer: "We use a 3-step process: Dry Dusting (vacuuming cobwebs and dust), Wet Scrubbing (using machines and safe chemicals for floors/bathrooms), and Sanitization (disinfecting high-touch points). Steam cleaning is used for upholstery and grease removal where applicable."
      },
      {
        question: "How much time does a deep cleaning take?",
        answer: "It depends on the size and condition of the property. Typically, a 2BHK apartment takes 4-6 hours, while a 3BHK or villa may take 6-8 hours. We deploy a team size appropriate to finish the job within a single day."
      },
      {
        question: "What areas are covered in the service?",
        answer: "Our standard package covers bedrooms, living rooms, kitchen (degreasing), bathrooms (descaling), balconies, and windows. We clean fans, light fixtures, doors, floor scrubbing, and cabinet interiors (if empty)."
      },
      {
        question: "Do you clean upholstery like sofas and mattresses?",
        answer: "Yes, sofa and mattress shampooing is an add-on service. We use injection-extraction machines to remove dust mites and stains from fabrics. You can add this to your deep cleaning package for a discounted rate."
      },
      {
        question: "How do I reschedule if something comes up?",
        answer: `We understand plans change. Please call us at ${PHONE_NUMBER} at least 24 hours in advance, and we will happily reschedule your slot to a convenient time without any penalty.`
      },
      {
        question: "Are there hidden costs?",
        answer: "Our pricing is transparent. The quote provided is based on the BHK size or square footage. Extra charges only apply if you add specific services like upholstery cleaning or marble polishing that were not in the original scope."
      }
    ],
    testimonials: [
      { name: "Priya V.", area: "Electronic City", content: "My kitchen was a mess, now it's sparkling! Highly recommend.", rating: 5 },
      { name: "Suresh Babu", area: "Whitefield", content: "Great service for my office. Very professional behavior.", rating: 5 }
    ],
    avgRating: 4.7,
    reviewCount: 2100,
    serviceTime: "4 To 10 Hours",
    staffSent: "2 To 6 Cleaners",
    equipmentUsed: ["Single Disc Floor Scrubbers", "Industrial Wet & Dry Vacuums", "Steam cleaners", "Microfiber mops", "Eco-friendly degreasers"]
  }
];
