import { useContext, useEffect, useState } from "react";
import { useForm  } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import toast from "react-hot-toast";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    const food  = useLoaderData();
    console.log(food);
  // const { id } = useParams();
  // const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  // const [success, setSuccess] = useState("");
//   useEffect(() => {
//     fetch("https://food-station-server.vercel.app/food")
//       .then((res) => res.json())
//       .then((data) => {
//         const one = data.find((f) => f._id === id);
//         setFood(one);
//       });
//   }, [id]);
// console.log(data)
  

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const form = e.target;
      const FoodId= form.foodId.value
      const foodName = form.foodName.value
      const foodImage = form.foodImage.value
      const foodQuantity = form.foodQuantity.value
      const pickupLocation = form.pickupLocation.value
      const expireDate = form.expireDate.value
      const additionalNotes = form.additionalNotes.value
      const foodStatus = form.foodStatus.value
      const foodDonatorName = form.foodDonatorName.value
      const foodDonatorEmail = form.foodDonatorEmail.value
      const foodDonatorImage = form.foodDonatorImage.value
      const requestDate = form.requestDate.value

      const data = {FoodId,foodName,requestDate, foodImage, foodQuantity, pickupLocation, expireDate, additionalNotes, foodStatus, foodDonatorName, foodDonatorEmail, foodDonatorImage}
      
      const {data: savedInfo}  = await axios.post('https://food-station-server.vercel.app/request', data)
      const {data: deletdInfo}  = await axios.delete(`https://food-station-server.vercel.app/food/${food._id}`)
      navigate('/foodRequest')

      toast.success('Food add to the request successfully.')
     } catch (error) {
      toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  };

  


  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };

  if(!food) return null;

  return (
    <div>
      <Helmet>
        <title>Foodle |Food Details</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={food ?.food_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{food?.food_name}</h1>
            <p className="py-6">Quantity: {food?.food_quantity}</p>
            <p className="py-6">Expired: {food?.expired_datetime}</p>
            <p className="py-6">Donar: {food.name}</p>
            <p className="py-6">Locations: {food?.pickup_location}</p>
            <button
              className="btn btn-outline btn-warning"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Request
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form
                onSubmit={onSubmit}
                  className="card-body"
                  method="dialog"
                >
                  <button
                    onClick={closeModal}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  >
                    ✕
                  </button>
                  {/* register your input into the hook by invoking the "register" function */}
                  <div>
                    <label className="label">
                      <span className="label-text text-lg ">Food Id</span>
                    </label>
                    <input
                      value={food?._id}
                      name="foodId"
                      disabled
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                    />
                    
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg ">Food Name</span>
                    </label>
                    <input
                      value={food?.food_name}
                      name="foodName"
                      disabled
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                    />
                    
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Food Image
                      </span>
                    </label>
                    <input
                      disabled
                      value={food?.food_image}
                      className="input input-bordered w-full  outline text-yellow-600 font-bold"
                      name="foodImage"
                    />
                  </div>

                  {/* include validation with required or other standard HTML validation rules */}

                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Food Quantity
                      </span>
                    </label>
                    <input
                      value={food?.food_quantity}
                      disabled
                      className="input input-bordered w-full outline  text-yellow-600 font-bold"
                      name="foodQuantity"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Request Date
                      </span>
                    </label>
                    <input
                      value={new Date()}
                      disabled
                      className="input input-bordered w-full outline  text-yellow-600 font-bold"
                      name="requestDate"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Pickup Location
                      </span>
                    </label>
                    <input
                      disabled
                      value={food?.pickup_location}
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="pickupLocation"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Expired Date
                      </span>
                    </label>
                    <input
                      disabled
                      value={food?.expired_datetime}
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="expireDate"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Additional Notes
                      </span>
                    </label>
                    <input
                      value={food?.additional_notes}
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="additionalNotes"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Food Status
                      </span>
                    </label>
                    <input
                      disabled
                      value={
                        "Requested"
                      }
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="foodStatus"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Donator Name
                      </span>
                    </label>
                    <input
                      value={user?.displayName}
                      disabled
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="foodDonatorName"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Donator Email
                      </span>
                    </label>
                    <input
                      disabled
                      value={user?.email}
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                      name="foodDonatorEmail"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text text-lg text-white">
                        Donator Image
                      </span>
                    </label>
                    <input
                      disabled
                      value={user?.photoURL}
                      className="input input-bordered w-full outline text-yellow-600 font-bold"
                     name="foodDonatorImage"
                    />
                  </div>


                  <div className="text-center">
                    <button type="submit" disabled={loading}>
                      Request Now
                    </button>

                    {loading && <div className="mt-5">
                      <p>Loading....</p>
                    </div>}
                  </div>
                </form>

                {/* */}
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
