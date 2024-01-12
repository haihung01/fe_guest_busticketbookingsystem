import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setTripData } from '../../action/tripAction'; // Assuming you have an action creator
import IconDot from '../../assets/img/dot-circle-svgrepo-com.svg'
import IconLocation from '../../assets/img/location-pin-svgrepo-com.svg'
import Skeleton from "react-loading-skeleton";

import { getSeatFromTrip } from "../../action/tripAction"; // Assuming you have an action creator
import moment from "moment";

const Schedule_card = ({ trip }) => {
  const dispatch = useDispatch();
  const dataTrip = [trip];

  const handleClick = () => {

    dispatch(getSeatFromTrip(dataTrip));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  const firstTimeComess = trip.listtripStopDTO[0].timeComess;
  const lastTimeComess = trip.listtripStopDTO[trip.listtripStopDTO.length - 1].timeComess;
  console.log("TRip123321", dataTrip);

  const firstAddress = trip.listtripStopDTO[0].stationDTO.name;
  const lastAddress = trip.listtripStopDTO[trip.listtripStopDTO.length - 1].stationDTO.name;


  return (
    <>
      <div className="no-scrollbar max-h-[84vh] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6" />
      {loading ? (
        <Skeleton className="w-[700px] h-36" />
      ) : (
        <div className="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
          <div className="flex items-center justify-between gap-8">
            <span>
              <p>{moment(firstTimeComess * 1000).subtract(7, "hours").format(" hh:mm A")}</p>

            </span>
            <div className="flex w-full items-center">
              <img src={IconDot} className="h-5 w-5" alt="pickup" />
              <span className="flex-1 border-b-2 border-dotted"></span>
              <span className="text-center leading-4">
                {/* 14 giờ
              <br /> */}
                <span className="text-[13px]">(Asian/VietNam)</span>
              </span>
              <span className="flex-1 border-b-2 border-dotted"></span>
              <img src={IconLocation} className="h-5 w-5" alt="station" />
            </div>
            <span>
              {/* {trip.listtripStopDTO.map((stop) => {
                if (stop.type === "DROPOFF") {
                  return (
                    <div key={stop.idStation}>
                      <p>{moment(stop.timeComess * 1000).subtract(7, "hours").format(" hh:mm A")}</p>
                    </div>
                  );
                }
                return null;
              })} */}
              <p>{moment(lastTimeComess * 1000).subtract(7, "hours").format(" hh:mm A")}</p>



            </span>
          </div>
          <div className="mt-3 flex justify-between text-[13px] font-normal">
            <div className="flex-1">
              <span className="text-[15px] font-medium">
                {/* {trip.listtripStopDTO.map((stop) => {
                  if (stop.type === "PICKUP") {
                    return (
                      <div key={stop.idStation}>
                        <p>{stop.stationDTO.name}</p>
                        <p className="text-gray-500 font-normal text-sm">Đ/c: {firstAddress}</p>
                      </div>
                    );
                  }
                  return null;
                })} */}

                <div>
                  <p>{firstAddress}</p>
                  <p className="text-gray-500 font-normal text-sm">Đ/c: {trip.listtripStopDTO[0].stationDTO.address}</p>
                </div>

              </span>
              <br />
              <span className="text-gray mt-2"></span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-[15px] font-medium">
                {/* {trip.listtripStopDTO.map((stop) => {
                  if (stop.type === "DROPOFF") {
                    return (
                      <div key={stop.idStation}>
                        <p> {lastAddress}</p>
                        <p className="text-gray-500 font-normal text-sm">Đ/c: {stop.stationDTO.address}</p>
                      </div>
                    );
                  }
                  return null;
                })} */}
                <div>
                  <p>{lastAddress}</p>
                  <p className="text-gray-500 font-normal text-sm">Đ/c: {trip.listtripStopDTO[trip.listtripStopDTO.length - 1].stationDTO.address}</p>
                </div>
              </span>
              <br />
              <span className="text-gray mt-2"></span>
            </div>
          </div>

          {/* <div className="divide my-3 sm:my-4"></div> */}
          {/* <div className="flex items-center justify-between">
            <div className="text-gray flex items-center gap-2 text-sm">
              <span className="text-orange">{trip.price}</span>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
              <span className="text-orange-400 text-base">Loại xe</span>
              <span >: {trip.busDTO?.type}</span><br></br>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>

              <span className=" text-orange-400 text-base">
                Số ghế trống
              </span>
              <span className="text-orange">: {trip.availableSeat}</span>
            </div> */}
          {/* <div className="flex-1 text-right">
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
            </div> */}
          {/* </div> */}

          <div className="divide my-3 sm:my-4"></div>
          <div className="flex items-center justify-between">
            <div className="text-gray flex items-center gap-2 text-sm">
              <span className="text-orange">{trip.price}</span>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
              <span className="text-orange-400 text-base">Loại xe</span>
              <span >: {trip.busDTO?.type}</span><br></br>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>

              <span className=" text-orange-400 text-base">
                Số ghế trống
              </span>
              <span className="text-orange">: {trip.availableSeat}</span>
            </div>
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
      )}

    </>
  );
};
export default Schedule_card;