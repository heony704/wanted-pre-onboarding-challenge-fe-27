import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Button } from "./Button";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function Modal({ isOpen, onClose, title }: Props) {
  useEffect(() => {
    const handleKeydownEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeydownEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeydownEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 px-4"
      onClick={handleBackgroundClick}
    >
      <div className="relative flex w-full max-w-sm flex-col items-center rounded-[10px] bg-white p-5 shadow">
        <ExclamationCircleIcon className="h-11 w-11 text-gray-500" />
        <h3 className="mt-3 text-center text-lg font-normal text-gray-700">
          {title}
        </h3>
        <Button className="mt-5 w-28" onClick={onClose}>
          확인
        </Button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}

export default Modal;
