import { Button, Chip, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import IconAppStore from "../../assets/icon/AppStore.svg";
import IconCHplay from "../../assets/icon/CHPlay.svg";
import configSystemApi from "../../utils/configAPI";
import { useNavigate } from "react-router-dom";
import { setPaymentInfo } from "../../action/tripAction";
import BackDrop from "../../components/loading/Loading";
const ProductCart = () => {
  const defaultSeats = [];
  const defaultTotalFare = 0;
  const [selectedSeats, setSelectedSeats] = useState(defaultSeats);
  const [totalFare, setTotalFare] = useState(defaultTotalFare);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [isFill, setIsFill] = useState({
    isSelectSeat: false,
    isFillName: false,
    isFillPhone: false,
    isFillEmail: false,
  });
  useEffect(() => {
    fetchData();
  }, []);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [loading, setLoading] = useState(true);
  const tripData = useSelector((state) => state.tripReducer.tripDetail);
  console.log("Trip detail in reducer", tripData);
  const tripPickupSelected = useSelector((state) => state.tripReducer.pickupSelected);
  const tripDropoffSelected = useSelector((state) => state.tripReducer.dropoffSelected);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const [dataServiceSystem, setDataServiceSystem] = useState([]);
  const [config1, setConfig1] = useState(null);
  const handlePayment = () => {
    const dataPayment = {
      nameGuest: name,
      phoneGuest: phone?.toString(),
      emailGuest: email,
      idTrip: tripData?.id || 0,
      idonStation: tripData?.idStationPickUp,
      idoffStation: tripData?.idStationDropOff,
      stationOn: tripData?.stationOn,
      stationOff: tripData?.stationOff,
      seatName: selectedSeats,
      amountMoneyToRecharge: totalFare
    }
    dispatch(setPaymentInfo(dataPayment));
    navigate("/payment")
  }
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await configSystemApi.getAll();
      // setDataServiceSystem(response.data);
      if (
        Array.isArray(response?.data?.data) &&
        response?.data?.data?.length > 0
      ) {
        const idToFind = 16;
        const configMaxSeat = response.data.data.find(
          (item) => item.idConfigSystem === idToFind
        );
        if (configMaxSeat) {
          const maxSeat = configMaxSeat.value;
          setConfig1(maxSeat);
          // Thực hiện các công việc khác với dữ liệu mới
        } else {
          console.error("Config not found for ID: ", idToFind);
        }
      } else {
        console.error("No data received from API");
      }
    } catch (error) {
      console.log("err", error);
      // setDataServiceSystem([]);
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error("Load Data failed !", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const trip = tripData;

  let timeComessFirst = "00:00",
    timeComessLast = "00:00";
  if (trip?.listTripStopDTO) {
    timeComessFirst = trip?.listTripStopDTO[0]?.timeCome;
    timeComessLast =
      trip?.listTripStopDTO[trip?.listTripStopDTO?.length - 1]?.timeCome;
  }
  const seatsPerRow = 2;

  const renderSeats = (seats) => {
    return (
      <Grid container>
        {seats.map((seat) => (
          <Grid item xs={6} key={seat}>
            <div
              key={seat}
              onClick={() => handleSeatSelection(seat)}
              style={{
                width: "50px",
                height: "50px",
                margin: "5px",
                backgroundColor:
                  // seat.status === "AVAILABLE"
                  tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                    ? selectedSeats.some(
                      (selectedSeat) => selectedSeat === seat
                    )
                      ? "rgb(216, 180, 254)"
                      : "rgb(147, 197, 253)"
                    : "rgb(55, 65, 81)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "5px",
                cursor:
                  tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                    ? "pointer"
                    : "not-allowed",
                opacity:
                  tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                    ? 1
                    : 0.5,
              }}
            >
              {seat}
            </div>
          </Grid>
        ))}
      </Grid>
    );

  };

  // return seatRows;
  //  };
  const renderSeatsNomal = (seats) => {
    const rows = Math.ceil(seats.length / seatsPerRow);

    const seatRows = [];
    for (let i = 0; i < rows; i++) {
      const start = i * seatsPerRow;
      const end = Math.min(start + seatsPerRow, seats.length);
      const rowSeats = seats.slice(start, end);

      const rowElements = rowSeats.map((seat) => (
        <div
          key={seat}
          onClick={() => handleSeatSelection(seat)}
          style={{
            width: "50px",
            height: "50px",
            margin: "5px",
            backgroundColor:
              tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                ? selectedSeats.some((selectedSeat) => selectedSeat === seat)
                  ? "rgb(216, 180, 254)"
                  : "rgb(147, 197, 253)"
                : "rgb(55, 65, 81)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor:
              tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                ? "pointer"
                : "not-allowed",
            opacity:
              tripData?.listSeatBooked?.findIndex((t) => t === seat) === -1
                ? 1
                : 0.5,
          }}
        >
          {seat}
        </div>
      ));

      seatRows.push(
        <div key={`row_${i}`} className="flex gap-10 mt-3">
          {rowElements}
        </div>
      );
    }

    return seatRows;
  };

  const [isChecked, setIsChecked] = useState({
    sold: false,
    empty: false,
    selected: false,
  });

  if (!tripData || !tripData?.seats) {
    return <p>No seats available</p>;
  }
  const handleSeatSelection = (seat) => {
    if (tripData?.listSeatBooked?.findIndex((t) => t === seat) !== -1) {
      return;
    }
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat === seat
    );

    if (!isSeatSelected && selectedSeats.length >= config1) {
      alert("You can only select a maximum " + config1 + " of seats");
      return;
    }

    if (!isSeatSelected) {
      const newArr = [...selectedSeats, seat];
      setSelectedSeats(newArr);
      const numberOfSeats = newArr.length;
      const seatFare =
        tripData?.defaultPrice * numberOfSeats || 0;
      setTotalFare(seatFare);
      setIsFill({
        ...isFill,
        isSelectSeat: true,
      });
    } else {
      // Remove the seat from selectedSeats
      const updatedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      setSelectedSeats(updatedSeats);
      const numberOfSeats = updatedSeats.length;
      const seatFare =
        tripData?.defaultPrice * numberOfSeats || 0;
      setTotalFare(seatFare);
      if (numberOfSeats === 0) {
        setIsFill({
          ...isFill,
          isSelectSeat: false,
        });
      } else {
        setIsFill({
          ...isFill,
          isSelectSeat: true,
        });
      }
    }
  };

  const renderSeatsByType = () => {
    const busType = tripData.busDTO.type;
    if (busType === "GIUONG" || busType === "LIMOUSINE") {
      // Handle seat rendering for GIUONG or LIMOUSIN type
      const upperDeckSeats = [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "A11",
      ];
      const lowerDeckSeats = [
        "A12",
        "A13",
        "A14",
        "A15",
        "A16",
        "A17",
        "A18",
        "A19",
        "A20",
        "A21",
        "A22",
      ];
      return (
        // Your custom seat rendering logic for GIUONG or LIMOUSIN type
        // Replace this with your specific rendering code
        <div className="flex gap-20 mt-3 items-center ml-9">
          <div>
            <h2 className="ml-11">Tầng dưới</h2>
            {renderSeats(upperDeckSeats)}
          </div>

          <div>
            <h2 className="ml-11">Tầng trên</h2>
            {renderSeats(lowerDeckSeats)}
          </div>
        </div>
      );
    } else if (busType === "GHE") {
      // Handle seat rendering for GHE type
      const nomalSeats = [
        "A1",
        "A2",
        "A3",
        "A4",
        "A5",
        "A6",
        "A7",
        "A8",
        "A9",
        "A10",
        "A11",
        "A12",
        "A13",
        "A14",
        "A15",
        "A16",
        "A17",
        "A18",
        "A19",
        "A20",
        "A21",
        "A22",
        "A23",
        "A24",
        "A25",
        "A26",
        "A27",
        "A28",
        "A29",
        "A30",

      ];;

      // Use the existing rendering logic

      return (
        <>
          <div>
            <h2>Tầng thường</h2>
            {renderSeatsNomal(nomalSeats)}
          </div>
        </>
      );
    } else {
      // Default rendering if the bus type doesn't match any condition
      return <p>Invalid bus type</p>;
    }
  };

  return (
    <>
      <section className="home-banner">
        <div>
          <BackDrop open={loading} />
          <Row>
            <Col className=" mt-20">
              <div className="w-[1200px] p-12 rounded-2xl mx-auto bg-slate-50 border border-gray-200 ">
                <section>
                  <div>
                    <Row className="flex justify-between">
                      <Col className="w-[700px] h-[556px] border border-gray-200 rounded-2xl shadow-xl overflow-auto">
                        {loading ? (
                          <Skeleton className="w-[700px] h-full rounded-2xl " />
                        ) : (
                          <div>
                            <Col className="">
                              <div className="flex gap-20 mt-3 items-center ml-9">
                                <h1 className="text-2xl font-normal">
                                  Chọn ghế
                                </h1>
                              </div>
                            </Col>

                            <Col className="flex ml-9">
                              <div className="w-[475px] ">
                                <div>
                                  <h2>Số ghế tối đa có thể chọn: {config1}</h2>
                                  {renderSeatsByType()}
                                </div>
                              </div>

                              <div className="">
                                <ul className="">
                                  <li className="gap-2 flex items-center">
                                    <input className="w-[16px] h-[16px] bg-gray-700 " />
                                    Đã bán
                                  </li>
                                  <li className="gap-2 flex items-center">
                                    <input className="w-[16px] h-[16px] bg-blue-300" />
                                    Còn trống
                                  </li>
                                  <li className="gap-2 flex items-center">
                                    <input className="w-[16px] h-[16px] bg-purple-300" />
                                    Đang chọn
                                  </li>
                                </ul>
                              </div>
                            </Col>
                          </div>
                        )}
                      </Col>

                      <Col>
                        {loading ? (
                          <Skeleton className="w-[345px] h-[206px] " />
                        ) : (
                          <div className="w-[345px] h-[250px] border border-gray-200 rounded-2xl shadow-xl">
                            <h1 className="text-2xl font-normal ml-7 mt-3">
                              Thông tin lượt đi
                            </h1>
                            <div className="ml-7 mt-5">
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Tuyến xe
                                </td>
                                <td className="mr-6 font-medium ">
                                  {tripData?.name}
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Thời gian
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  <div className="flex">
                                    <div>{timeComessFirst} </div>

                                    <span>-</span>
                                    <div>{timeComessLast} </div>
                                  </div>
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Số lượng ghế
                                </td>
                                <td className="mr-6 font-normal">
                                  {selectedSeats.length}
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Số ghế
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  {selectedSeats.map((selectedSeat) => (
                                    <Chip
                                      key={selectedSeat}
                                      label={selectedSeat}
                                      color="info"
                                      sx={{ mr: 1, mb: 1 }}
                                    />
                                  ))}{" "}
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Tổng tiền lượt đi
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  {totalFare} VNĐ
                                </td>
                              </tr>
                            </div>
                          </div>
                        )}

                        {loading ? (
                          <Skeleton className="w-[345px] h-[171px]" />
                        ) : (
                          <div className="w-[345px] h-[171px] mt-5 border border-gray-200 rounded-2xl shadow-xl">
                            <h1 className="text-2xl font-normal ml-7 mt-3">
                              Chi tiết giá
                            </h1>
                            <div className="ml-7 mt-3">
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Giá vé lượt đi
                                </td>
                                <td className="mr-6 font-normal text-orange-600">
                                  {totalFare} VNĐ
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Phí thanh toán
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  0đ
                                </td>
                              </tr>
                              <hr className="mr-6 mt-3" />
                              <tr className="flex justify-between mt-3">
                                <td className="text-gray-400 font-normal">
                                  Tổng tiền dự kiến
                                </td>
                                <td className="mr-6 font-normal text-orange-600">
                                  {totalFare} VNĐ
                                </td>
                              </tr>
                            </div>
                          </div>
                        )}
                      </Col>
                    </Row>

                    <Row className="w-[700px] h-[350px] border border-gray-200 rounded-2xl shadow-xl overflow-auto mt-4">
                      <div className="flex">
                        <Col>
                          <h1 className="ml-6 mt-3 text-lg font-medium">
                            Thông tin khách hàng
                          </h1>
                          <div className="ml-6 flex-col mt-3 ">
                            <Col className="d-flex ">
                              <TextField
                                sx={{ minWidth: 240, mb: 1 }}
                                id="outlined-controlled"
                                label="Họ và tên"
                                size="small"
                                helperText={
                                  name && name?.length > 1
                                    ? ""
                                    : "Họ và Tên không hợp lệ *"
                                }
                                error={name && name?.length > 1 ? false : true}
                                value={name}
                                onChange={(event) => {
                                  if (!event.target.value) {
                                    setIsFill({
                                      ...isFill,
                                      isFillName: false,
                                    });
                                    setName(event.target.value);
                                    return;
                                  }
                                  setName(event.target.value);
                                  if (event.target.value.length > 1) {
                                    setIsFill({ ...isFill, isFillName: true });
                                  } else {
                                    setIsFill({
                                      ...isFill,
                                      isFillName: false,
                                    });
                                  }
                                }}
                              />
                            </Col>

                            <Col className="mt-5">
                              <TextField
                                sx={{ minWidth: 240, mb: 1 }}
                                id="outlined-controlled"
                                label="Số điện thoại"
                                size="small"
                                value={phone}
                                helperText={
                                  phone && phone?.length === 10
                                    ? ""
                                    : "Số điện thoại không hợp lệ *"
                                }
                                error={
                                  phone && phone?.length === 10 ? false : true
                                }
                                type="number"
                                onChange={(event) => {
                                  if (!event.target.value) {
                                    setIsFill({
                                      ...isFill,
                                      isFillPhone: false,
                                    });
                                    setPhone(event.target.value);
                                    return;
                                  }
                                  setPhone(event.target.value);
                                  if (event.target.value?.length === 10) {
                                    setIsFill({ ...isFill, isFillPhone: true });
                                  } else {
                                    setIsFill({
                                      ...isFill,
                                      isFillPhone: false,
                                    });
                                  }

                                }}
                              />
                            </Col>

                            <Col className="mt-5">
                              <TextField
                                sx={{ minWidth: 240 }}
                                id="outlined-controlled"
                                label="Email"
                                size="small"
                                value={email}
                                helperText={
                                  email && validateEmail(email)
                                    ? ""
                                    : "Email không hợp lệ *"
                                }
                                error={
                                  email && validateEmail(email) ? false : true
                                }
                                onChange={(event) => {
                                  if (!event.target.value) {
                                    setIsFill({
                                      ...isFill,
                                      isFillEmail: false,
                                    });
                                    setEmail(event.target.value);
                                    return;
                                  }
                                  setEmail(event.target.value);
                                  if (validateEmail(event.target.value)) {
                                    setIsFill({ ...isFill, isFillEmail: true });
                                  } else {
                                    setIsFill({
                                      ...isFill,
                                      isFillEmail: false,
                                    });
                                  }
                                }}
                              />
                            </Col>
                          </div>
                        </Col>

                        <Col>
                          <h1 className="text-center justify-center mt-3 text-xl text-orange-500">
                            ĐIỀU KHOẢN & LƯU Ý
                          </h1>
                          <div className="ml-6 flex-col mr-3">
                            <br />
                            <span>
                              (*) Quý khách vui lòng có mặt tại bến xuất phát
                              của xe trước ít nhất 30 phút giờ xe khởi hành,
                              mang theo thông báo đã thanh toán vé thành công có
                              chứa mã vé được gửi từ hệ thống TripTix.
                            </span>
                            <br />
                            <br />
                            <span>
                              (*) Nếu quý khách có mọi thắc mắc, có thể vào phần
                              Liên Hệ của nhà xe yêu cầu tư vấn hỗ trợ.
                            </span>
                          </div>
                        </Col>
                      </div>
                      <Col className="mt-2 ml-6">
                        <input type="checkbox" id="myCheck1" />
                        <label for="myCheck1" className="ml-2">
                          Chấp nhận các điều khoản đặt vé & chính sách bảo mật
                          thông tin của TripTix.
                        </label>
                      </Col>
                    </Row>
                    <Row className="w-[700px] h-[100px] border border-gray-200 rounded-2xl shadow-xl overflow-auto mt-2 flex gap-52">
                      <Col className="mt-5">
                        <div className="ml-6">
                          <span className="text-lg font-medium">
                            Tổng số tiền thanh toán
                          </span>
                          <h1>
                            Tổng : <span className="text-orange-500 font-medium text-2xl">{totalFare} VNĐ</span>
                          </h1>
                        </div>
                      </Col>
                      <Col>
                        <div className="rounded-2xl mt-9 flex gap-7">
                          <button
                            onClick={handleOpen}
                            className="w-[112px] h-[32px] border border-gray-300 rounded-2xl flex justify-center text-center items-center text-orange-500"
                          >
                            Hủy
                          </button>
                          <Button
                            disabled={(isFill.isFillEmail === true && isFill.isFillPhone === true && isFill.isFillEmail === true && isFill.isSelectSeat === true) ? false : true}
                            onClick={handlePayment}
                            size="small"
                            sx={{
                              color: "white",
                              pl: 1,
                              pr: 1,
                              bgcolor: "#F97316",
                              borderRadius: "16px",
                              "&:hover": {
                                color: "#fff",
                                bgcolor: "#fb8c00",
                              },
                            }}
                          >
                            Thanh toán
                          </Button>

                        </div>
                      </Col>
                    </Row>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // height: 200,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
export default ProductCart;