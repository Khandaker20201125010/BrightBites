import React from "react";
import useAuth from "../../../Hooks/useAuth";
import moment from "moment";
import Swal from "sweetalert2";

const BookingModal = ({ treatment, setTreatment, selectDate, refetch }) => {
  const { name: treatmentName, slots, price } = treatment;
  const formattedDate = moment(selectDate).format("MMMM Do, YYYY");
  const { user } = useAuth();

  const handleBooking = async (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: formattedDate,
      treatment: treatmentName,
      patient: name,
      slot,
      email,
      phone,
      price,
    };

    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(booking),
      });

      const data = await res.json();
      console.log("Response from server:", data);

      if (data.acknowledged) {
        setTreatment(null);
        refetch(); // Refresh appointment list to update slots
        
        // SweetAlert2 success message
        Swal.fire({
          title: "Success!",
          text: "Your booking has been confirmed.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Oops!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Booking request failed:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10">
            <input type="text" disabled value={formattedDate} className="input w-full input-bordered" />
            <select name="slot" className="select select-bordered w-full">
              {slots.length > 0 ? slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>) : <option disabled>No slots available</option>}
            </select>
            <input name="name" type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
            <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
            <br />
            <input className="btn btn-accent w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
