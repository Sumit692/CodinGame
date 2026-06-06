import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = (
    message,
    type = "success"
  ) => {
    setNotification({
      message,
      type,
    });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification }}
    >
      {children}

      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-2xl shadow-xl text-white font-semibold ${
            notification.type === "success"
              ? "bg-green-500"
              : notification.type === "warning"
              ? "bg-yellow-500 text-black"
              : "bg-red-500"
          }`}
        >
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}