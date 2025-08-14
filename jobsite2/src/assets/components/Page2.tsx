export default function Page2() {
  return (
    <>
      <div className=" relative start-scaleanim animation-all transition-transform duration-600 flex lg:w-250  h-150 rounded-lg overflow-hidden shadow-2xl  bg-gray-100  z-10 ">
        <div className=" relative bg-[url('curve@1x-1.0s-77px-77px.svg')] bg-[length:10%_10%]   w-full h-full rounded-md ring-2 ring-amber-200 flex flex-col overflow-hidden ">
          <div className="relative top-100   z-11 flex items-center justify-center "></div>

          <div
            id="detail"
            className="origin-top transition-all duration-250 pt-10 flex items-start justify-center  "
          ></div>

          <div
            className={`absolute transition-all duration-300 w-full bg-[url('/Wave-fainteryellow.svg')] z-11 `}
          ></div>
        </div>
      </div>
    </>
  );
}
