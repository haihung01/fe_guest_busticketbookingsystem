import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Bg_Banner from "../bg-banner/Bg_Banner";
import Seat from "../../assets/img/SeatAvaiable.png";
import { useSelector } from "react-redux";
import moment, { max } from "moment";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconCHplay from '../../assets/icon/CHPlay.svg'
import IconAppStore from '../../assets/icon/AppStore.svg'
import Skeleton from "react-loading-skeleton";
import configSystemApi from "../../utils/configAPI";
import { getConfigFromTrip } from "../../action/tripAction";
import { useDispatch } from "react-redux";
const ProductCart = () => {

  const defaultSeats = []; // replace with your default seats array
  const defaultTotalFare = 0;

  // Initialize the state with default values
  const [selectedSeats, setSelectedSeats] = useState(defaultSeats);
  const [totalFare, setTotalFare] = useState(defaultTotalFare);

  // ... (rest of your existing component)

  useEffect(() => {
    fetchData();
  }, [/* dependencies for useEffect */]);



  //===========================================

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  const dispatch = useDispatch();
  const configData = useSelector((state) => state.tripReducer.DetailConfig);


  // const idToFind = 15; // ID you want to find
  // let foundItem;

  // for (let i = 0; i < dataServiceSystem.length; i++) {
  //   if (dataServiceSystem[i].idConfigSystem === idToFind) {
  //     foundItem = dataServiceSystem[i];
  //     break; // Stop loop when item is found
  //   }
  // }

  const [dataServiceSystem, setDataServiceSystem] = useState([]);
  const [config1, setConfig1] = useState(null);
  const config = dataServiceSystem.data
  // const configMaxSeat = configData.find(item => item.idConfigSystem === idToFind);
  // const maxSeat = configMaxSeat.value
  // setConfig1(maxSeat)


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await configSystemApi.getAll();
      console.log("dataTBL", response);
      setDataServiceSystem(response.data);
      console.log('metmoighe', response.data);

      if (Array.isArray(response.data.data) && response.data.data.length > 0) {
        const idToFind = 16;
        const configMaxSeat = response.data.data.find(item => item.idConfigSystem === idToFind);
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
      setDataServiceSystem([]);

      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error("Load Data failed !", error);
      }

    } finally {
      setLoading(false);
    }
  };


  // const abc = getmaxseat(dataServiceSystem)
  console.log('metmoighe2', dataServiceSystem.data);


  console.log("config1", config1);

  useEffect(() => {
    fetchData();
  }, [1000]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const tripData = useSelector((state) => state.tripReducer.DetailSeat);

  const seats = tripData[0].seats;
  console.log("123331213", tripData);
  const trip = tripData[0]

  const timeComessFirst = trip.listtripStopDTO[0].timeComess;
  const timeComessLast = trip.listtripStopDTO[trip.listtripStopDTO.length - 1].timeComess;

  const seatsPerRow = 2;

  // const [selectedSeats, setSelectedSeats] = useState([]);
  // const [totalFare, setTotalFare] = useState(0);

  const renderSeats = (seats) => {
    const rows = Math.ceil(seats.length / seatsPerRow);

    const seatRows = [];
    for (let i = 0; i < rows; i++) {
      const start = i * seatsPerRow;
      const end = Math.min(start + seatsPerRow, seats.length);
      const rowSeats = seats.slice(start, end);

      const rowElements = rowSeats.map((seat) => (
        <div
          key={seat.seatName}
          onClick={() => handleSeatSelection(seat)}
          style={{
            width: "50px",
            height: "50px",
            margin: "5px",
            backgroundColor:
              seat.status === "AVAILABLE"
                ? selectedSeats.some(
                  (selectedSeat) => selectedSeat.seatName === seat.seatName
                )
                  ? "rgb(216, 180, 254)"
                  : "rgb(147, 197, 253)"
                : "rgb(55, 65, 81)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: seat.status === "AVAILABLE" ? "pointer" : "not-allowed",
            opacity: seat.status === "AVAILABLE" ? 1 : 0.5,
          }}
        >
          {seat.seatName}
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
  const renderSeatsNomal = (seats) => {
    const rows = Math.ceil(seats.length / seatsPerRow);

    const seatRows = [];
    for (let i = 0; i < rows; i++) {
      const start = i * seatsPerRow;
      const end = Math.min(start + seatsPerRow, seats.length);
      const rowSeats = seats.slice(start, end);

      const rowElements = rowSeats.map((seat) => (
        <div
          key={seat.seatName}
          onClick={() => handleSeatSelection(seat)}
          style={{
            width: "50px",
            height: "50px",
            margin: "5px",
            backgroundColor:
              seat.status === "AVAILABLE"
                ? selectedSeats.some(
                  (selectedSeat) => selectedSeat.seatName === seat.seatName
                )
                  ? "rgb(216, 180, 254)"
                  : "rgb(147, 197, 253)"
                : "rgb(55, 65, 81)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            cursor: seat.status === "AVAILABLE" ? "pointer" : "not-allowed",
            opacity: seat.status === "AVAILABLE" ? 1 : 0.5,
          }}
        >
          {seat.seatName}
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
  console.log("GET_Trip_select", tripData[0]?.name);
  console.log("GET_Trip_select22", tripData[0]?.listtripStopDTO);

  if (!tripData || !tripData[0]?.seats) {
    return <p>No seats available</p>;
  }
  const handleSeatSelection = (seat) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.seatName === seat.seatName
    );

    if (!isSeatSelected && selectedSeats.length >= config1) {
      alert("You can only select a maximum " + config1 + " of seats");
      return;
    }

    if (!isSeatSelected && seat.status === "AVAILABLE") {
      setSelectedSeats([...selectedSeats, seat]);
      const seatFare = tripData[0]?.fare || 0;
      setTotalFare((prevTotal) => prevTotal + seatFare);
    } else {
      // Remove the seat from selectedSeats
      const updatedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat.seatName !== seat.seatName
      );
      setSelectedSeats(updatedSeats);
      const seatFare = tripData[0]?.fare || 0;
      setTotalFare((prevTotal) => prevTotal - seatFare);
    }
  };

  const renderSeatsByType = () => {
    const busType = tripData[0].busDTO.type;

    if (busType === "GIUONG" || busType === "LIMOUSINE") {
      // Handle seat rendering for GIUONG or LIMOUSIN type
      const upperDeckSeats = tripData[0].seats.slice(0, 11);
      const lowerDeckSeats = tripData[0].seats.slice(11, 22);
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
      const nomalSeats = tripData[0].seats.slice(0, 30);

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
        <Container>
          <Row>
            <Col className=" mt-20">
              <div className="w-[1200px] p-12 rounded-2xl mx-auto bg-slate-50 border border-gray-200 ">
                <section>
                  <Container>
                    <Row className="flex justify-between">
                      {/* <Col className="w-[700px] h-[556px] border border-gray-200 rounded-2xl shadow-xl overflow-auto">
                        {loading ? (
                          <Skeleton className="w-[700px] h-full rounded-2xl " />
                        ) : (<div>
                          <Col className="">
                            <div className="flex gap-20 mt-3 items-center ml-9">
                              <h1 className="text-2xl font-normal">Chọn ghế</h1>
                            </div>
                          </Col>

                          <Col className="flex ml-9">
                            <div className="w-[475px] ">
                              <div>
                                <h2>Select Seats Max {config1}</h2>
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
                          </Col></div>)}

                      </Col> */}



                      {/* <Col>
                        {loading ? (
                          <Skeleton className="w-[345px] h-[206px] " />
                        ) : (
                          <div className="w-[345px] h-[220px] border border-gray-200 rounded-2xl shadow-xl">
                            <h1 className="text-2xl font-normal ml-7 mt-3">
                              Thông tin lượt đi
                            </h1>
                            <div className="ml-7 mt-3">
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Tuyến xe
                                </td>
                                <td className="mr-6 font-medium ">
                                  {tripData[0]?.name}
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Thời gian
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  <div className="flex">




                                    <div>{moment(
                                      timeComessFirst * 1000
                                    ).subtract(7, "hours").format(" hh:mm A")} </div>



                                    <span>-</span>
                                    <div>{moment(
                                      timeComessLast * 1000
                                    ).subtract(7, "hours").format(" hh:mm A")} </div>
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
                                    <span key={selectedSeat.seatName}>
                                      {selectedSeat.seatName + "  "}
                                    </span>
                                  ))}{" "}
                                </td>
                              </tr>
                              <tr className="flex justify-between">
                                <td className="text-gray-400 font-normal">
                                  Tổng tiền lượt đi
                                </td>
                                <td className="mr-6 text-green-800 font-normal">
                                  {totalFare}
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
                                  {totalFare}
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
                                  {totalFare}
                                </td>
                              </tr>
                            </div>
                          </div>
                        )}


                        <div className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end'>
                          <button onClick={handleOpen} className='w-[112px] h-[32px] border border-gray-300 rounded-2xl flex justify-center text-center items-center text-orange-500'>
                            Hủy
                          </button>
                          <button onClick={handlegit addOpen} className='w-[112px] h-[32px] bg-orange-500 rounded-2xl flex justify-center text-center items-center text-gray-50'>
                            Thanh toán
                          </button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            <Box sx={style}>
                              <Typography id="modal-modal-title" variant="h6" component="h2">
                                DOWNLOAD THE TRIPTIX APP
                              </Typography>
                              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Tải app để có thẻ trải nghiệm dịch vụ một cách tốt nhất.
                              </Typography>
                              <div className='flex mt-10 justify-between '>
                                <img
                                  className='h-9'
                                  src={IconCHplay}
                                  alt='CHplay'
                                />
                                <img
                                  className='h-9'
                                  src={IconAppStore}
                                  alt='AppStore'
                                />
                              </div>
                            </Box>
                          </Modal>
                        </div>
                      </Col> */}

                    </Row>
                  </Container>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <Row >
            <Col lg="12" className=" h-[550px]">
              {loading ? (
                [<Skeleton className=" h-[550px]" />]
              ) : (
                <div>
                  <div>
                    <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                      TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                    </h1>
                  </div>

                  <div className="time_sales rounded-lg relative  mt-7">
                    <div className="w-[1200px]  mx-auto justify-between flex">
                      <div>
                        <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                          Thời gian vàng, săn sale ngay! <br />
                          Giảm tới 50% giá vé!
                        </h1>
                        <h1 className="text-center">
                          Tải ứng dụng ngay để sử dụng sản phẩm.
                          <br /> Đừng bỏ qua cơ hội săn vé rẽ trong ngày.
                        </h1>
                      </div>
                      <img
                        src="https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg"
                        className="w-[600px] h-[470px]"
                      />
                    </div>
                  </div>
                </div>
              )}

            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  // height: 200,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
export default ProductCart;
