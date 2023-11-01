interface Props {
  featured: {
    title: string;
    content: {
      image: string;
      description: string;
    }[];
  };
}
const Catagories = ({ featured }: Props) => {
  return (
    <div className="bg-[#ffffff] w-1200 m-auto mt-[24px] rounded mb-[20px]">
      <div className="h-[56px] p-[16px] text-[20px] font-bold">
        <h2>{featured.title}</h2>
      </div>
      <div className="h-[150px] w-1200 m-auto">
        <div className="flex justify-center pt-8 px-[16px] pb-[24px] ">
          {featured.content.map((item) => (
            <div className="pt-2 flex-1 flex flex-col items-center">
              <img className="w-[56px] h-[56px]" src={item.image} />
              <div className="text-center text-[15px]">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catagories;
