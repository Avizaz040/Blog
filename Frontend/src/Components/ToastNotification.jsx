import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
export default function ToastWithProgressBar({ message = "You are successfully logged in!", autoClose = 3000 }) {

  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval, timeout;

    const startProgress = () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) clearInterval(interval);
          return next;
        });
      }, autoClose / 100);
    };

    startProgress();
    timeout = setTimeout(() => setVisible(false), autoClose);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [autoClose]);

  const handleClose = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-5 right-5 z-50 w-[320px] sm:w-[380px]"
        >
          <div className="relative rounded-lg bg-white dark:bg-dark-2 shadow-lg p-4 flex items-start gap-3 border border-gray-200 dark:border-dark-4">
            {/* Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-dark-4">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path
                  d="M15.15 3.34999C14.925 3.12499 14.575 3.12499 14.35 3.34999L5.85 11.6L1.65 7.47499C1.425 7.24999 1.075 7.27499 0.850003 7.47499C0.625003 7.69999 0.650003 8.04999 0.850003 8.27499L5.275 12.575C5.425 12.725 5.625 12.8 5.85 12.8C6.075 12.8 6.25 12.725 6.425 12.575L15.15 4.09999C15.375 3.92499 15.375 3.57499 15.15 3.34999Z"
                  fill="#3758F9"
                />
              </svg>
            </div>

            {/* Message */}
            <div className="flex-1 text-sm font-medium text-gray-800 dark:text-white">
              {message}
            </div>

            {/* Close Button */}
            <button onClick={handleClose} className="text-gray-400 hover:text-blue-500">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 6.586L13.657 0.929 15.071 2.343 9.414 8l5.657 5.657-1.414 1.414L8 9.414l-5.657 5.657-1.414-1.414L6.586 8 .929 2.343 2.343.929 8 6.586z" />
              </svg>
            </button>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gray-200 dark:bg-dark-4">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ToastWithProgressBar.propTypes = {
  message: PropTypes.string.isRequired,
  autoClose: PropTypes.number.isRequired,
};
