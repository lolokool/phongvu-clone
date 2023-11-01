interface Props {
  img: {
    img1: string;
    img2: string;
  };
}
const BannerMaketing = ({ img }: Props) => {
  return (
    <div className="w-1200 m-auto mb-[20px]">
      <div className="flex w-full h-auto space-x-4">
        <img
          className="object-cover w-[592px] rounded-md hover:scale-105"
          src={img.img1}
        />
        <img
          className="object-cover w-[592px] rounded-md hover:scale-105"
          src={img.img2}
        />
      </div>
    </div>
  );
};

export default BannerMaketing;
