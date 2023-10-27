const DisplayParams = ({params}) => {
  const [slug1, slug2] = params.slug;
  return (
    <div>
      <p>example: url : "/dashboard/product/item1/item2</p>
      <p>item1: {slug1}</p>
      <p>item2 : {slug2}</p>
    </div>
  );
};

export default DisplayParams;
