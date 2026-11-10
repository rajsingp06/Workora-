import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Check, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { locationService } from '../../utils/location';

export default function BookingModal({ provider, userLocation, onClose, onShowToast }) {
  const [selectedService, setSelectedService] = useState(
    provider?.servicesList?.[0] || { name: 'Standard Service Consultation', price: `₹${provider?.startingPrice || 999}` }
  );
  
  // Date state: default tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [bookingDate, setBookingDate] = useState(tomorrow.toISOString().split('T')[0]);

  // Available Time Slots
  const timeSlots = [
    '09:00 AM - 10:30 AM',
    '11:00 AM - 12:30 PM',
    '02:00 PM - 03:30 PM',
    '04:30 PM - 06:00 PM',
    '06:30 PM - 08:00 PM'
  ];
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[1]);

  // Address & Notes
  const [houseNo, setHouseNo] = useState('');
  const [streetAddress, setStreetAddress] = useState(userLocation?.area || 'Bandra West');
  const [landmark, setLandmark] = useState('');
  const [customerPhone, setCustomerPhone] = useState('+91 98200 12345');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  if (!provider) return null;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!houseNo.trim()) {
      setError('Please enter your flat / house number.');
      return;
    }
    if (!customerPhone.trim()) {
      setError('Please provide a contact phone number for the technician/artist.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const fullAddress = `${houseNo.trim()}, ${streetAddress}, ${landmark ? landmark + ', ' : ''}${userLocation?.city || 'Mumbai'} - ${userLocation?.pinCode || '400050'}`;
      
      const newBooking = locationService.saveBooking({
        providerId: provider.id,
        providerName: provider.name,
        providerProfession: provider.profession,
        providerPhone: provider.phone,
        providerAvatar: provider.avatar,
        serviceName: selectedService.name,
        servicePrice: selectedService.price,
        date: bookingDate,
        timeSlot: selectedSlot,
        address: fullAddress,
        phone: customerPhone,
        notes: notes.trim()
      });

      setIsSubmitting(false);
      setConfirmedBooking(newBooking);

      if (onShowToast) {
        onShowToast(`Booking confirmed with ${provider.name}! Ref: ${newBooking.id}`);
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={provider.avatar}
              alt={provider.name}
              className="w-12 h-12 rounded-2xl object-cover ring-2 ring-slate-100 shadow-soft-sm"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-base font-extrabold text-slate-900 tracking-tight">{provider.name}</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700">Verified</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">{provider.profession}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="p-6 sm:p-8 text-center space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto border-4 border-brand-100">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block mb-1">
                Booking Confirmed
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Your Service Appointment is Locked!
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Booking Reference ID: <strong className="text-slate-900">{confirmedBooking.id}</strong>
              </p>
            </div>

            {/* Booking Details Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-left space-y-3 text-xs">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Service:</span>
                <span className="font-bold text-slate-900">{confirmedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Appointment Date:</span>
                <span className="font-bold text-slate-900">{confirmedBooking.date}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Time Window:</span>
                <span className="font-bold text-slate-900">{confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-500">Service Address:</span>
                <span className="font-semibold text-slate-800 text-right max-w-xs truncate">{confirmedBooking.address}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="font-bold text-slate-700">Estimated Cost:</span>
                <span className="text-base font-black text-brand-600">{confirmedBooking.servicePrice}</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400">
              The professional will call you 30 minutes prior to arrival. Pay after service completion via Cash, UPI, or Card.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${provider.whatsapp}?text=Hi%20${encodeURIComponent(provider.name)},%20I%20have%20booked%20${encodeURIComponent(confirmedBooking.serviceName)}%20via%20Workora%20(Ref:%20${confirmedBooking.id})`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-soft transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleBookingSubmit} className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
            
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            {/* 1. Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                1. Select Desired Service / Package <span className="text-rose-500">*</span>
              </label>
              <div className="space-y-2">
                {provider.servicesList?.map((s) => (
                  <div
                    key={s.name}
                    onClick={() => setSelectedService(s)}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                      selectedService.name === s.name
                        ? 'border-brand-600 bg-brand-50/20 shadow-soft-sm'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">{s.name}</span>
                      <span className="text-[11px] text-slate-400">Duration: approx. {s.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-slate-900">{s.price}</span>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        selectedService.name === s.name ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'
                      }`}>
                        {selectedService.name === s.name && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Choose Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  2. Preferred Date <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  3. Available Slot <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedSlot}
                    onChange={(e) => setSelectedSlot(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 3. Doorstep Address Details */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                4. Service Delivery Address <span className="text-rose-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={houseNo}
                  onChange={(e) => setHouseNo(e.target.value)}
                  placeholder="Flat / House / Wing No."
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                />
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="Building Name & Street / Area"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  placeholder="Nearby Landmark (Optional)"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                />
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Your Phone Number"
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
                />
              </div>
            </div>

            {/* 4. Special Instructions */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                5. Special Instructions / Requirements <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                rows="2"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Please bring extra heavy-duty cables, or note that event starts at 5 PM..."
                className="w-full p-3 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-500 focus:bg-white"
              />
            </div>

            {/* Summary & Submit */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Total Payable After Service</span>
                <span className="text-xl font-black text-slate-900">{selectedService.price}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-brand-glow transition-all disabled:opacity-70"
                >
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Appointment'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
