export default function Gallery() {
  const images = [
    {
      url: '/download.png',
      category: 'Clinic',
      title: 'Modern Reception Area'
    },
    {
      url: '/download (13).png',
      category: 'Treatment',
      title: 'Advanced Treatment Room'
    },
    {
      url: '/download (7).png',
      category: 'Team',
      title: 'Dr Anmol Billore'
    },
    {
      url: '/download (4).png',
      category: 'Team',
      title: 'Dr Aparna Billore'
    },
    {
      url: '/download (10).png',
      category: 'Equipment',
      title: 'Teeth Model'
    },
    {
      url: '/download (1).png',
      category: 'Clinic',
      title: 'Clinic Exterior'
    }
  ];

  return (
    <div className="flex flex-col">
       {/* Header */}
       <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a virtual tour of our state-of-the-art facility in Indore and see the quality of care we provide.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {images.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm bg-slate-100 aspect-square">
                   <img 
                     src={img.url} 
                     alt={img.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                      <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest mb-1">{img.category}</span>
                      <h3 className="text-xl font-bold">{img.title}</h3>
                   </div>
                </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
