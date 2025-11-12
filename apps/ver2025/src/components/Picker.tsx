import React from "react";

interface PickerProps {
  children: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  className?: string;
}

export default function Picker({
  children,
  content,
  isOpen = false,
  onClose,
  className = "",
}: PickerProps) {
  return (
    <div className={`relative ${className}`}>
      {children}

      {isOpen && (
        <>
          <div
            className="fixed w-full h-full inset-0 left-0 top-0 right-0 bottom-0 z-[11]"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}
            onClick={onClose}
          />
          <div className="absolute z-[12]">{content}</div>
        </>
      )}
    </div>
  );
}




