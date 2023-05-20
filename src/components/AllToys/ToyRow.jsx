const ToyRow = ({ toy, index }) => {
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-42">
                <img src={toy?.picture} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toy?.toyname}</div>
            </div>
          </div>
        </td>
        <td>{toy?.seller}</td>
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
