const flattenPath = (obj, parentPath = "") => {
  const result = {};

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const newPath = parentPath + "/" + key;
      result[key] = flattenPath(obj[key], newPath);
    } else {
      result[key] = parentPath + obj[key];
    }
  }

  return result;
};

const Path = {
  rootDashboard: "/dashboard",
  dashboard: {
    about: "/about",
    product: "/product"
  },
};

const PATH = flattenPath(Path);
export default PATH;
