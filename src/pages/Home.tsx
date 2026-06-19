import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ArrowRight, ShieldCheck, Clock, MapPin, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const services = [
    { title: 'Dental Implants', desc: 'Permanent solution for missing teeth with natural-looking results.', icon: '🦷' },
    { title: 'Root Canal Treatment', desc: 'Painless procedure to save infected teeth and relieve pain instantly.', icon: '🏥' },
    { title: 'Smile Designing', desc: 'Customized aesthetic treatments for your perfect, confident smile.', icon: '✨' },
    { title: 'Clear Aligners', desc: 'Invisible braces for straightening teeth comfortably and discretely.', icon: '😁' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', text: 'Highly recommend Infinity Dental. Dr. Anmol is very professional and the clinic is exceptionally clean.', rating: 5 },
    { name: 'Rahul Verma', text: 'Got my root canal done absolutely pain-free. Best dental clinic in Vijay Nagar, Indore.', rating: 5 },
    { name: 'Neha Gupta', text: 'State of the art technology and very polite staff. Complete transparent pricing.', rating: 5 }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are your dental treatments painful?",
      answer: "We prioritize patient comfort and use advanced technology and effective local anesthesia to ensure that most of our procedures, including root canals and extractions, are completely painless."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept a wide range of dental insurance plans and provide detailed estimates before starting any treatment. Please bring your insurance card to your first visit so we can verify your coverage."
    },
    {
      question: "How should I prepare for my first appointment?",
      answer: "For your first visit, please arrive 10 minutes early to fill out any necessary paperwork. Bring your ID, dental insurance card (if applicable), and a list of any medications you are currently taking."
    },
    {
      question: "How often should I go to the dentist for a check-up?",
      answer: "We recommend visiting the dentist for a routine check-up and professional cleaning every six months. However, your specific needs may require more frequent visits."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, dental emergencies happen. We reserve time in our daily schedule for emergency patients. If you are in pain, please call our clinic immediately."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-50 pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl py-8">
              <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full mb-6 w-fit">
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm font-bold text-slate-700">4.9/5 Rating</span>
                <span className="text-xs text-slate-500 font-medium">(479+ Verified Reviews)</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 italic">
                Crafting the <span className="text-teal-600 not-italic">Perfect Smile</span> with Precision.
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Experience advanced dentistry with Dr. Anmol Billore. We combine technology with care for painless, life-changing results.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/treatments" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-center font-bold transition-colors shadow-md">
                  Our Treatments
                </Link>
                <a href="tel:+919425088167" className="border-2 border-teal-600 hover:bg-teal-50 text-teal-600 px-8 py-3 rounded-lg text-center font-bold transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Emergency Call</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block w-full relative bg-teal-50 aspect-square rounded-2xl overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-teal-700/20 z-0"></div>
              <img 
                src="/download.png" 
                alt="Modern Dental Clinic Reception" 
                className="relative z-10 w-full h-full object-cover mix-blend-overlay opacity-80"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur p-6 rounded-2xl border border-white shadow-2xl z-20">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-teal-700 font-bold uppercase tracking-widest text-xs">Modern Technology</p>
                    <p className="text-slate-900 font-bold text-lg">Digital Smile Designing</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                     <ShieldCheck className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-teal-200 rounded-full opacity-20 z-0 pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-teal-300 rounded-full opacity-10 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-2">Our Services</h2>
            <h3 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4">Comprehensive Care Under One Roof</h3>
            <p className="text-slate-600">Advanced dental treatments tailored to your specific needs using state-of-the-art technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-100 border border-slate-100 rounded-xl overflow-hidden shadow-sm">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors text-2xl shadow-sm">
                  {service.icon}
                </div>
                <h4 className="font-bold text-lg text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed max-w-xs">{service.desc}</p>
                <Link to="/treatments" className="text-teal-600 font-bold text-sm inline-flex items-center group-hover:text-teal-700 transition-colors mt-auto">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/treatments" className="inline-flex text-slate-900 font-bold border-b-2 border-slate-900 pb-1 hover:text-teal-600 hover:border-teal-600 transition-colors">
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-2">Why Choose Infinity Dental</h2>
              <h3 className="text-3xl md:text-3xl font-bold text-white mb-6">Excellence in Every Smile</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We blend advanced technology with a compassionate approach. Our clinic maintains strict international hygiene protocols to ensure a safe, anxiety-free experience for every patient.
              </p>
              <ul className="space-y-4">
                {['Painless Treatments & Compassionate Care', 'Advanced Dental Technology (Intraoral Scanners, Digital X-Rays)', 'Strict Sterilization & Hygienic Environment', 'Experienced & Specialized Dentists', 'Transparent Pricing Structure'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 shrink-0 mr-3" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-800 rounded-full overflow-hidden border-8 border-slate-800 relative shadow-2xl">
                 <img 
                   src="/download (13).png" 
                   alt="Doctor providing treatment" 
                   className="object-cover w-full h-full opacity-90 mix-blend-luminosity" 
                 />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 shadow-xl max-w-xs rounded-xl border border-slate-100">
                 <p className="font-bold text-xl mb-1">Our Specialists</p>
                 <p className="text-sm text-slate-500 mb-3 font-medium tracking-wide">Dr. Anmol & Dr. Aparna Billore</p>
                 <Link to="/about" className="text-teal-600 text-sm font-bold flex items-center hover:text-yellow-600 transition-colors">
                   Meet the team <ArrowRight className="w-4 h-4 ml-1" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <div className="flex justify-center mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8 mr-2" />
                <div className="flex text-yellow-500 items-center">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                </div>
             </div>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Loved by Our Patients</h3>
             <p className="text-slate-600">Join Google's highest-rated dental clinic in Vijay Nagar, Indore. We've brought smiles to thousands.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((t, idx) => (
               <div key={idx} className="bg-white p-8 shadow-sm border border-slate-200 rounded-2xl">
                  <div className="flex text-yellow-400 mb-6">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-slate-700 mb-6 italic leading-relaxed">"{t.text}"</p>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1 font-bold">Verified Patient</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-2">Have Questions?</h2>
            <h3 className="text-3xl md:text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-slate-600">Find answers to common questions about our services, insurance, and what to expect during your visit.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${openFaqIndex === index ? 'border-teal-200 bg-teal-50/30' : 'border-slate-200 hover:border-teal-100'}`}
              >
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className={`font-bold pr-4 ${openFaqIndex === index ? 'text-teal-800' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/CTA Widget */}
      <section className="bg-teal-700 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-2xl translate-y-12 rounded-2xl overflow-hidden border border-slate-100">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 mb-6">Schedule Your Visit</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-teal-600 shrink-0 mr-4 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Clinic Address</p>
                      <p className="text-slate-600 mt-1 leading-relaxed">Ground Floor, In Front of Choudhary Cycle & Tyre House, 34 Vijay Nagar Main Road, Scheme No. 54, Indore, MP 452010</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-teal-600 shrink-0 mr-4 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Working Hours</p>
                      <p className="text-slate-600 mt-1">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday closed</p>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-lg text-center font-bold transition-colors w-full shadow-lg">
                  Book an Appointment Online
                </Link>
              </div>
              <div className="h-64 md:h-auto min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328318894101!2d75.89115711536894!3d22.753205732053155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630327f2910795%3A0xc621b0ff58045d3!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale opacity-90 contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Spacer for the translated widget */}
      <div className="h-24 bg-white"></div>
    </div>
  );
}
