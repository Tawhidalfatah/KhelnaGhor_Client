const ToyRow = ({ toy, index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{toy?.seller}</td>
        <td>{toy?.toyname}</td>
        <td>{toy?.subcategory}</td>
        <td>${toy?.price}</td>
        <td>{toy?.quantity}</td>
        <td>
          <button className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black">
            View Details
          </button>
        </td>
      </tr>
    </>
  );
};

export default ToyRow;
