import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    {
      id: 'implants',
      title: 'Dental Implants',
      desc: 'The most reliable and natural-looking solution for replacing single or multiple missing teeth. They look, feel, and function just like your natural teeth.',
      benefits: ['Permanent solution', 'Prevents bone loss', 'Matches natural teeth', 'Restores chewing power'],
      img: '/download (10).png'
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment',
      desc: 'Got a severe toothache? Our single-sitting, rotary root canal treatments are virtually painless and designed to quickly eliminate infection and save your natural tooth.',
      benefits: ['Painless procedure', 'Saves natural tooth', 'Prevents extraction', 'Stops the pain immediately'],
      img: '/download (13).png'
    },
    {
      id: 'smile-design',
      title: 'Smile Designing',
      desc: 'A customized treatment plan to recreate your perfect smile using a combination of veneers, crowns, alignment, and whitening.',
      benefits: ['Boosts self-confidence', 'Customized to your face', 'Corrects gaps & stains', 'Long-lasting aesthetics'],
      img: '/download (4).png'
    },
    {
      id: 'aligners',
      title: 'Clear Aligners',
      desc: 'Straighten your teeth without metal brackets. Clear aligners are virtually invisible, removable, and offer a comfortable way to perfect your smile.',
      benefits: ['Invisible correction', 'Removable to eat & brush', 'Comfortable fit', 'Faster than metal braces'],
      img: '/download.png'
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      desc: 'Gentle, anxiety-free dental care specifically tailored for children to build healthy habits early on.',
      benefits: ['Child-friendly environment', 'Preventive care focus', 'Cavity prevention', 'Gentle handling'],
      img: '/download (1).png'
    },
    {
      id: 'teeth-whitening',
      title: 'Teeth Whitening',
      desc: 'Professional in-clinic whitening procedures that safely remove deep stains to give you a brighter, more confident smile in just one hour.',
      benefits: ['Instant results', 'Safe for enamel', 'Removes deep stains', 'Long-lasting brightness'],
      img: '/download (7).png' // Using generic, since finding distinct good dental photos on unsplash is hard.
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Treatments</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Comprehensive, advanced, and personalized dental treatments to handle everything from routine checkups to complex full-mouth rehabilitations.
          </p>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {treatments.map((treatment, idx) => (
              <div key={treatment.id} id={treatment.id} className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                  <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100">
                    <img src={treatment.img} alt={treatment.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{treatment.title}</h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {treatment.desc}
                  </p>
                  <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest text-teal-600">Key Benefits</h4>
                    <ul className="grid grid-cols-2 gap-3">
                      {treatment.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start text-sm text-slate-600 font-medium">
                          <Check className="w-4 h-4 text-yellow-500 mr-2 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/contact?service=${encodeURIComponent(treatment.title)}`} className="inline-flex bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-bold transition-colors items-center shadow-md">
                    Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Emergency CTA */}
      <section className="bg-yellow-50 py-16 border-y border-yellow-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Experiencing a Dental Emergency?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">We prioritize acute pain, trauma, and accidents. Contact us immediately for urgent care.</p>
            <a href="tel:+919425088167" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-lg font-bold tracking-wide hover:bg-slate-800 transition-colors shadow-lg">
               CALL EMERGENCY LINE
            </a>
         </div>
      </section>
    </div>
  );
}
