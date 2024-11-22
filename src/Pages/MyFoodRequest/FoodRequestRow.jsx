const FoodRequestRow = ({ food }) => {
  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
    foodStatus,
    foodDonatorName,
    foodDonatorEmail,
    foodDonatorImage,
    requestDate
  } = food;
  console.log(food);
  return (
    <tr>
      <td>{foodName}</td>
      <td>{foodDonatorEmail}</td>
      <td>{foodDonatorName}</td>
      <td>{foodStatus}</td>
      <td>{foodQuantity}</td>
      <td>{pickupLocation}</td>
      <td>{expireDate}</td>
      <td>{requestDate}</td>
      <td>{additionalNotes}</td>
    </tr>
  );
};

export default FoodRequestRow;
