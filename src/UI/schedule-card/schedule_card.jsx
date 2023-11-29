import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setTripData } from '../../action/tripAction'; // Assuming you have an action creator
import IconDot from '../../assets/img/dot-circle-svgrepo-com.svg'
import IconLocation from '../../assets/img/location-pin-svgrepo-com.svg'

import { getSeatFromTrip } from "../../action/tripAction"; // Assuming you have an action creator
import moment from "moment";

const Schedule_card = ({ trip }) => {
  const dispatch = useDispatch();
  const dataTrip = [trip];

  const handleClick = () => {
    // Assuming 'dataTrip' contains your trip information

    // Pass 'dataTrip' to the ProductCart component via Link
    // history.push({
    //   pathname: '/product-cart',
    //   state: { dataTrip } // Pass 'dataTrip' within the 'state' object
    // });
    dispatch(getSeatFromTrip(dataTrip));
  };
  console.log("TRip123321", dataTrip);

  return (
    <>
      <div className="no-scrollbar max-h-[84vh] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6" />
      <div className="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
        <div className="flex items-center justify-between gap-8">
          <span>
            {" "}
            {trip.listtripStopDTO.map((stop) => {
              if (stop.type === "PICKUP") {
                return (
                  <div key={stop.idStation}>
                    {/* <p>{stop.timeComess}</p> */}
                    <p>{moment(stop.timeComess * 1000).format(" hh:mm A")}</p>
                  </div>
                );
              }
              return null;
            })}
          </span>
          <div className="flex w-full items-center">
            <img src={IconDot} className="h-5 w-5" alt="pickup" />
            <span className="flex-1 border-b-2 border-dotted"></span>
            <span className="text-center leading-4">
              14 giờ
              <br />
              <span className="text-[13px]">(Asian/Ho Chi Minh)</span>
            </span>
            <span className="flex-1 border-b-2 border-dotted"></span>
            <img src={IconLocation} className="h-5 w-5" alt="station" />
          </div>
          <span>
            {trip.listtripStopDTO.map((stop) => {
              if (stop.type === "DROPOFF") {
                return (
                  <div key={stop.idStation}>
                    <p>{moment(stop.timeComess * 1000).format(" hh:mm A")}</p>
                  </div>
                );
              }
              return null;
            })}
          </span>
        </div>
        <div className="mt-3 flex justify-between text-[13px] font-normal">
          <div className="flex-1">
            <span className="text-[15px] font-medium">
              {trip.listtripStopDTO.map((stop) => {
                if (stop.type === "PICKUP") {
                  return (
                    <div key={stop.idStation}>
                      <p>{stop.stationDTO.name}</p>
                      <p className="text-gray-500 font-normal text-sm">Đ/c: {stop.stationDTO.address}</p>
                    </div>
                  );
                }
                return null;
              })}
            </span>
            <br />
            <span className="text-gray mt-2"></span>
          </div>
          <div className="flex-1 text-right">
            <span className="text-[15px] font-medium">
              {trip.listtripStopDTO.map((stop) => {
                if (stop.type === "DROPOFF") {
                  return (
                    <div key={stop.idStation}>
                      <p> {stop.stationDTO.name}</p>
                      <p className="text-gray-500 font-normal text-sm">Đ/c: {stop.stationDTO.address}</p>
                    </div>
                  );
                }
                return null;
              })}
            </span>
            <br />
            <span className="text-gray mt-2"></span>
          </div>
        </div>

        <div className="divide my-3 sm:my-4"></div>
        <div className="flex items-center justify-between">
          <div className="text-gray flex items-center gap-2 text-sm">
            <span className="text-orange">{trip.price}</span>
            <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
            <span>{trip.busDTO?.type}</span>
            <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
            <span className="text-orange">{trip.availableSeat}</span>

            <span className="cursor-pointer text-blue-400 underline">
              Chọn ghế
            </span>
          </div>
          {/* <Link to={{
  pathname: '/product-cart',
  state: { trip }  // Pass dataTrip through the state object
}} >
                  <button
                    type="button"
                    className="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block"
                    fdprocessedid="ujvv0l"
                  >
                    <span>Chọn chuyến</span>
                  </button>
                </Link> */}
          {/* <Link to="/product-cart" onClick={handleClick}>
            <button
              type="button"
              className="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block"
            >
              Chọn chuyến
            </button>
          </Link> */}
          <Link
            to={{
              pathname: "/product-cart",
              state: { trip }, // Pass your state object here
            }}
          >
            <button type="button" onClick={handleClick} className="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block border border-orange-200 w-28 h-8 rounded-xl bg-orange-100">
              <span className="font-medium text-orange-500">Chọn chuyến</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Schedule_card;
