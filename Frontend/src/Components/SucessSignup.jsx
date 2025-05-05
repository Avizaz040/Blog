// SucessSignup.jsx
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

function SucessSignup({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg"
      >
        <CheckCircle className="w-6 h-6 text-white" />
        <div className="text-sm font-medium">Account created successfully!</div>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-300 font-bold text-lg">&times;</button>
      </motion.div>
    </AnimatePresence>
  );
}

export default SucessSignup;
