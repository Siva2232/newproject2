import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const StartProjectModal = ({ open, onClose, services = [], products = [] }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", product: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      setForm({ name: "", email: "", phone: "", service: "", product: "", message: "" });
      setSending(false);
      setSent(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // simulate network
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => { setSent(false); onClose(); }, 900);
    }, 900);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[900] flex items-center justify-center bg-black/60 pointer-events-auto"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl bg-[#071428] border border-white/5 rounded-2xl p-8 md:p-12 mx-6 relative pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
            aria-modal="true"
            role="dialog"
          >
            <button type="button" onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white">
              <X size={18} />
            </button>

            <h3 className=" text-[#C5A059] text-2xl md:text-3xl font-serif mb-2">Enquire Now</h3>
            <p className="text-white/60 mb-6">Tell us about your project — service & product selection are optional.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full" />
              <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" type="email" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone (optional)" className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full" />

              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full">
                <option value="">Select a service (optional)</option>
                {services.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full">
                <option value="">Select a product (optional)</option>
                {products.map((p) => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
              <input placeholder="Estimated budget (optional)" value={form.budget || ""} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="p-3 rounded-lg bg-black/40 border border-white/5 text-white w-full" />
            </div>

            <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Project brief & timeline" rows={5} className="w-full p-4 rounded-lg bg-black/40 border border-white/5 text-white mb-6" />

            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-white/60">{sent ? "Request sent — we will contact you shortly." : (sending ? "Sending..." : "We'll get back within 24 hours.")}</div>
              <div className="flex gap-3">
                <button type="button" onClick={onClose} className="px-4 py-2 rounded-md border border-white/10 text-white/70 hover:bg-white/5">Cancel</button>
                <button type="submit" disabled={sending} className="px-6 py-2 rounded-full bg-[#C5A059] text-black font-bold uppercase tracking-widest">{sending ? "Sending..." : "Send Request"}</button>
              </div>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartProjectModal;
