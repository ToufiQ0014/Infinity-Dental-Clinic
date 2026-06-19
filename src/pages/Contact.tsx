import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
    date: '',
    time: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate next 14 days, skipping Sundays
  const today = new Date();
  const availableDates: Date[] = [];
  let daysToAdd = 1;
  while (availableDates.length < 10) {
    const d = new Date(today);
    d.setDate(today.getDate() + daysToAdd);
    if (d.getDay() !== 0) { // Skip Sundays
      availableDates.push(d);
    }
    daysToAdd++;
  }

  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'];

  useEffect(() => {
    // Check if a service was passed in the URL
    const params = new URLSearchParams(location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log("Submitting form data:", formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', service: '', message: '', date: '', time: '' });
      
      // Auto-hide success message
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
       {/* Header */}
       <section className="bg-slate-900 py-16 md:py-24 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready for a healthier smile? Fill out the form below or reach us directly. Our team will confirm your appointment shortly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Form Section */}
              <div className="bg-white p-8 md:p-10 shadow-xl border border-slate-200 rounded-2xl relative">
                 <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule a Visit</h2>
                 
                 {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center absolute inset-0 flex flex-col items-center justify-center z-10">
                       <CheckCircle size={48} className="text-green-500 mb-4" />
                       <h3 className="text-xl font-bold mb-2">Request Received!</h3>
                       <p>Thank you for reaching out. Our reception will contact you shortly to confirm your appointment time.</p>
                       <button onClick={() => setIsSubmitted(false)} className="mt-6 text-green-700 font-bold underline">Book another appointment</button>
                    </div>
                 ) : null}

                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                       <div>
                          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-shadow bg-slate-50 focus:bg-white"
                            placeholder="John Doe"
                          />
                       </div>
                       <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone" 
                            required 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-shadow bg-slate-50 focus:bg-white"
                            placeholder="+91 98765 43210"
                          />
                       </div>
                    </div>
                    
                    <div>
                       <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                       <select 
                         id="service" 
                         name="service"
                         value={formData.service}
                         onChange={handleChange}
                         className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-shadow bg-slate-50 focus:bg-white"
                       >
                         <option value="">Select a treatment (Optional)</option>
                         <option value="General Checkup">General Checkup</option>
                         <option value="Dental Implants">Dental Implants</option>
                         <option value="Root Canal Treatment">Root Canal Treatment</option>
                         <option value="Smile Designing">Smile Designing</option>
                         <option value="Clear Aligners">Clear Aligners</option>
                         <option value="Teeth Whitening">Teeth Whitening</option>
                         <option value="Pediatric Dentistry">Pediatric Dentistry</option>
                         <option value="Other">Other</option>
                       </select>
                    </div>

                    <div>
                       <label className="block text-sm font-bold text-slate-700 mb-3">Preferred Date</label>
                       <div className="flex gap-3 overflow-x-auto pb-2 snap-x hide-scrollbar">
                         {availableDates.map((date, idx) => {
                            const dateStr = date.toISOString().split('T')[0];
                            const isSelected = formData.date === dateStr;
                            return (
                               <button
                                 key={idx}
                                 type="button"
                                 onClick={() => setFormData({ ...formData, date: dateStr })}
                                 className={`flex-none snap-start w-20 flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                                    isSelected 
                                       ? 'border-teal-600 bg-teal-50 text-teal-700' 
                                       : 'border-slate-200 bg-white hover:border-teal-300 text-slate-600'
                                 }`}
                               >
                                 <span className="text-xs font-medium uppercase tracking-widest mb-1">
                                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                                 </span>
                                 <span className="text-2xl font-bold">
                                    {date.getDate()}
                                 </span>
                                 <span className="text-xs font-medium mt-1">
                                    {date.toLocaleDateString('en-US', { month: 'short' })}
                                 </span>
                               </button>
                            );
                         })}
                       </div>
                    </div>

                    {formData.date && (
                       <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                          <label className="block text-sm font-bold text-slate-700 mb-3">Preferred Time</label>
                          <div className="grid grid-cols-3 gap-3">
                             {timeSlots.map((time, idx) => {
                                const isSelected = formData.time === time;
                                return (
                                   <button
                                     key={idx}
                                     type="button"
                                     onClick={() => setFormData({ ...formData, time: time })}
                                     className={`p-3 rounded-lg border-2 text-sm font-bold transition-all ${
                                        isSelected 
                                           ? 'border-teal-600 bg-teal-600 text-white shadow-md' 
                                           : 'border-slate-200 bg-white hover:border-teal-300 text-slate-700 hover:bg-teal-50'
                                     }`}
                                   >
                                      {time}
                                   </button>
                                );
                             })}
                          </div>
                       </div>
                    )}

                    <div>
                       <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Any specific concerns?</label>
                       <textarea 
                         id="message" 
                         name="message" 
                         rows={4}
                         value={formData.message}
                         onChange={handleChange}
                         className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-teal-600 outline-none transition-shadow bg-slate-50 focus:bg-white"
                         placeholder="Describe your symptoms or requirements..."
                       ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                    >
                      {isSubmitting ? 'Submitting...' : (
                        <>
                          <span>Send Appointment Request</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-slate-500 text-center mt-4">We respect your privacy. No spam, ever.</p>
                 </form>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-center space-y-10">
                 <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                    <div className="space-y-6">
                       <div className="flex items-start">
                         <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mr-4 border border-teal-100">
                            <MapPin className="w-6 h-6 text-teal-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900">Clinic Address</h4>
                            <p className="text-slate-600 mt-1 leading-relaxed">Ground Floor, In Front of Choudhary Cycle & Tyre House,<br/>34 Vijay Nagar Main Road, Scheme No. 54,<br/>Vijay Nagar, Indore, MP 452010</p>
                         </div>
                       </div>
                       
                       <div className="flex items-start">
                         <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mr-4 border border-teal-100">
                            <Phone className="w-6 h-6 text-teal-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900">Phone</h4>
                            <p className="text-slate-600 mt-1"><a href="tel:+919425088167" className="hover:text-teal-600 font-medium transition-colors">+91 94250 88167</a></p>
                         </div>
                       </div>

                       <div className="flex items-start">
                         <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mr-4 border border-teal-100">
                            <Clock className="w-6 h-6 text-teal-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900">Business Hours</h4>
                            <div className="text-slate-600 mt-1 grid grid-cols-2 gap-x-4">
                               <span>Mon - Sat:</span><span className="font-medium">10:00 AM - 8:00 PM</span>
                               <span>Sunday:</span><span className="font-medium">Closed</span>
                            </div>
                         </div>
                       </div>
                    </div>
                 </div>

                 {/* Map */}
                 <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.328318894101!2d75.89115711536894!3d22.753205732053155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630327f2910795%3A0xc621b0ff58045d3!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.5]"
                    ></iframe>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

// Add CheckCircle icon specifically for this file
function CheckCircle(props: any) {
   return (
      <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
   )
}
