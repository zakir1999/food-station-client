import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyFoodRow = ({ food }) => {

  const {
    _id,
    additional_notes,
    email,
    expired_datetime,
    food_name,
    food_quantity,
    food_status,
    name,
    pickup_location,
  } = food;
  console.log(food);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
         fetch(`https://food-station-server.vercel.app/food/${_id}`,{
            method: 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount > 0) {
                Swal.fire(
                    'Deleted!',
                    'Your item has been deleted.',
                    'success'
                  )
                  .then((result) =>{
                    if(result.isConfirmed){
                      window.location.reload();
                    }
                  })
                  
                  // const remain = myOrder.filter(cart => cart._id !== _id);
                  // console.log(remain);
                  // setMyOrder(remain);
            }
         })
        }
      })
}
  return (
    <tr>
      <td>{food_name}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{food_status}</td>
      <td>{food_quantity}</td>
      <td>{pickup_location}</td>
      <td>{expired_datetime}</td>
      <td>{additional_notes}</td>
      <td>
                <Link to={`/updateFoodModal/${_id}`}><button className="btn">Update</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
            </td>
    </tr>
  );
};

export default MyFoodRow;
