'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/30 backdrop-blur-md animate-fade-in">
      {/* Close modal when clicking outside */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className="relative z-[10000] glass-card w-full max-w-md shadow-card-hover overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-surface-border bg-surface-card/50">
          <h2 className="text-xl font-bold text-brand-primary">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-text-secondary hover:text-brand-primary transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default Modal;