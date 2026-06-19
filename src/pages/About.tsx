import { Shield, Target, Eye, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Our Clinic</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Setting the gold standard for dental care in Indore. We combine clinical excellence with a patient-first philosophy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/download (1).png" 
                alt="Infinity Dental Clinic Exterior" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Welcome to Infinity Dental</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Located in the heart of Vijay Nagar, Indore, Infinity Dental Clinic is a state-of-the-art facility dedicated to providing comprehensive and painless dental care. Our infrastructure is built to international standards, ensuring strict sterilization and a hygienic environment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We understand that visiting a dentist can be daunting. That's why our environment is designed to be calming, and our staff is trained to accommodate your comfort at every step of your treatment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <Target className="w-8 h-8 text-teal-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                    <p className="text-sm text-slate-600">To deliver pain-free, specialized dental care that improves the quality of life for our patients.</p>
                 </div>
                 <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
                    <Eye className="w-8 h-8 text-teal-600 mb-4" />
                    <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
                    <p className="text-sm text-slate-600">To be the most trusted name in dental healthcare across Central India.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-2">Our Specialists</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Meet the Experts</h3>
           </div>
           
           <div className="grid md:grid-cols-2 gap-16">
              {/* Dr Anmol */}
              <div className="flex flex-col items-center text-center">
                 <div className="aspect-square w-64 overflow-hidden rounded-full border-4 border-slate-700 shadow-xl mb-8 relative">
                   <img 
                     src="/download (7).png" 
                     alt="Dr. Anmol Billore" 
                     className="w-full h-full object-cover object-top mix-blend-luminosity opacity-90"
                   />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-2">Dr. Anmol Billore</h4>
                 <p className="text-slate-400 font-medium tracking-wide uppercase text-sm mb-4">B.D.S. Oral & Dental Surgeon</p>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Specializing in smile designing & implants. Dr. Anmol brings years of clinical expertise and a passion for aesthetic and restorative dentistry to transform smiles gently.
                 </p>
              </div>

              {/* Dr Aparna */}
              <div className="flex flex-col items-center text-center">
                 <div className="aspect-square w-64 overflow-hidden rounded-full border-4 border-slate-700 shadow-xl mb-8 relative">
                   <img 
                     src="/download (13).png" 
                     alt="Dr. Aparna Billore" 
                     className="w-full h-full object-cover object-top mix-blend-luminosity opacity-90"
                   />
                 </div>
                 <h4 className="text-2xl font-bold text-white mb-2">Dr. Aparna Billore</h4>
                 <p className="text-slate-400 font-medium tracking-wide uppercase text-sm mb-4">B.D.S. Dental & Cosmetic Surgeon</p>
                 <p className="text-slate-300 leading-relaxed mb-6">
                   Dedicated to providing comprehensive oral health and cosmetic makeovers. Dr. Aparna emphasizes minimally invasive dentistry and compassionate patient care.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Tech & Hygiene */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-12">Uncompromising Safety & Technology</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-8 border border-slate-100 bg-white shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                 <h3 className="font-bold text-xl text-slate-900 mb-4">Advanced Diagnostics</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">We utilize digital X-rays and intraoral scanners to ensure precise diagnosis with minimal radiation exposure.</p>
              </div>
              <div className="p-8 border border-slate-100 bg-white shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                 <h3 className="font-bold text-xl text-slate-900 mb-4">Strict Sterilization</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">4-step sterilization protocols and Class-B autoclaves guarantee that every instrument is 100% infection-free.</p>
              </div>
              <div className="p-8 border border-slate-100 bg-white shadow-sm rounded-2xl hover:shadow-md transition-shadow">
                 <h3 className="font-bold text-xl text-slate-900 mb-4">Painless Technology</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">Rotary endodontics, laser dentistry, and conscious sedation techniques to make treatments incredibly comfortable.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
