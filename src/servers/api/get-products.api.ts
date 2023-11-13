import { chonqua } from "../../mockdata/chon-qua-dung-gu";
import { pickNessInfo } from "../../utils/get-product-info";

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(1);
    }, 1000);
  });
};

export const getChonquaAPIInfo = async () => {
  await delay();

  return chonqua.products.map((item) => pickNessInfo(item));
};
