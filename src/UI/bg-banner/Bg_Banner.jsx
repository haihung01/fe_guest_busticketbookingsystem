import React, { useState, useEffect } from "react";
import { NavLink, Link, } from "react-router-dom";
import "./Bg_Banner.scss";
import { Col, Container, Row } from "reactstrap";
import "../../data/data.js";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import IconHome from "../../assets/icon/home-svgrepo-com.svg";
import IconNews from "../../assets/icon/news-publishing-svgrepo-com.svg";
import IconSchedule from "../../assets/icon/calendar-svgrepo-com.svg";
import IconBill from "../../assets/icon/invoice-bill-svgrepo-com.svg";
import IconContact from "../../assets/icon/contact-headset-communication-svgrepo-com.svg";
import IconAboutUs from "../../assets/icon/people-svgrepo-com.svg";
import IconCHplay from "../../assets/icon/CHPlay.svg";
import IconAppStore from "../../assets/icon/AppStore.svg";
import axios from "axios"; // Import Axios library
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { fetchTripData, setTripData } from "../../action/tripAction.js"; // Path to your actions



const Bg_Banner = () => {

  const [diemDi, setDiemDi] = useState([
    {
      id: "",
      title: "",
    },
  ]);
  const [diemDen, setDiemDen] = useState([
    {
      id: "",
      title: "",
    },
  ]);

  const [origin, setOrigin] = useState([
    {
      id: "",
      title: "",
    },
  ]);
  const [Destination, setDestination] = useState([
    {
      id: "",
      title: "",
    },
  ]);



  const dispatch = useDispatch();
  const tripData = useSelector((state) => state.tripReducer.tripData);


  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date

  // const convertDateToTimestamp = (selectedDate) => {
  //   return selectedDate ? Math.floor(dayjs(selectedDate).unix()) : null;
  // };

  console.log("hahaha2:", origin);
  // console.log("API",tripData)
  const [loadingProvinces, setLoadingProvinces] = useState(true);

  const [openOrigin, setOpenOrigin] = useState(false);
  const handleOpenOrigin = () => setOpenOrigin(true);
  const handleCloseOrigin = () => {
    setOpenOrigin(false);
    setDiemDi(tempDiemDi);
  };
  const [searchQueryOrigin, setSearchQueryOrigin] = useState("");
  const [searchQueryDestination, setSearchQueryDestination] = useState("");
  const [selectedProvinceCodeFrom, setSelectedProvinceCodeFrom] =
    useState(null);
  const [selectedProvinceCodeTo, setSelectedProvinceCodeTo] = useState("");

  const [provinceInfo, setProvinceInfo] = useState(null);
  const [provinces, setProvinces] = useState([]); // Store provinces data
  console.log("hahaha321", provinces);
  // useEffect(() => {
  //   axios.get("http://btbs.ap-southeast-1.elasticbeanstalk.com/province-city").then((response) => {
  //     const _provincesConvert = response.data
  //       ? response.data.map((item) => ({
  //           id: item.code.toString(),
  //           title: item.name,
  //         }))
  //       : [];
  //     setProvinces(response.data);
  //     setLoadingProvinces(false);
  //   });
  // }, []);
  // fetch('http://btbs.ap-southeast-1.elasticbeanstalk.com/province-city')
  // .then(response => response.json())
  // .then(data => {
  //   // Mapping and converting "idProvince" to "id" and "name" to "title"
  //   const mappedData = data.data.map(item => {
  //     return {
  //       id: item.idProvince.toString(),
  //       title: item.name
  //     };
  //   });
  //   setProvinces(mappedData)
  //   console.log(provinces)
  // })
  // .catch(error => console.error('Error:', error));
  // const convertDateToTimestamp = (date) => {
  //   return date ? Math.floor(date / 1000) : null;
  // };

  // const [tripData, setTripData] = useState(null); // State to store API response


  const convertDateToTimestamp = (date) => {
    return date ? Math.floor(dayjs(date).unix()) : null;
  };
  // const fetchTripInformation = () => {
  //   const timestamp = convertDateToTimestamp(selectedDate);

  //   const url = `http://btbs.ap-southeast-1.elasticbeanstalk.com/trips/search?codeDeparturePoint=${diemDi}&codeDestination=${diemDen}&startTime=${timestamp}`;

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       console.log("Trip information:", response.data);
  //       // Handle the response data as needed
  //       // const getTripData = response.data.map((item) => ({
  //       //   id: item.idTrip.toString(),
  //       //   idRoute: item.idTrip.toString(),
  //       //   name: item.name, // Ensure the property name matches the actual key in the response
  //       //   availableSeat: item.availableSeat,
          

  //       // }));
  //       // setTripData(getTripData);
        
  //     // Access the 'data' array in the response
      
  //     const tripData = response.data?.data ?? [];
        
  //     const processedTrips = tripData.map((item) => {
  //       const seats = item.seatNameBooking.map((seat) => ({
  //         seatName: seat.seatName,
  //         status: seat.status,
  //       }));
  //     // Map over the 'data' array and extract the required information
  //     const getTripData = tripData.map((item) => ({
  //       id: item.idTrip.toString(),
  //       idRoute: item.idRoute.toString(),
  //       // Adjust property names according to the response structure
  //       name: item.routeDTO?.departurePoint + " - " + item.routeDTO?.destination,
  //       availableSeat: item.availableSeat,seats

  //       // Add more properties based on your requirements
  //     }));

  //     dispatch(setTripData(getTripData));
  //     // setTripData(getTripData);
  //     })
  //   })
      
  //     .catch((error) => {
  //       console.error("Error fetching trip information:", error);
  //       dispatch(setTripData([]));
  //      console.log("API_ERRRor",tripData)
  //     });
  // };
  const fetchTripInformation = () => {
    const timestamp = convertDateToTimestamp(selectedDate);
    const url = `http://btbs.ap-southeast-1.elasticbeanstalk.com/trips/search?codeDeparturePoint=${diemDi}&codeDestination=${diemDen}&startTime=${timestamp}`;
  
    axios
      .get(url)
      .then((response) => {
        console.log("Trip information:", response.data);
        
        const tripData = response.data?.data ?? [];
  
        // Handle the case when the response data is empty
        if (tripData.length === 0) {
          dispatch(setTripData([]));
        } else {
          const processedTrips = tripData.map((item) => {
            const seats = item.seatNameBooking.map((seat) => ({
              seatName: seat.seatName,
              status: seat.status,
            }));
  
            return {
              id: item.idTrip.toString(),
              idRoute: item.idRoute.toString(),
              name: item.routeDTO?.departurePoint + " - " + item.routeDTO?.destination,
              availableSeat: item.availableSeat,
              seats,
            };
          });
  
          dispatch(setTripData(processedTrips));
        }
      })
      .catch((error) => {
        console.error("Error fetching trip information:", error);
        dispatch(setTripData([])); // Handle error case by setting trip data to an empty array
      });
  };
 console.log("API",tripData)

  useEffect(() => {
    fetch("http://btbs.ap-southeast-1.elasticbeanstalk.com/province-city")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.data.map((item) => ({
          id: item.idProvince.toString(),
          name: item.name, // Ensure the property name matches the actual key in the response
        }));
        setProvinces(mappedData);
      })
      .catch((error) =>{ console.error("Error fetching data:", error);
      dispatch(setTripData([]));
      console.log("API_ERRRor",tripData)
    }
      );
  }, []); // Ensure the dependencies are properly managed

  const [openDestination, setOpenDestination] = useState(false);
  const handleOpenDestination = () => setOpenDestination(true);
  const handleCloseDestination = () => {
    setOpenDestination(false);
    setDiemDen(tempDiemDen);
  };

  //   const handleOriginSelect = (code) => {
  //     console.log("Code1234:", code); // Check the value of code
  //     const selectedProvince = provinces.find(
  //       (province) => province.code === code
  //     );
  //     console.log("Selected Province:", selectedProvince); // Check the selected province
  //     if (selectedProvince) {
  //       setSelectedProvinceCodeFrom(code); // Set the selected province code first
  //       setDiemDi(selectedProvince.name);
  //     }
  //     console.log("Selected Province Code:", selectedProvinceCodeFrom); // Check the value of selectedProvinceCodeFrom
  //     // The rest of your code...
  //   };

  const handleDestinationSelect = (code) => {
    const selectedProvince = provinces.find(
      (province) => province.code === code
    );
    if (selectedProvince) {
      setDiemDen(selectedProvince.name);
      setSelectedProvinceCodeTo(code);
    }
    // setOpenDestination(false);
  };
  console.log("hahaha:", diemDi);
  console.log(provinces);

  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const [moveSearchRecently, setMoveSearchRecently] = useState(false);
  const [tempDiemDi, setTempDiemDi] = useState("");
  const [tempDiemDen, setTempDiemDen] = useState("");

  const handleReverse = () => {
    const temp = diemDi;
    setDiemDi(diemDen);
    setDiemDen(temp);
  };

  const toggleRoundTrip = () => {
    setIsRoundTrip(!isRoundTrip);
    setMoveSearchRecently(!isRoundTrip);
  };
  console.log(diemDi);
  const [loading, setLoading] = useState(false);
  const [searchCompleted, setSearchCompleted] = useState(false); // Add this state variable

  // ... other code ...

  // const handleSearch = () => {
  //   // Show loading indicator
  //   setLoading(true);

  //   // Perform any necessary actions (e.g., making an API request)
  //   // Simulate a delay using setTimeout
  //   setTimeout(() => {
  //     // Hide loading indicator
  //     setLoading(false);
  //     // Mark search as completed
  //     setSearchCompleted(true);
  //   }, 100); // Simulated 2-second delay (you can replace this with your actual API request)
  // };
  const handleSearch = () => {
    setLoading(true);

    const timestamp = convertDateToTimestamp(selectedDate);

    // Perform API call to fetch trip information
    fetchTripInformation();

    setTimeout(() => {
      setLoading(false);
      setSearchCompleted(true);
    }, 2000); // Simulated 2-second delay (replace with your actual API call)
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const originFilter = provinces.filter((province) =>
    province.name.toLowerCase().includes(searchQueryOrigin.toLowerCase())
  );

  const destinationFilter = provinces.filter((province) =>
    province.name.toLowerCase().includes(searchQueryDestination.toLowerCase())
  );
  console.log(originFilter);

  return (
    <section>
      <Container className="body-bg">
        <Row>
          <Col className="navigation flex">
            <div className=" header-menu w-[876.2px] h-[79px] p-12 rounded-2xl mx-auto bg-slate-50 mt-10 shadow-2xl">
              <ul className="menu flex justify-center gap-[78px] mt-[-35px]">
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <NavLink to="/">
                    <img
                      src={IconHome}
                      className="w-[39px] h-[39px]"
                      alt="Home Icon"
                    />
                    Trang chủ
                  </NavLink>
                </motion.li>
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <NavLink to="/schedule2">
                    <img
                      src={IconSchedule}
                      className="w-[39px] h-[38px]"
                      alt="Schedule Icon"
                    />
                    Lịch trình
                  </NavLink>
                </motion.li>
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <Link to="/news">
                    <img
                      src={IconNews}
                      className="w-[39px] h-[38px]"
                      alt="News Icon"
                    />
                    Tin tức
                  </Link>
                </motion.li>
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <NavLink onClick={handleOpen}>
                    <img
                      src={IconBill}
                      className="w-[39px] h-[38px]"
                      alt="Bill Icon"
                    />
                    Hóa đơn
                  </NavLink>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        DOWNLOAD THE FUTA APP
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Tải app để có thẻ trải nghiệm dịch vụ một cách tốt nhất.
                      </Typography>
                      <div className="flex mt-10 justify-between ">
                        <img className="h-9" src={IconCHplay} alt="CHplay" />
                        <img
                          className="h-9"
                          src={IconAppStore}
                          alt="AppStore"
                        />
                      </div>
                    </Box>
                  </Modal>
                </motion.li>
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <NavLink to="/contact">
                    <img
                      src={IconContact}
                      className="w-[39px] h-[38px]"
                      alt="Contact Icon"
                    />
                    Liên hệ
                  </NavLink>
                </motion.li>
                <motion.li whileTap={{ scale: 1.1 }} className="nav_item">
                  <NavLink to="/about-us">
                    <img
                      src={IconAboutUs}
                      className="w-[39px] h-[38px]"
                      alt="About Us Icon"
                    />
                    Về chúng tôi
                  </NavLink>
                </motion.li>
              </ul>
            </div>
          </Col>

          <Col className="Widget-Section">
            <div className="header-choose w-[1200px] h-[321px] p-12 rounded-2xl mx-auto bg-slate-50 mt-[-40px] shadow-2xl ">
              <section>
                <Container>
                  <Row>
                    <Col className="flex align-items-center gap-16  round-checkbox mt-3 ">
                      <div>
                        <input
                          type="checkbox"
                          id="myCheck1"
                          checked={!isRoundTrip}
                          onChange={toggleRoundTrip}
                        />
                        <label
                          for="myCheck1"
                          className={!isRoundTrip ? "selected" : ""}
                          id="label1"
                        >
                          Một chiều
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="myCheck2"
                          checked={isRoundTrip}
                          onChange={toggleRoundTrip}
                        />
                        <label
                          for="myCheck2"
                          className={isRoundTrip ? "selected" : ""}
                        >
                          Khứ hồi
                        </label>
                      </div>
                    </Col>
                    <Col className="mx-auto w-[1100px] h-[200px] ">
                      <div className="mt-3 flex gap-6">
                        <div className="flex gap-5">
                          <Col className="flex">
                            <div className="flex gap-5">
                              <div className="">
                                <span className="ml-3">Điểm đi :</span>
                                <div className="border border-gray-300 flex rounded-lg w-[252px] h-[67px] relative">
                                  <select
                                    value={diemDi}
                                    onChange={(e) => {
                                      const selectedId = e.target.value;
                                      const selectedTitle =
                                        e.target.options[e.target.selectedIndex]
                                          .text;
                                      setOrigin({
                                        id: selectedId,
                                        title: selectedTitle,
                                      });
                                      setDiemDi(e.target.value);
                                    }}
                                  >
                                    <option value="">Chọn điểm đi</option>
                                    {originFilter.map((province) => (
                                      <option
                                        key={province.id}
                                        value={province.id}
                                      >
                                        {province.name}
                                      </option>
                                    ))}
                                  </select>
                                  <div>
                                    {/* <Modal
                                                                            open={openOrigin}
                                                                            onClose={handleCloseOrigin}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                        >
                                                                            <Box sx={origin} className='origin rounded-xl'>
                                                                                <Origin tempDiemDi={tempDiemDi} setTempDiemDi={setTempDiemDi} />
                                                                            </Box>
                                                                        </Modal> */}
                                  </div>
                                </div>
                              </div>

                              <div className="relative">
                                <span className="ml-3">Điểm đến :</span>
                                <div className="border border-gray-300 flex rounded-lg w-[252px] h-[67px]">
                                  <select
                                    value={diemDen}
                                    onChange={(e) => {
                                      const selectedId = e.target.value;
                                      const selectedTitle =
                                        e.target.options[e.target.selectedIndex]
                                          .text;
                                      setOrigin({
                                        id: selectedId,
                                        title: selectedTitle,
                                      });
                                      setDiemDen(e.target.value);
                                    }}
                                    // onClick={handleOpenDestination}
                                  >
                                    <option value="">Chọn điểm đến</option>
                                    {destinationFilter.map((province) => (
                                      <option
                                        key={province.id}
                                        value={province.id}
                                      >
                                        {province.name}
                                      </option>
                                    ))}
                                  </select>
                                  <div>
                                    {/* <Modal
                                                                            open={openDestination}
                                                                            onClose={handleCloseDestination}
                                                                            aria-labelledby="modal-modal-title"
                                                                            aria-describedby="modal-modal-description"
                                                                        >
                                                                            <Box sx={destination} className='rounded-xl'>
                                                                                <Destination tempDiemDen={tempDiemDen} setTempDiemDen={setTempDiemDen} />
                                                                            </Box>
                                                                        </Modal> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <motion.div
                              whileHover={{ rotate: 180 }}
                              onClick={handleReverse}
                              className="rounded-3xl border border-gray-300 w-[33px] h-[33px] absolute mt-10 mx-auto flex ml-[245px]"
                            >
                              <img
                                src="https://www.svgrepo.com/show/494968/swap.svg"
                                className="w-[25px] h-[25px] justify-content-center align-items-center flex mx-auto my-1 "
                                alt="Reverse Icon"
                              />
                            </motion.div>
                          </Col>

                          <Col className="flex gap-5">
                            <div>
                              <span className="ml-3">Ngày đi :</span>
                              <div className="">
                                {/* <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer components={["DatePicker"]}>
                                    <DatePicker
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(props) => <TextField {...props} />}
 />
                                  </DemoContainer>
                                </LocalizationProvider> */}
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DatePicker
                                    value={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    renderInput={(props) => (
                                      <TextField {...props} />
                                    )}
                                  />
                                </LocalizationProvider>
                              </div>
                            </div>

                            <div>
                              <span className="ml-4">Ngày về :</span>
                              <div>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <DemoContainer components={["DatePicker"]}>
                                    <DatePicker disabled={!isRoundTrip} />
                                  </DemoContainer>
                                </LocalizationProvider>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </div>
                      <div className="flex mt-2">
                        <div>
                          <span className="ml-2 ">Tìm kiếm gần đây </span>
                          <div className="border border-gray-300 bg-pink-50 flex rounded-lg w-[252px] h-[67px] ">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </Col>

          <Col className="flex justify-center mt-9">
            <div className="button-search  w-[216px] h-[44px] rounded-3xl flex bg-[#ef5222] mt-[-55px] justify-center shadow-2xl relative ">
              <Link to="/schedule">
                <button
                  onClick={handleSearch}
                  className="font-sans text-white w-[216px] h-[44px]"
                >
                  Tìm chuyến xe
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// function Origin({ tempDiemDi, setTempDiemDi }) {
//     return (
//         <Container className='mt-[-15px]'>
//             <Row >
//                 <Col className=' ml-[-12px]'>
//                     <h5 className='ml-2'>Điểm đi</h5>
//                     <div className='w-[332px] h-[67px] border border-gray-300 flex mt-2  rounded-xl'>
//                         <input
//                             placeholder='Chọn điểm đi'
//                             className='ml-2'
//                             value={tempDiemDi}
//                             onChange={(e) => setTempDiemDi(e.target.value)}
//                         />
//                     </div>
//                 </Col>

//                 <Col className='mt-7 ml-[-12px]'>
//                     <h1 className='ml-2'>TỈNH/THÀNH PHỐ</h1>
//                     <div className='w-[150px] h-[30px] rounded-lg border border-gray-300 mt-2 flex'>
//                         <span className='mx-auto'>Tp.Hồ Chí Minh</span>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     )
// };

// function Destination({ tempDiemDen, setTempDiemDen }) {
//     return (
//         <Container className='mt-[-15px]'>
//             <Row >
//                 <Col className=' ml-[-12px]'>
//                     <h5 className='ml-2'>Điểm đến</h5>
//                     <div className='w-[332px] h-[67px] border border-gray-300 flex mt-2  rounded-xl'>
//                         <input
//                             placeholder='Chọn điểm đến'
//                             className='ml-2'
//                             value={tempDiemDen}
//                             onChange={(e) => setTempDiemDen(e.target.value)}
//                         />
//                     </div>
//                 </Col>

//                 <Col className='mt-7 ml-[-12px]'>
//                     <h1 className='ml-2'>TỈNH/THÀNH PHỐ</h1>
//                     <div className='w-[150px] h-[30px] rounded-lg border border-gray-300 mt-2 flex'>
//                         <span className='mx-auto'>Tp.Hồ Chí Minh</span>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

const origin = {
  position: "absolute",
  top: "42%",
  left: "28.5%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  border: "2px solid #e6e4e4",
  boxShadow: 24,
  p: 4,
  height: 240,
};

const destination = {
  position: "absolute",
  top: "42%",
  left: "42.5%",
  transform: "translate(-50%, -50%)",
  width: 380,
  bgcolor: "background.paper",
  border: "2px solid #e6e4e4",
  boxShadow: 24,
  p: 4,
  height: 240,
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
export default Bg_Banner;
