import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import FoodRequestRow from "./FoodRequestRow";

const MyFoodRequest = () => {
  // const data = useLoaderData();
  // console.log(data);
  const { user } = useContext(AuthContext);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    fetch(`https://food-station-server.vercel.app/request/${user.email}`)
      .then((res) => res.json())
      .then((data) => setRequest(data));
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Foodle |My Food Request</title>
      </Helmet>

      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Food Name</th>
                <th>Email</th>
                <th>Donar Name</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Request Date</th>
                <th>Additional Notes</th>
              </tr>
            </thead>
            <tbody>
              {request.map((food) => (
                <FoodRequestRow key={food._id} food={food}></FoodRequestRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequest;
