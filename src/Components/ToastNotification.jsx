import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ToastWithProgressBar({ message, autoClose = 3000 }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // Update progress every 100ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, autoClose);
    
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 0));
    }, autoClose / 100); // Adjust the interval to match the autoClose duration

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [autoClose]);

  const handleClose = () => setVisible(false);

  if (!visible) return null;

  return (
    <motion.section
      className="absolute top-0 z-50 w-full py-[10px] dark:bg-dark"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
    >
      <div className="mx-auto px-4 sm:container">
        <div className="flex justify-end">
          <div className="relative flex w-full max-w-[380px] items-center overflow-hidden rounded-lg bg-gray-200 px-4 py-[10px] shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 block w-full h-1 bg-gray-300">
              <div
                className="h-full bg-gradient-to-r from-red-400 via-pink-600 to-blue-400"
                style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
              />
            </div>

            {/* Toast content */}
            <span className="mr-4 flex h-8 w-8 items-center justify-center bg-white rounded-full border-[2px] border-blue-700">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.15 3.34999C14.925 3.12499 14.575 3.12499 14.35 3.34999L5.85 11.6L1.65 7.47499C1.425 7.24999 1.075 7.27499 0.850003 7.47499C0.625003 7.69999 0.650003 8.04999 0.850003 8.27499L5.275 12.575C5.425 12.725 5.625 12.8 5.85 12.8C6.075 12.8 6.25 12.725 6.425 12.575L15.15 4.09999C15.375 3.92499 15.375 3.57499 15.15 3.34999Z"
                  fill="#3758F9"
                />
              </svg>
            </span>
            <p className="text-base font-medium text-primary sm:text-lg">
              {message || "You are successfully logged in..."}
            </p>
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-dark-5 hover:text-primary dark:text-dark-6"
              onClick={handleClose}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <g clipPath="url(#clip0_1088_26057)">
                  <path d="M8.79999 7.99999L14.9 1.89999C15.125 1.67499 15.125 1.32499 14.9 1.09999C14.675 0.874994 14.325 0.874994 14.1 1.09999L7.99999 7.19999L1.89999 1.09999C1.67499 0.874994 1.32499 0.874994 1.09999 1.09999C0.874994 1.32499 0.874994 1.67499 1.09999 1.89999L7.19999 7.99999L1.09999 14.1C0.874994 14.325 0.874994 14.675 1.09999 14.9C1.19999 15 1.34999 15.075 1.49999 15.075C1.64999 15.075 1.79999 15.025 1.89999 14.9L7.99999 8.79999L14.1 14.9C14.2 15 14.35 15.075 14.5 15.075C14.65 15.075 14.8 15.025 14.9 14.9C15.125 14.675 15.125 14.325 14.9 14.1L8.79999 7.99999Z" />
                </g>
                <defs>
                  <clipPath id="clip0_1088_26057">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
