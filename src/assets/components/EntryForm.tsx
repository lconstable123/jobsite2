import { forwardRef, useEffect, useState } from "react";
import { usePageContext, useSearchTextContext } from "./lib/hooks";

type EntryFormProps = {
  prompting: boolean;
};

const EntryForm = forwardRef<HTMLInputElement, EntryFormProps>(
  ({ prompting }, ref) => {
    const { searchText, handleChangeSearchText } = useSearchTextContext();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      handleChangeSearchText(inputValue);
      console.log(e.target.value);
    };

    const { page } = usePageContext();

    const [isUp, setIsUp] = useState(false);

    useEffect(() => {
      let timer: ReturnType<typeof setTimeout> | null = null;

      if (page === 1) {
        timer = setTimeout(() => {
          setIsUp(true);
        }, 500);
      } else {
        timer = setTimeout(() => {
          setIsUp(false);
        }, 100);
      }

      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [page]);

    const bannerUp = isUp ? "top-[9%]" : "-top-15";

    return (
      <>
        <form
          className={` z-400 transition-all duration-400 ease-out absolute  ${bannerUp} `}
        >
          {prompting && (
            <div
              className={`transition-all absolute w-80 h-10 radiate-line rounded-sm pointer-events-none `}
            />
          )}
          <button type="submit"></button>
          <input
            ref={ref}
            type="text"
            value={searchText}
            onChange={handleChange}
            spellCheck="false"
            name="fakePassword"
            autoComplete="new-password"
            autoCorrect="off"
            className={`rounded-sm 
            p-2 w-80
            
            bg-gray-100
            caret-red-500
            focus:bg-white 
            animation-all duration-300 
            outline-1 outline-gray-300
            starting:scale-70`}
            required
            placeholder="Search for a job"
          />
        </form>
      </>
    );
  }
);

export default EntryForm;
