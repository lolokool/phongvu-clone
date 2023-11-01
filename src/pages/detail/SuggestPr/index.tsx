import { formatCurrency } from "../../../utils/format-money";

const Suggest = () => {
  return (
    <div className="bg-white pr-4 max-w-75.6 mb-6">
      <h3 className="px-4 font-bold text-20">Thường được mua cùng</h3>
      <div className="mb-4 rounded pt-6 pb-4 pl-6">
        <div className="flex justify-between">
          <div className=" flex">
            <div className="w-[125px] mr-12 relative">
              <img
                src="https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA=w200-rw"
                alt=""
              />
              <p className="text-12">Máy tính xách tay/ Laptop HP 15s-</p>
              <p className="text-[rgb(20,53,195)] text-20 font-bold">
                {formatCurrency(Number(8990000))}
              </p>
              <p className="text-12 text-[rgb(130,134,158)] line-through">
                {formatCurrency(Number(12690000))}
              </p>
            </div>
            <div className="w-[125px] mr-12 relative">
              <img
                src="https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA=w200-rw"
                alt=""
              />
              <p className="text-12">Máy tính xách tay/ Laptop HP 15s-</p>
              <p className="text-[rgb(20,53,195)] text-20 font-bold">
                {formatCurrency(Number(8990000))}
              </p>
              <p className="text-12 text-[rgb(130,134,158)] line-through">
                {formatCurrency(Number(12690000))}
              </p>
            </div>
            <div className="w-[125px] mr-12 relative">
              <img
                src="https://lh3.googleusercontent.com/PjhHXXreUCNNLITAJ3gfR2heYwi7JRjbjIwC4Rh-zDi8cUqQT0CoVQVQ0WzoOuKG487h__xpEZQ_zQDXfWvRWWrKDYFSmc0wZA=w200-rw"
                alt=""
              />
              <p className="text-12">Máy tính xách tay/ Laptop HP 15s-</p>
              <p className="text-[rgb(20,53,195)] text-20 font-bold">
                {formatCurrency(Number(8990000))}
              </p>
              <p className="text-12 text-[rgb(130,134,158)] line-through">
                {formatCurrency(Number(12690000))}
              </p>
            </div>
          </div>
          <div className="p-6 border-l border-[#F6F6F6]">
            <p className="text-[rgb(20,53,195)] text-20 font-bold">
              {formatCurrency(Number(9189000))}
            </p>
            <p className="text-12 text-[rgb(130,134,158)] line-through">
              {formatCurrency(Number(12889000))}
            </p>
            <div className="w-full">
              <button className="border-blue text-blue rounded border w-full mt-4 h-10">
                Thêm vào giỏ
              </button>
            </div>
            <div className="w-full">
              <button className="border border-[#F6F6F6] rounded w-full mt-4 h-10">
                {" "}
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
