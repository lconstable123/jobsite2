import toast from "react-hot-toast";
import { skills } from "./lib/constants";
import { contributors } from "./lib/constants";
import SkillComponents from "./SkillComponents";
import { usePageContext } from "./lib/hooks";

export default function Page0() {
  const { scrollNext } = usePageContext();
  const handleClick = () => {
    scrollNext();
  };

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
        className=" relative start-scaleanim animation-all transition-transform duration-600 flex lg:w-200  h-60 rounded-2xl overflow-hidden shadow-2xl  bg-rose-200  z-10 "
      >
        <div className="w-full m-1 p-1 bg-rose-100 rounded-xl flex flex-col justify-center items-center ">
          <div className="  transition-all duration-300 flex-1  w-full bg-[url('/Wave-fainteryellow.svg')] z-11 border-2 border-amber-200 rounded-xl flex flex-col justify-center items-center">
            <div className="absolute  slowbounce top-12  rounded-2xl  bg-amber-200 border-2 border-rose-200">
              <div className=" flex flex-col items-center justify-center py-1 px-1">
                <div className="  bg-white uppercase rounded-2xl font-normal  px-4 py-3 text-5xl flex flex-col  items-center border-4 border-double border-rose-200">
                  <h1>find react dev jobs</h1>
                  {/* <p className="text-[15pt] mt-2 font-light">with this app</p> */}
                </div>
              </div>
            </div>

            <div className=" absolute bottom-5 flex flex-wrap justify-center items-center gap-4 mt-4 mx-5  bg-white p-2 rounded-3xl border-1  border-rose-200">
              {skills.map((skill: string, index) => (
                <SkillComponents key={index} index={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
