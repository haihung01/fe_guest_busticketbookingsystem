import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTripData, setTripDetail } from "../../action/tripAction"; // Assuming you have an action creator
import IconDot from "../../assets/img/dot-circle-svgrepo-com.svg";
import IconLocation from "../../assets/img/location-pin-svgrepo-com.svg";
import Skeleton from "react-loading-skeleton";
import { getSeatFromTrip } from "../../action/tripAction"; // Assuming you have an action creator
import moment from "moment";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Schedule_card = ({ trip }) => {
  const dispatch = useDispatch();
  const dataTrip = [trip];
  const [typeTicket, setTypeTikect] = useState();
  const handleClick = () => {
    const tripDetailTemp = {
      ...trip,
      ticketInformation: {
        id: typeTicket?.idTicketType,
        name: typeTicket?.name,
        defaultPrice: typeTicket?.defaultPrice,
      },
    };
    dispatch(setTripDetail(tripDetailTemp));
    // dispatch(getSeatFromTrip(dataTrip));
  };
  const [loading, setLoading] = useState(false);
  console.log("check listTripStopDTO[0]", trip);
  const firstTimeComess = trip?.listTripStopDTO[0]?.timeCome;
  const lastTimeComess =
    trip?.listTripStopDTO[trip?.listTripStopDTO?.length - 1]?.timeCome;
  const firstAddress = trip?.departurePoint;
  const lastAddress = trip?.destination;
  useEffect(() => {
    setTypeTikect(trip?.listTicketType[0]);
  }, []);

  return (
    <Box>
      <div className="no-scrollbar max-h-[84vh] w-[700px] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6" />
      {loading ? (
        <Skeleton className="w-[700px] h-36" />
      ) : (
        <div className="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
          <div className="flex items-center justify-between gap-8">
            <span>
              {/* {" "}
              {trip.listTripStopDTO.map((stop) => {
                if (stop.type === "PICKUP") {
                  return (
                    <div key={stop.idStation}>
                      <p>{moment(stop.timeComess * 1000).subtract(7, "hours").format(" hh:mm A")}</p>
                    </div>
                  );
                }
                return null;
              })} */}

              {/* <p>{moment(firstTimeComess* 1000).subtract(7, "hours").format(" hh:mm A")}</p> */}
              <p>{firstTimeComess}</p>
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
              {/* {trip.listTripStopDTO.map((stop) => {
                if (stop.type === "DROPOFF") {
                  return (
                    <div key={stop.idStation}>
                      <p>{moment(stop.timeComess * 1000).subtract(7, "hours").format(" hh:mm A")}</p>
                    </div>
                  );
                }
                return null;
              })} */}
              {/* <p>{moment(lastTimeComess* 1000).subtract(7, "hours").format(" hh:mm A")}</p> */}
              <p>{lastTimeComess}</p>
            </span>
          </div>
          <div className="mt-3 flex justify-between text-[13px] font-normal">
            <div className="flex-1">
              <span className="text-[15px] font-medium">
                {/* {trip.listTripStopDTO.map((stop) => {
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
                  {/* <p className="text-gray-500 font-normal text-sm">Đ/c: {trip.listTripStopDTO[0]?.stationDTO?.address}</p> */}
                </div>
              </span>
              <br />
              <span className="text-gray mt-2"></span>
            </div>
            <div className="flex-1 text-right">
              <span className="text-[15px] font-medium">
                {/* {trip.listTripStopDTO.map((stop) => {
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
                  {/* <p className="text-gray-500 font-normal text-sm">Đ/c: {trip.listTripStopDTO[trip.listTripStopDTO.length - 1].stationDTO.address}</p> */}
                </div>
              </span>
              <br />
              <span className="text-gray mt-2"></span>
            </div>
          </div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Loại vé</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={typeTicket}       
                size="small"
                label="Loại vé"
                onChange={(e) => {
                  setTypeTikect(e.target.value);
                }}
              >
                {trip?.listTicketType?.map((ticket) => (
                  <MenuItem key={ticket.idTicketType} value={ticket}>
                    {ticket?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
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
                {trip.listTripStopDTO.map((stop) => {
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
              <span>: {trip?.busDTO?.type}</span>
              <br></br>
              <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>

              <span className=" text-orange-400 text-base">Số ghế trống</span>
              <span className="text-orange">: {trip.availableSeat}</span>
              {typeTicket && (
                <>
                  <span className=" text-orange-400 text-base">Giá vé</span>
                  <span className="text-orange">
                    : {typeTicket?.defaultPrice}
                  </span>
                </>
              )}
            </div>
            <Link
              to={`/product-cart`}
              // state = {{tripSend: trip}} // Pass your state object here
            >
              <button
                type="button"
                onClick={handleClick}
                className="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block border border-orange-200 w-28 h-8 rounded-xl bg-orange-100"
              >
                <span className="font-medium text-orange-500">Chọn chuyến</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </Box>
  );
};
export default Schedule_card;
