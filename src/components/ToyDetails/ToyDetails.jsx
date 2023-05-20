import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const id = useParams();
  console.log(id.id);
  return <div>Details page: {id.id}</div>;
};

export default ToyDetails;
