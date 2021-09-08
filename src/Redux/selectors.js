const getPackages = (state) => state.packs.packages;
const getQuantity = (state) => state.packs.packages.length;
const getTotal = (state) => {
  return state.packs.packages.reduce((acc, el) => {
    if (!el.packSize) {
      return acc;
    }

    acc = acc + el.packSize;
    return acc;
  }, 0);
};

export const selectors = {
  getPackages,
  getQuantity,
  getTotal,
};
