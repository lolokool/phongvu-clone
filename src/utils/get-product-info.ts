// lay thong tin can thiet cua san pham
export const pickNessInfo = (item: any) => {
  return {
    skuId: item.productInfo.skuId,
    smallImage: item.images,
    image: item.productInfo.imageUrl,
    name: item.productInfo.name,
    brand: item.productInfo.brand.name,
    sellPrice: item.prices[0].sellPrice, // Assuming there's an array of prices
    latestPrice: item.prices[0].latestPrice,
    discountPercent: item.prices[0].discountPercent,
    discountAmount: item.prices[0].discountAmount,
    gifts: item.promotions[0].benefit.gifts[0]?.imageUrl,
    voucher: item.promotions[0].benefit.voucher,
    canonical: item.productInfo.canonical,
  };
};
