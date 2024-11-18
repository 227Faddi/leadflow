import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Outlet/>
      </div>
    </>
  );
};

export default RootLayout;
