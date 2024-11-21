import { useToast, POSITION } from "vue-toastification";

const toast = useToast();

// Toasts types
// toast("Default toast");
// toast.info("Info toast");
// toast.success("Success toast");
// toast.error("Error toast");
// toast.warning("Warning toast");

// Dismiss toasts
// toast.clear();

export const showToast = (messageType, text, position) => {
  toast[messageType]?.(text, {
    position: POSITION[position],
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: "fas fa-rocket",
    rtl: false,
  });
};
