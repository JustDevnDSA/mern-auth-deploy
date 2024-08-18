import toast from "react-hot-toast";

const handleSuccess = (message) => {
  toast.success(message);
};

const handleError = (message) => {
  toast.error(message);
};

export { handleSuccess, handleError };
