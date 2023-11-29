import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import Bg_Banner from "../bg-banner/Bg_Banner";
import Seat from "../../assets/img/SeatAvaiable.png";
import { useSelector } from "react-redux";
import moment from "moment";

const ProductCart = () => {
  // const location = useLocation();
  // const { state } = location;
  const tripData = useSelector((state) => state.tripReducer.DetailSeat); // Assuming tripReducer is your reducer name
  const seatsv1 = tripData;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalFare, setTotalFare] = useState(0);
  // const dataTrip = state?.dataTrip || {};
  // console.log("data in Product",dataTrip)
  // const dataTrip = location.state ? location.state.dataTrip : null;

  // console.log('Data received in ProductCart:', dataTrip);
  console.log("1234567", seatsv1)
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

  //   const handleSeatSelection = (seat) => {
  //     if (selectedSeats.length >= 5) {
  //       alert("You can only select a maximum of 5 seats");
  //       return;
  //     }

  //     if (seat.status === "AVAILABLE") {
  //       setSelectedSeats([...selectedSeats, seat]);
  //       const seatFare = tripData[0]?.fare || 0; // Assuming tripData has fare information
  //       setTotalFare((prevTotal) => prevTotal + seatFare);
  //     } else {
  //       alert("This seat is not available");
  //     }
  //   };
  // const handleSeatSelection = (seat) => {
  //     if (selectedSeats.length >= 5) {
  //       alert("You can only select a maximum of 5 seats");
  //       return;
  //     }

  //     const isSeatSelected = selectedSeats.some(
  //       (selectedSeat) => selectedSeat.seatName === seat.seatName
  //     );

  //     if (!isSeatSelected && seat.status === "AVAILABLE") {
  //       setSelectedSeats([...selectedSeats, seat]);
  //       const seatFare = tripData[0]?.fare || 0; // Assuming tripData has fare information
  //       setTotalFare((prevTotal) => prevTotal + seatFare);
  //     } else {
  //       // Remove the seat from selectedSeats
  //       const updatedSeats = selectedSeats.filter(
  //         (selectedSeat) => selectedSeat.seatName !== seat.seatName
  //       );
  //       setSelectedSeats(updatedSeats);
  //       const seatFare = tripData[0]?.fare || 0; // Assuming tripData has fare information
  //       setTotalFare((prevTotal) => prevTotal - seatFare);
  //     }
  //   };
  const handleSeatSelection = (seat) => {
    const isSeatSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.seatName === seat.seatName
    );

    if (!isSeatSelected && selectedSeats.length >= 5) {
      alert("You can only select a maximum of 5 seats");
      return;
    }

    if (!isSeatSelected && seat.status === "AVAILABLE") {
      setSelectedSeats([...selectedSeats, seat]);
      const seatFare = tripData[0]?.fare || 0; // Assuming tripData has fare information
      setTotalFare((prevTotal) => prevTotal + seatFare);
    } else {
      // Remove the seat from selectedSeats
      const updatedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat.seatName !== seat.seatName
      );
      setSelectedSeats(updatedSeats);
      const seatFare = tripData[0]?.fare || 0; // Assuming tripData has fare information
      setTotalFare((prevTotal) => prevTotal - seatFare);
    }
  };
  return (
    <>
      <section className="home-banner">
        <Container>
          <Row>
            <Col className=" mt-20">
              <div className="w-[1200px] h-[700px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200">
                <section>
                  <Container>
                    <Row className="flex justify-between">
                      <Col className="w-[700px] h-[336px] border border-gray-200 rounded-2xl shadow-xl">
                        <Col className="">
                          <div className="flex gap-20 mt-3 items-center ml-9">
                            <h1 className="text-2xl font-normal">Chọn ghế</h1>
                            <span className="">Thông tin xe</span>
                          </div>
                          {/* <div className='flex gap-32 items-center ml-20 mt-4'>
                                                        <span>Tầng trên</span>
                                                        <span>Tầng dưới</span>
                                                    </div> */}
                        </Col>

                        <Col className="flex ml-9">
                          <div className="w-[475px] ">
                            {/* <Table
                                                        tripData={tripData}

                                                        /> */}

                            <div>
                              <h2>Select Seats (Max 5)</h2>
                              {/* <ul
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  listStyle: "none",
                                  padding: 0,
                                }}
                              >
                                {seats.map((seat) => (
                                  <li
                                    key={seat.seatName}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      margin: "5px",
                                      backgroundColor:
                                        seat.status === "AVAILABLE"
                                          ? "blue"
                                          : "green",
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      cursor:
                                        seat.status === "AVAILABLE"
                                          ? "pointer"
                                          : "not-allowed",
                                      opacity:
                                        seat.status === "AVAILABLE" ? 1 : 0.5,
                                    }}
                                    onClick={() => handleSeatSelection(seat)}
                                  >
                                    {seat.seatName}
                                  </li>
                                ))}
                              </ul> */}
                              <ul
                                style={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  listStyle: "none",
                                  padding: 0,
                                }}
                              >
                                {tripData[0].seats.map((seat) => (
                                  <li
                                    key={seat.seatName}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      margin: "5px",
                                      backgroundColor:
                                        seat.status === "AVAILABLE"
                                          ? selectedSeats.some(
                                            (selectedSeat) =>
                                              selectedSeat.seatName ===
                                              seat.seatName
                                          )
                                            ? "rgb(216, 180, 254)" // Change this to "bg-purple-300" in your actual code
                                            : "rgb(147, 197, 253)"
                                          : "rgb(55, 65, 81)",
                                      color: "white",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      borderRadius: "5px",
                                      cursor:
                                        seat.status === "AVAILABLE"
                                          ? "pointer"
                                          : "not-allowed",
                                      opacity:
                                        seat.status === "AVAILABLE" ? 1 : 0.5,
                                    }}
                                    onClick={() => handleSeatSelection(seat)}
                                  >
                                    {seat.seatName}
                                  </li>
                                ))}
                              </ul>
                              {/* <div>
                                <h3>Selected Seats</h3>
                                <ul>
                                  {selectedSeats.map((selectedSeat) => (
                                    <li key={selectedSeat.seatName}>
                                      {selectedSeat.seatName}
                                    </li>
                                  ))}
                                </ul>
                              </div> */}
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
                      </Col>

                      <Col>
                        <div className="w-[345px] h-[206px] border border-gray-200 rounded-2xl shadow-xl">
                          <h1 className="text-2xl font-normal ml-7 mt-3">
                            Thông tin lượt đi
                          </h1>
                          <div className="ml-7 mt-3">
                            <tr className="flex justify-between">
                              <td className="text-gray-400 font-normal">
                                Tuyến xe
                              </td>
                              <td className="mr-6 font-normal">
                                {tripData[0]?.name}
                              </td>
                            </tr>
                            <tr className="flex justify-between">
                              <td className="text-gray-400 font-normal">
                                Thời gian
                              </td>
                              <td className="mr-6 text-green-800 font-normal">
                                {/* {tripData[0]?.listtripStopDTO.map((time) => {
                if (time.type === "DROPOFF") {
                  return (
                    <div key={time.idStation}>
                      <p> {time.listtripStopDTO.timeComess}</p>
                    </div>
                  );
                }
                return null;
              })} */}
                                <p>
                                  {tripData[0]?.listtripStopDTO.map((stop) => {
                                    if (stop.type === "PICKUP") {
                                      return (
                                        <div key={stop.idStation}>
                                          <p>
                                            {moment(
                                              stop.timeComess * 1000
                                            ).format(" hh:mm A")}
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })}
                                  <span>-</span>
                                  {tripData[0]?.listtripStopDTO.map((stop) => {
                                    if (stop.type === "DROPOFF") {
                                      return (
                                        <div key={stop.idStation}>
                                          <p>
                                            {moment(
                                              stop.timeComess * 1000
                                            ).format(" hh:mm A")}
                                          </p>
                                        </div>
                                      );
                                    }
                                    return null;
                                  })}
                                </p>
                              </td>
                            </tr>
                            <tr className="flex justify-between">
                              <td className="text-gray-400 font-normal">
                                Số lượng ghế
                              </td>
                              <td className="mr-6 font-normal">1 Ghế</td>
                            </tr>
                            <tr className="flex justify-between">
                              <td className="text-gray-400 font-normal">
                                Số ghế
                              </td>
                              <td className="mr-6 text-green-800 font-normal">
                                {selectedSeats.map((selectedSeat) => (
                                  <li key={selectedSeat.seatName}>
                                    {selectedSeat.seatName}
                                  </li>
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
                                Tổng tiền
                              </td>
                              <td className="mr-6 font-normal text-orange-600">
                                {totalFare}
                              </td>
                            </tr>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    {/* <Row className='flex gap-5'>
                                            <Col className='w-[700px] h-[210px] border border-gray-200 rounded-2xl shadow-xl mt-[-40px] '>
                                                <h1 className='ml-7 text-xl font-normal mt-3 text-orange-500'>ĐIỀU KHOẢN & LƯU Ý</h1>
                                                <div className='ml-7 mt-1'>
                                                    <span className="mr-5 ">
                                                        (*) Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất 30 phút giờ xe khởi hành, mang theo thông báo đã thanh toán vé thành công có chứa mã vé được gửi từ hệ thống FUTA BUS LINE. Vui lòng liên hệ Trung tâm tổng đài <span class="text-orange-500">1900 6067</span>  để được hỗ trợ.
                                                    </span>
                                                    <span className="flex mt-3 mr-5">
                                                        (*) Nếu quý khách có nhu cầu trung chuyển, vui lòng liên hệ Tổng đài trung chuyển trước khi đặt vé. Chúng tôi không đón/trung chuyển tại những điểm xe trung chuyển không thể tới được.
                                                    </span>

                                                </div>
                                            </Col>
                                            <Col className='w-[345px] h-[100px] rounded-2xl mt-5  flex gap-10 justify-end ml-8'>
                                                <button className='w-[112px] h-[32px] border border-gray-300 rounded-2xl flex justify-center text-center items-center text-orange-500'>
                                                    Hủy
                                                </button>
                                                <button className='w-[112px] h-[32px] bg-orange-500 rounded-2xl flex justify-center text-center items-center text-gray-50'>
                                                    Thanh toán
                                                </button>
                                            </Col>

                                        </Row> */}
                  </Container>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mt-16">
        <Container>
          <Row>
            <Col lg="12" className="">
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
                        All tickets are 50% off now! <br />
                        Don't miss such a deal!
                      </h1>
                      <h1 className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br /> Sed eu feugiat amet, libero ipsum enim pharetra
                        hac.
                      </h1>
                    </div>
                    <img
                      src="https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg"
                      className="w-[600px] h-[470px]"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

// function Table({ tripData  }) {
// //     if (!tripData || !tripData[0]?.seats) {
// //         return <p>No seats available</p>;
// //       }

// //       const availableSeats = tripData[0].seats

// //     console.log("select_seat ",tripData)

// //   // Handle seat selection
// //   const handleSeatSelection = (seatName) => {
// //     // Implement your logic to handle seat selection
// //     console.log(`Seat ${seatName} selected`);
// //     // Update your state or dispatch an action for seat selection
// //   };
// if (!tripData || !tripData[0]?.seats) {
//     return <p>No seats available</p>;
//   }

//   const seats = tripData[0].seats;
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatSelection = seat => {
//     if (selectedSeats.length >= 5) {
//       alert('You can only select a maximum of 5 seats');
//       return;
//     }

//     if (seat.status === 'AVAILABLE') {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       alert('This seat is not available');
//     }
//   };
//     return(
//     //     <div>
//     //   <h2>Available Seats</h2>
//     //   <ul>
//     //     {availableSeats.map(seat => (
//     //       <li
//     //       key={seat.seatName}
//     //       style={{
//     //         width: '50px',
//     //         height: '50px',
//     //         margin: '5px',
//     //         backgroundColor: seat.status === 'AVAILABLE' ? 'blue' : 'green',
//     //         color: 'white',
//     //         display: 'flex',
//     //         alignItems: 'center',
//     //         justifyContent: 'center',
//     //         borderRadius: '5px',
//     //       }}
//     //     >
//     //       {seat.seatName}
//     //       </li>
//     //     ))}
//     //   </ul>
//     // </div>
//     <div>
//     <h2>Select Seats (Max 5)</h2>
//     <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
//       {seats.map(seat => (
//         <li
//           key={seat.seatName}
//           style={{
//             width: '50px',
//             height: '50px',
//             margin: '5px',
//             backgroundColor: seat.status === 'AVAILABLE' ? 'blue' : 'green',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderRadius: '5px',
//             cursor: seat.status === 'AVAILABLE' ? 'pointer' : 'not-allowed',
//             opacity: seat.status === 'AVAILABLE' ? 1 : 0.5,
//           }}
//           onClick={() => handleSeatSelection(seat)}
//         >
//           {seat.seatName}
//         </li>
//       ))}
//     </ul>
//     <div>
//       <h3>Selected Seats</h3>
//       <ul>
//         {selectedSeats.map(selectedSeat => (
//           <li key={selectedSeat.seatName}>{selectedSeat.seatName}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
//     )
// }
export default ProductCart;
//     const imageArray = Array(22).fill(Seat);

//     const upperDeckSeats = imageArray.slice(0, 11);
//     const lowerDeckSeats = imageArray.slice(11, 22);
//     const seatsPerRow = 2;

//     const [selectedCells, setSelectedCells] = useState([]);
//     const handleCellClick = (cellLabel) => {
//         if (selectedCells.includes(cellLabel)) {
//             setSelectedCells(selectedCells.filter((selectedCell) => selectedCell !== cellLabel));
//         } else {
//             if (selectedCells.length < 5) {
//                 setSelectedCells([...selectedCells, cellLabel]);
//             }
//         }
//     };

//     return (
//         <table className="table-fixed">
//             <tbody className='flex gap-24'>
//                 <div>
//                     <tr>
//                         <td className="text-center">
//                             <h2 className="text-xl">Tầng trên</h2>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             {Array(Math.ceil(15 / seatsPerRow)).fill().map((_, rowIndex) => (
//                                 <div key={rowIndex} className="flex gap-10 mt-3">
//                                     {upperDeckSeats.slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow).map((image, index) => (
//                                         <div key={index}>
//                                             <img
//                                                 src={image}
//                                                 alt={`Seat ${index + 1}`}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </td>
//                     </tr>
//                 </div>

//                 <div>
//                     <tr>
//                         <td className="text-center">
//                             <h2 className="text-xl">Tầng dưới</h2>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                             {Array(Math.ceil(15 / seatsPerRow)).fill().map((_, rowIndex) => (
//                                 <div key={rowIndex} className="flex gap-10 mt-3">
//                                     {lowerDeckSeats.slice(rowIndex * seatsPerRow, (rowIndex + 1) * seatsPerRow).map((image, index) => (
//                                         <div key={index}>
//                                             <img
//                                                 src={image}
//                                                 alt={`Seat ${index + 16}`}
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             ))}
//                         </td>
//                     </tr>
//                 </div>

//             </tbody>
//         </table>
//     );
// }