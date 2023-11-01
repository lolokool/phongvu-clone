export const Renderer = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  return (
    <div>
      <div className="text-1 mb-[16px] text-white">
        <p className="text-center">
          Kết thúc sau <span className="text-[20.8px]">{days} </span>ngày
        </p>
      </div>
      <div className="flex w-[200px] h-[45px] m-auto justify-center space-x-5">
        <div className="flex-1 font-bold bg-[#2d2c2c] text-white  ml-[13px] rounded">
          <p className="justify-center h-full flex items-center">{hours}</p>
        </div>
        <div className="flex-1 font-bold bg-[#2d2c2c] text-white  ml-[13px] rounded">
          <p className="justify-center h-full flex items-center"> {minutes}</p>
        </div>
        <div className="flex-1 font-bold bg-[#2d2c2c] text-white  ml-[13px] rounded">
          <p className="justify-center h-full flex items-center"> {seconds}</p>
        </div>
      </div>
    </div>
  );
};
