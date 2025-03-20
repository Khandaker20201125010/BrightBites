import moment from "moment";
import { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "./BookingModal/BookingModal";

const AvailableServices = ({ selectDate }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = moment(selectDate).format("MMMM Do, YYYY");
  const {
    data: appointments = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointments", formattedDate],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointments?date=${formattedDate}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Loader */}
        <div className="circ">
          <div className="heartbeatloader">
            <svg
              className="svgdraw"
              width="100%"
              height="100%"
              viewBox="0 0 150 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="path"
                d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
                fill="transparent"
                strokeWidth="4"
                stroke="black"
              ></path>
            </svg>
            <div className="innercircle"></div>
            <div className="outercircle"></div>
          </div>
        </div>

        {/* Text below loader */}
        <div className="text-center mt-16">
          <h1 className="text-red-500 text-2xl font-semibold">
            Be patient <span className="dot-animation">.</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-40">
      <div className="text-center">
        <h1 className="text-cyan-500 font-bold">
          Available Services on {formattedDate}{" "}
        </h1>
        <h2 className="text-gray-400 mt-2">Please Select a Service </h2>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {appointments.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectDate={selectDate}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default AvailableServices;
