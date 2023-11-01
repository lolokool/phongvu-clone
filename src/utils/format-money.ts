export const formatCurrency = (amount: string | number) => {
  // Sử dụng Number.toLocaleString() để định dạng số tiền với dấu phẩy ngăn cách phần ngàn
  return amount.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const formatPercentage = (percent: any) => {
  // Thêm dấu phần trăm (%) vào số
  return `${percent}%`;
};
