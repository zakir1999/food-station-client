
// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoodModal = () => {
  const {id} = useParams();
  console.log(id)
//   const [food, setFood] = useState(null);
//   const [load, setLoad] = useState(true);
  const newFood = useLoaderData();
  console.log(newFood);

//   useEffect(() => {
//       fetch('https://food-station-server.vercel.app/food')
//           .then(res => res.json())
//           .then(data => {
//               const one = data.find(f => f._id === id);
//               setFood(one);
//               setLoad(false);
//           })
//           .catch(error => {
//               // Handle any network or fetch errors here
//               console.error("Error fetching food data:", error);
//           });
//   }, [id]);
  //console.log(food);
  const {_id,food_name, pickup_location, food_quantity, additional_notes, } = newFood;

  const handleUpdate = e => {
      e.preventDefault();
      const form = e.target;
      const food_name =form.food_name.value;
      const pickup_location = form.pickup_location.value;
      const food_quantity = form.food_quantity.value;
    //   const origin = form.origin.value;
      const additional_notes = form.additional_notes.value;
    //   const price = form.price.value;

      const updateFood = {food_name, pickup_location, food_quantity,  additional_notes,};

      console.log(updateFood);

      fetch(`https://food-station-server.vercel.app/food/${_id}`,{
          method: 'PUT',
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify(updateFood)
      })
      .then(res => res.json())
      .then(data => {
       
        
          console.log(data);
         
          if(data.modifiedCount > 0){
              Swal.fire({
                  icon: 'success',
                  title: 'Your product has been Updated',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          else{
            console.error('updateFailed')
          }
          form.reset();

          
      })
    
    }

  return (
    <div>
       {
                newFood? (
                    <form onSubmit={handleUpdate} className="card-body w-1/2 mx-auto bg-white shadow-2xl rounded-xl">
                <h1 className='text-center text-3xl font-bold'>Update a Food Item</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input name='food_name' type="text" placeholder="Food name" className="input input-bordered" defaultValue={food_name} required />
                </div>
                <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Pick Up Location</span>
                        </label>
                        <input name='pickup_location' type="text" placeholder="Food category" defaultValue={pickup_location} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Quantity</span>
                        </label>
                        <input name='food_quantity' type="number" placeholder="Quantity" defaultValue={food_quantity} className="input input-bordered" required />
                    </div>
                </div>

                {/* <div className="lg:flex gap-5 ">
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Food Origin(Country)</span>
                        </label>
                        <input name='origin' type="text" placeholder="Food Origin" defaultValue={origin} className="input input-bordered" required />
                    </div>
                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="text" placeholder="price" defaultValue={price} className="input input-bordered" required />
                    </div>
                </div> */}

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Note</span>
                    </label>
                    <input name='additional_notes' type="text" placeholder="Food Description" defaultValue={additional_notes} className="input input-bordered" required />
                </div>

                <input className="btn btn-primary my-4 capitalize" type="submit" value="Update Info" />
                
            </form>
                ) :
                (
                    <p>loading....</p>
                )
            }
    </div>
  );
};

export default UpdateFoodModal;