import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function NotificationToast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-800 flex items-start gap-3 animate-slideUp">
      <div className="w-8 h-8 rounded-xl bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <div className="flex-1 pr-2">
        <h5 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-0.5">Notification</h5>
        <p className="text-xs text-slate-200 leading-snug">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
