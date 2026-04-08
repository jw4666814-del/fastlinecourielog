import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.038A2 2 0 0115 11.1V15h.95a2.5 2.5 0 014.9 0H21a1 1 0 001-1v-4a1 1 0 00-.293-.707l-3-3A1 1 0 0018 6h-2V5a1 1 0 00-1-1H3z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-gray-900 tracking-tight">
                Fastline <span className="text-red-600">Courie</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
              <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
              <a href="#why-us" className="hover:text-red-600 transition-colors">Why Us</a>
              <a href="#how-it-works" className="hover:text-red-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="hover:text-red-600 transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
              <a
                href="#track"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Track Shipment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Fast • Reliable • Global
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Deliver Faster,<br />
              <span className="text-red-400">Smarter</span> &amp; Safer.
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-xl">
              Fastline Courie connects businesses and individuals with world-class courier and
              express delivery services. From same-day local delivery to international freight —
              we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#track"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg"
              >
                Track Your Shipment
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-xl text-base transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute w-80 h-80 bg-red-600 opacity-20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
              <div className="bg-red-600 rounded-full p-10 shadow-2xl">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3h10.5a2.25 2.25 0 012.25 2.25v.75h1.5a2.25 2.25 0 011.591.659l2.25 2.25c.421.421.659.993.659 1.591v3.75a2.25 2.25 0 01-2.25 2.25H19.5a3 3 0 11-6 0H9a3 3 0 11-6 0H2.25A2.25 2.25 0 010 15V5.25A2.25 2.25 0 012.25 3h1.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Tracking bar */}
        <div id="track" className="relative bg-white/10 backdrop-blur border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-white font-semibold whitespace-nowrap">Track Shipment:</span>
              <input
                type="text"
                placeholder="Enter your tracking number..."
                className="flex-1 rounded-xl px-4 py-3 text-gray-900 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
                Track Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10M+', label: 'Packages Delivered' },
            { value: '150+', label: 'Countries Covered' },
            { value: '99.8%', label: 'On-Time Rate' },
            { value: '24/7', label: 'Customer Support' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold">{stat.value}</div>
              <div className="text-red-100 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">What We Offer</span>
            <h2 className="text-4xl font-extrabold mt-2">Our Courier Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              From urgent same-day deliveries to scheduled freight logistics, Fastline Courie
              provides end-to-end solutions for every shipping need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Same-Day Delivery',
                desc: 'Need it there today? Our express same-day courier service guarantees delivery within hours anywhere in the city.',
                color: 'bg-red-50 border-red-100',
                badge: 'Most Popular',
              },
              {
                icon: '🌍',
                title: 'International Shipping',
                desc: 'Reliable door-to-door international shipping with full customs support to over 150 countries worldwide.',
                color: 'bg-blue-50 border-blue-100',
              },
              {
                icon: '📦',
                title: 'Freight & Cargo',
                desc: 'Heavy or bulky shipments handled with care. Air, sea, and road freight options to suit your budget and timeline.',
                color: 'bg-orange-50 border-orange-100',
              },
              {
                icon: '🏢',
                title: 'Business Logistics',
                desc: 'Dedicated account management and volume pricing for businesses. Integrate our API into your e-commerce workflow.',
                color: 'bg-green-50 border-green-100',
              },
              {
                icon: '❄️',
                title: 'Cold Chain Delivery',
                desc: 'Temperature-controlled transport for pharmaceuticals, food products, and perishable goods.',
                color: 'bg-cyan-50 border-cyan-100',
              },
              {
                icon: '🔒',
                title: 'Secure Document Courier',
                desc: 'Tamper-proof, signature-required delivery for sensitive legal, financial, and confidential documents.',
                color: 'bg-purple-50 border-purple-100',
              },
            ].map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl border p-8 ${s.color} hover:shadow-lg transition-shadow`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  {s.badge && (
                    <span className="text-xs bg-red-600 text-white font-bold px-2 py-0.5 rounded-full">
                      {s.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                <a href="#contact" className="inline-block mt-4 text-red-600 font-semibold hover:underline text-sm">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Why Fastline Courie</span>
            <h2 className="text-4xl font-extrabold mt-2">Built for Speed, Trusted for Reliability</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: '🚀',
                  title: 'Lightning-Fast Delivery',
                  desc: 'Our optimized routing algorithms and vast carrier network ensure the fastest possible delivery times, every time.',
                },
                {
                  icon: '📍',
                  title: 'Real-Time Tracking',
                  desc: 'Track your shipment live with GPS precision. Get instant SMS/email notifications at every step of the journey.',
                },
                {
                  icon: '🌐',
                  title: 'Global Reach',
                  desc: 'With partners in 150+ countries, we ensure your package reaches any corner of the world safely and on schedule.',
                },
                {
                  icon: '💰',
                  title: 'Competitive Pricing',
                  desc: 'Transparent pricing with no hidden fees. Flexible plans for individuals, SMEs, and enterprise customers.',
                },
                {
                  icon: '🛡️',
                  title: 'Fully Insured Shipments',
                  desc: 'Every package is covered. Our comprehensive insurance policy gives you total peace of mind on every delivery.',
                },
                {
                  icon: '🤝',
                  title: '24/7 Dedicated Support',
                  desc: 'Our logistics experts are available around the clock to assist with any questions, changes, or concerns.',
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="text-3xl mt-1">{f.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{f.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-10 text-white shadow-2xl">
              <h3 className="text-2xl font-extrabold mb-6">Why Businesses Love Us</h3>
              <ul className="space-y-4">
                {[
                  'Dedicated account manager assigned to your business',
                  'API integration with major e-commerce platforms',
                  'Volume discounts for 100+ shipments/month',
                  'Branded tracking pages for your customers',
                  'Monthly analytics & performance reports',
                  'Priority pickup scheduling 7 days a week',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-200 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-100">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block bg-white text-red-600 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors"
              >
                Start a Business Account
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-400 font-bold uppercase tracking-widest text-sm">Simple Process</span>
            <h2 className="text-4xl font-extrabold mt-2">How It Works</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Sending a package with Fastline Courie is effortless. Follow these four simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Book Online',
                desc: 'Fill in your pickup and delivery details on our website or mobile app in under 2 minutes.',
                icon: '💻',
              },
              {
                step: '02',
                title: 'We Pick Up',
                desc: 'Our courier arrives at your door at the scheduled time to collect your package.',
                icon: '🏠',
              },
              {
                step: '03',
                title: 'Track in Real-Time',
                desc: 'Follow your shipment every step of the way with live GPS tracking and notifications.',
                icon: '📡',
              },
              {
                step: '04',
                title: 'Delivered!',
                desc: 'Your package arrives safely at its destination with proof of delivery and a signature.',
                icon: '✅',
              },
            ].map((step, i) => (
              <div key={step.step} className="relative text-center">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-red-800" />
                )}
                <div className="relative inline-block mb-4">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-extrabold w-7 h-7 rounded-full flex items-center justify-center shadow">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Customer Stories</span>
            <h2 className="text-4xl font-extrabold mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                role: 'E-commerce Owner',
                quote:
                  'Fastline Courie has transformed our fulfillment. Our customers receive their orders faster than ever and the real-time tracking has slashed support tickets by 40%.',
                rating: 5,
                avatar: 'SM',
              },
              {
                name: 'David K.',
                role: 'Operations Manager, RetailPlus',
                quote:
                  "We handle hundreds of shipments daily. Fastline's business account team is incredibly responsive and the pricing is the best we've found in the market.",
                rating: 5,
                avatar: 'DK',
              },
              {
                name: 'Priya L.',
                role: 'Healthcare Logistics',
                quote:
                  'The cold chain service is flawless. Our temperature-sensitive medical supplies arrive in perfect condition every time. Highly recommended.',
                rating: 5,
                avatar: 'PL',
              },
              {
                name: 'James O.',
                role: 'Freelance Designer',
                quote:
                  'I needed urgent documents delivered internationally. Fastline handled everything seamlessly — customs, tracking, the lot. Will use again.',
                rating: 5,
                avatar: 'JO',
              },
              {
                name: 'Amara T.',
                role: 'Boutique Owner',
                quote:
                  'Same-day delivery has become a huge selling point for my boutique. My local customers love it. Fastline Courie made it possible.',
                rating: 5,
                avatar: 'AT',
              },
              {
                name: 'Chen W.',
                role: 'Import/Export Director',
                quote:
                  'The international freight service saved us thousands on our last bulk shipment. The team handled all the paperwork and kept us updated throughout.',
                rating: 5,
                avatar: 'CW',
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-sm border p-8 hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-4">
                  {'★'.repeat(t.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Ship Smarter?</h2>
          <p className="text-red-100 text-lg mb-8">
            Join over 50,000 businesses and individuals who trust Fastline Courie for every delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors">
              Get a Free Quote
            </a>
            <a href="#track" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Track a Shipment
            </a>
          </div>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Get In Touch</span>
            <h2 className="text-4xl font-extrabold mt-2">Request a Quote</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Tell us about your shipment and we'll provide a fast, no-obligation quote within 30 minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <form className="space-y-5 bg-gray-50 rounded-2xl p-8 border">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type</label>
                  <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                    <option value="">Select a service</option>
                    <option>Same-Day Delivery</option>
                    <option>International Shipping</option>
                    <option>Freight & Cargo</option>
                    <option>Business Logistics</option>
                    <option>Cold Chain Delivery</option>
                    <option>Document Courier</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Pickup Location</label>
                  <input type="text" placeholder="City, Country" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Destination</label>
                  <input type="text" placeholder="City, Country" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Package Details</label>
                <textarea
                  rows={4}
                  placeholder="Describe your package: weight, dimensions, contents..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors text-base"
              >
                Submit Quote Request
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-extrabold mb-4">Contact Information</h3>
                <p className="text-gray-500 mb-6">
                  Prefer to speak to someone directly? Our team is available 24/7.
                </p>
              </div>
              {[
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+1 (800) FASTLINE',
                  sub: 'Available 24 hours, 7 days a week',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'info@fastlinecourie.com',
                  sub: 'We reply within 30 minutes',
                },
                {
                  icon: '📍',
                  label: 'Headquarters',
                  value: '123 Logistics Park, Suite 500',
                  sub: 'New York, NY 10001, USA',
                },
                {
                  icon: '🕐',
                  label: 'Office Hours',
                  value: 'Mon – Fri: 7am – 9pm',
                  sub: 'Sat – Sun: 8am – 5pm (Courier pickups 24/7)',
                },
              ].map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="text-2xl bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-red-600 uppercase tracking-wide">{info.label}</div>
                    <div className="font-bold text-gray-800">{info.value}</div>
                    <div className="text-gray-400 text-sm">{info.sub}</div>
                  </div>
                </div>
              ))}

              <div className="bg-gray-900 text-white rounded-2xl p-6 mt-4">
                <h4 className="font-bold mb-2">Download Our App</h4>
                <p className="text-gray-400 text-sm mb-4">Book, track, and manage shipments from anywhere.</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    🍎 App Store
                  </button>
                  <button className="flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    🤖 Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-red-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.038A2 2 0 0115 11.1V15h.95a2.5 2.5 0 014.9 0H21a1 1 0 001-1v-4a1 1 0 00-.293-.707l-3-3A1 1 0 0018 6h-2V5a1 1 0 00-1-1H3z" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white">
                Fastline <span className="text-red-500">Courie</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Delivering speed, reliability, and trust across the globe. Your packages, our promise.
            </p>
            <div className="flex gap-4 mt-6">
              {['𝕏', 'f', 'in', '📷'].map((icon, i) => (
                <a key={i} href="#" className="w-9 h-9 bg-gray-800 hover:bg-red-600 transition-colors rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Same-Day Delivery', 'International Shipping', 'Freight & Cargo', 'Business Logistics', 'Cold Chain', 'Document Courier'].map((s) => (
                <li key={s}><a href="#services" className="hover:text-red-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Careers', 'Blog & News', 'Press Room', 'Partners', 'Contact Us'].map((s) => (
                <li key={s}><a href="#" className="hover:text-red-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wide">Support</h4>
            <ul className="space-y-2 text-sm">
              {['Track Shipment', 'FAQ', 'Pricing', 'Claims & Insurance', 'Prohibited Items', 'API Documentation'].map((s) => (
                <li key={s}><a href="#" className="hover:text-red-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
            <span>© {new Date().getFullYear()} Fastline Courie. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
