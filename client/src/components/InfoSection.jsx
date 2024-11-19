import { FaUserPlus } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 px-4 md:px-10 lg:px-56 mb-52">
      <div className="bg-gray-100 p-10 md:p-20 rounded-2xl flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-12">
          <div className="space-y-4">
            <FaUserPlus className="text-blue-700" size={35} />
            <h3 className="font-bold">Lorem, ipsum dolor.</h3>
            <p className="md:w-2/3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur officiis mollitia, repellat facere laborum culpa.
            </p>
          </div>
          <div className="space-y-4">
            <FaUsers className="text-blue-700" size={35} />
            <h3 className="font-bold">Lorem, ipsum dolor.</h3>
            <p className="md:w-2/3 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Aspernatur officiis mollitia, repellat facere laborum culpa.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-full h-full"
            src="https://placehold.co/600x400"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
