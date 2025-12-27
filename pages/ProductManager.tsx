import React from 'react';
import { useLanguage } from '../components/LanguageContext';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Thermometer, LayoutDashboard, Check } from 'lucide-react';

const ProductManager: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 min-h-screen bg-gray-50 text-black">
      {/* Header */}
      <div className="bg-white border-b">
         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400?manager_main" className="rounded-3xl shadow-xl" alt="Smart Court Device" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-2">{t.managerPage.title}</h1>
                <p className="text-xl text-gray-500 mb-8">{t.managerPage.subtitle}</p>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-3">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="font-medium">{t.managerPage.pricing.setup}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="font-medium">{t.managerPage.pricing.monthly}</span>
                    </div>
                </div>

                <div className="mt-8">
                    <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition w-full md:w-auto">
                        {t.managerPage.cta}
                    </button>
                    <p className="mt-4 text-xs text-gray-400">
                        * All prices include VAT. Terms apply.
                    </p>
                </div>
            </div>
         </div>
      </div>

      {/* IoT Diagram Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">IoT Based Facility Management</h2>
            <p className="text-gray-500">Full control over HVAC, Lighting, and Access based on reservation data.</p>
        </div>
        
        <div className="relative bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center p-4">
                    <Thermometer className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="font-bold mb-2">Auto HVAC</h3>
                    <p className="text-sm text-gray-500">Turns on/off automatically based on schedule.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                    <h3 className="font-bold mb-2">Auto Lighting</h3>
                    <p className="text-sm text-gray-500">Syncs with booking time slots.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4">
                    <ShieldCheck className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="font-bold mb-2">Access Control</h3>
                    <p className="text-sm text-gray-500">QR code entry only for valid bookings.</p>
                </div>
                 <div className="flex flex-col items-center text-center p-4">
                    <LayoutDashboard className="w-12 h-12 text-purple-500 mb-4" />
                    <h3 className="font-bold mb-2">Remote Admin</h3>
                    <p className="text-sm text-gray-500">Control everything via mobile/web.</p>
                </div>
             </div>
        </div>
      </section>

      {/* Energy Saving Stats */}
      <section className="bg-white py-24 border-y border-gray-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-red-500 font-bold uppercase tracking-widest text-sm mb-2 block">Case Study</span>
                <h2 className="text-3xl font-bold mb-4">{t.managerPage.features.energy.title}</h2>
                <p className="text-xl text-gray-500">{t.managerPage.features.energy.desc}</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-4 px-6 text-left text-gray-500 font-medium">Metric</th>
                            <th className="py-4 px-6 text-right text-gray-500 font-medium">Before</th>
                            <th className="py-4 px-6 text-right text-black font-bold">With Manager</th>
                        </tr>
                    </thead>
                    <tbody>
                        {t.managerPage.features.energy.table.map((row, idx) => (
                            <tr key={idx} className="border-t border-gray-100">
                                <td className="py-4 px-6 font-medium">{row.label}</td>
                                <td className="py-4 px-6 text-right text-gray-400 line-through">{row.before}</td>
                                <td className="py-4 px-6 text-right text-red-500 font-bold">{row.after}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         </div>
      </section>

      {/* Applications */}
      <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
             <div className="bg-gray-900 text-white p-12 rounded-3xl relative overflow-hidden group">
                 <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">Unmanned Operations</h3>
                    <p className="text-gray-400">Perfect for 24/7 autonomous facilities. Reduce labor costs to zero.</p>
                 </div>
                 <img src="https://picsum.photos/600/400?night_court" className="absolute inset-0 opacity-40 group-hover:scale-105 transition duration-700 object-cover w-full h-full" />
             </div>
             <div className="bg-gray-100 p-12 rounded-3xl relative overflow-hidden">
                 <h3 className="text-2xl font-bold mb-4">Any Sport Facility</h3>
                 <p className="text-gray-600 mb-8">{t.managerPage.features.compatibility.desc}</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg text-center text-sm font-bold shadow-sm">Tennis</div>
                    <div className="bg-white p-3 rounded-lg text-center text-sm font-bold shadow-sm">Badminton</div>
                    <div className="bg-white p-3 rounded-lg text-center text-sm font-bold shadow-sm">Pickleball</div>
                    <div className="bg-white p-3 rounded-lg text-center text-sm font-bold shadow-sm">Table Tennis</div>
                 </div>
             </div>
          </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h4 className="font-bold mb-6 text-gray-900">Important Notice</h4>
                <ul className="space-y-4">
                    {t.managerPage.checklist.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-gray-600">
                            <Check className="w-5 h-5 text-gray-400 flex-shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ProductManager;