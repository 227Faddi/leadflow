import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Outlet />
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            marginTop: "10px",
          }}
          toastOptions={{
            style: {
              background: "#111827",
              color: "#F9FAFB",
              borderRadius: "8px",
              padding: "12px 16px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
            },
            duration: 1500,
          }}
        />
      </div>
    </>
  );
};

export default RootLayout;
