import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal box */}
      <div className=" relative z-10 w-full max-w-md rounded-xl bg-white/02 backdrop-blur-md border border-white/20 p-6 shadow-lg">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            {title || ""}
          </h2>
          <button
            onClick={onClose}
            className="text-white "
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
