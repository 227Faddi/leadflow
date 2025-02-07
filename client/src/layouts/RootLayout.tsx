import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../contexts/DarkModeContext";

const RootLayout = () => {
  return (
    <DarkModeProvider>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] [background-size:16px_16px]"></div>
        <div className="w-full flex justify-center">
          <div className="flex-grow w-full max-w-[1920px]">
            <Outlet />
          </div>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{
            marginTop: "10px",
          }}
          toastOptions={{
            style: {
              background: "#111827",
              color: "#FFF",
              border: "2px solid #334155",
              borderRadius: "8px",
              padding: "12px 16px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              fontSize: "14px",
            },
            duration: 1500,
          }}
        />
      </div>
    </DarkModeProvider>
  );
};

export default RootLayout;
