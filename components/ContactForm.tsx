import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { FormData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import Toast from './ui/Toast';

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    email: '',
    type: '',
    message: '',
    privacy: false,
    // Initialize dynamic fields
    productName: '',
    quantity: '',
    region: '',
    businessName: '',
    spaceSize: '',
    companyName: '',
    website: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.contact) newErrors.contact = 'Required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.type) newErrors.type = 'Required';
    if (!formData.privacy) newErrors.privacy = 'Required';

    // Dynamic validations
    if (formData.type === 'purchase') {
      if (!formData.productName) newErrors.productName = 'Required';
    }
    if (formData.type === 'b2b') {
      if (!formData.region) newErrors.region = 'Required';
    }
    if (formData.type === 'partnership') {
      if (!formData.companyName) newErrors.companyName = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage(t.contact.form.success);
      setFormData({
        name: '',
        contact: '',
        email: '',
        type: '',
        message: '',
        privacy: false,
        productName: '',
        quantity: '',
        region: '',
        businessName: '',
        spaceSize: '',
        companyName: '',
        website: '',
      });
      setErrors({});
    }, 1500);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all placeholder-gray-500";
  const labelClasses = "block text-sm font-medium text-gray-400 mb-1";
  const errorClasses = "text-red-500 text-xs mt-1 absolute";

  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-electric/10 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-gray-400">{t.contact.subtitle}</p>
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl"
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className={labelClasses}>{t.contact.form.name} *</label>
                        <input 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <span className={errorClasses}>{errors.name}</span>}
                    </div>
                    <div className="relative">
                        <label className={labelClasses}>{t.contact.form.contact} *</label>
                        <input 
                            type="text" 
                            value={formData.contact}
                            onChange={(e) => setFormData({...formData, contact: e.target.value})}
                            className={`${inputClasses} ${errors.contact ? 'border-red-500' : ''}`}
                        />
                        {errors.contact && <span className={errorClasses}>{errors.contact}</span>}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className={labelClasses}>{t.contact.form.email} *</label>
                        <input 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {errors.email && <span className={errorClasses}>{errors.email}</span>}
                    </div>
                    <div className="relative">
                        <label className={labelClasses}>{t.contact.form.type} *</label>
                        <select 
                            value={formData.type}
                            onChange={(e) => setFormData({...formData, type: e.target.value})}
                            className={`${inputClasses} ${errors.type ? 'border-red-500' : ''} appearance-none`}
                        >
                            <option value="" disabled className="bg-dark text-gray-500">{t.contact.form.typePlaceholder}</option>
                            <option value="purchase" className="bg-dark">{t.contact.form.types.purchase}</option>
                            <option value="b2b" className="bg-dark">{t.contact.form.types.b2b}</option>
                            <option value="partnership" className="bg-dark">{t.contact.form.types.partnership}</option>
                        </select>
                        {errors.type && <span className={errorClasses}>{errors.type}</span>}
                    </div>
                </div>

                {/* Dynamic Fields */}
                <AnimatePresence>
                    {formData.type === 'purchase' && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden grid md:grid-cols-2 gap-6"
                        >
                            <div className="relative pt-1">
                                <label className={labelClasses}>{t.contact.form.dynamic.product} *</label>
                                <input 
                                    type="text" 
                                    value={formData.productName}
                                    onChange={(e) => setFormData({...formData, productName: e.target.value})}
                                    className={`${inputClasses} ${errors.productName ? 'border-red-500' : ''}`}
                                />
                                {errors.productName && <span className={errorClasses}>{errors.productName}</span>}
                            </div>
                            <div className="relative pt-1">
                                <label className={labelClasses}>{t.contact.form.dynamic.quantity}</label>
                                <input 
                                    type="number" 
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                                    className={inputClasses}
                                />
                            </div>
                        </motion.div>
                    )}

                    {formData.type === 'b2b' && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6 pt-1">
                                <div className="relative">
                                    <label className={labelClasses}>{t.contact.form.dynamic.businessName}</label>
                                    <input 
                                        type="text" 
                                        value={formData.businessName}
                                        onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                                        className={inputClasses}
                                    />
                                </div>
                                <div className="relative">
                                    <label className={labelClasses}>{t.contact.form.dynamic.spaceSize}</label>
                                    <input 
                                        type="text" 
                                        value={formData.spaceSize}
                                        onChange={(e) => setFormData({...formData, spaceSize: e.target.value})}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className={labelClasses}>{t.contact.form.dynamic.region} *</label>
                                <input 
                                    type="text" 
                                    value={formData.region}
                                    onChange={(e) => setFormData({...formData, region: e.target.value})}
                                    className={`${inputClasses} ${errors.region ? 'border-red-500' : ''}`}
                                />
                                {errors.region && <span className={errorClasses}>{errors.region}</span>}
                            </div>
                        </motion.div>
                    )}

                    {formData.type === 'partnership' && (
                        <motion.div 
                             initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden grid md:grid-cols-2 gap-6 pt-1"
                        >
                             <div className="relative">
                                <label className={labelClasses}>{t.contact.form.dynamic.companyName} *</label>
                                <input 
                                    type="text" 
                                    value={formData.companyName}
                                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                                    className={`${inputClasses} ${errors.companyName ? 'border-red-500' : ''}`}
                                />
                                {errors.companyName && <span className={errorClasses}>{errors.companyName}</span>}
                            </div>
                            <div className="relative">
                                <label className={labelClasses}>{t.contact.form.dynamic.website}</label>
                                <input 
                                    type="text" 
                                    value={formData.website}
                                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                                    className={inputClasses}
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div>
                    <label className={labelClasses}>{t.contact.form.message}</label>
                    <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className={inputClasses}
                    />
                </div>

                <div className="relative flex items-center gap-3">
                    <input 
                        type="checkbox"
                        id="privacy"
                        checked={formData.privacy}
                        onChange={(e) => setFormData({...formData, privacy: e.target.checked})}
                        className="w-5 h-5 rounded border-gray-600 text-electric focus:ring-electric bg-dark/50"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-400 cursor-pointer select-none">
                        {t.contact.form.privacy}
                    </label>
                     {errors.privacy && <span className="text-red-500 text-xs absolute -bottom-5 left-0">Required</span>}
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-electric to-blue-600 hover:from-blue-600 hover:to-electric text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-electric/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                    {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <>
                            {t.contact.form.submit}
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
      </div>

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </section>
  );
};

export default ContactForm;