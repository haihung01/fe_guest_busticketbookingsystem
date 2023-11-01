import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Bg_Banner from '../bg-banner/Bg_Banner'

const ProductCart = () => {

    const [isChecked, setIsChecked] = useState({
        sold: false,
        empty: false,
        selected: false,
    });
    
    // Hàm xử lý khi checkbox thay đổi trạng thái
    // const handleCheckboxChange = (name) => {
    //     setIsChecked({
    //         ...isChecked,
    //         [name]: !isChecked[name],
    //     });
    // };

    return (
        <>
            <section className="home-banner" >
                <Container>
                    <Row>
                        <Col className=' mt-20'>
                            <div className="w-[1200px] h-[700px] p-12  rounded-2xl mx-auto bg-slate-50 border border-gray-200">
                                <section>
                                    <Container>
                                        <Row className='flex justify-between'>
                                            <Col className='w-[700px] h-[336px] border border-gray-200 rounded-2xl shadow-xl'>
                                                <Col className=''>
                                                    <div className='flex gap-20 mt-3 items-center ml-9'>
                                                        <h1 className='text-2xl font-normal'>Chọn ghế</h1>
                                                        <span className=''>Thông tin xe</span>
                                                    </div>
                                                    <div className='flex gap-32 items-center ml-20 mt-4'>
                                                        <span>Tầng trên</span>
                                                        <span>Tầng dưới</span>
                                                    </div>

                                                </Col>

                                                <Col className='flex gap-5 ml-4'>
                                                    <div className='w-[475px] '>
                                                        <Table />
                                                    </div>

                                                    <div className=''>
                                                        <ul className=''>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-gray-700 ' />
                                                                Đã bán
                                                            </li>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-blue-300' />
                                                                Còn trống
                                                            </li>
                                                            <li className='gap-2 flex items-center'>
                                                                <input className='w-[16px] h-[16px] bg-purple-300' />
                                                                Đang chọn
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Col>

                                            <Col>
                                                <div className='w-[345px] h-[206px] border border-gray-200 rounded-2xl shadow-xl'>
                                                    <h1 className='text-2xl font-normal ml-7 mt-3'>Thông tin lượt đi</h1>
                                                    <div className='ml-7 mt-3'>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Tuyến xe</td>
                                                            <td className='mr-6 font-normal'>BX Mien Tay ⇒ Da Lat</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Thời gian</td>
                                                            <td className='mr-6 text-green-800 font-normal'>19:00 11-0r-6063</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Số lượng ghế</td>
                                                            <td className='mr-6 font-normal'>1 Ghế</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Số ghế</td>
                                                            <td className='mr-6 text-green-800 font-normal'>B06</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Tổng tiền lượt đi</td>
                                                            <td className='mr-6 text-green-800 font-normal'>280.000đ</td>
                                                        </tr>
                                                    </div>
                                                </div>

                                                <div className='w-[345px] h-[171px] mt-5 border border-gray-200 rounded-2xl shadow-xl'>
                                                    <h1 className='text-2xl font-normal ml-7 mt-3'>Chi tiết giá</h1>
                                                    <div className='ml-7 mt-3'>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Giá vé lượt đi</td>
                                                            <td className='mr-6 font-normal text-orange-600'>280.000đ</td>
                                                        </tr>
                                                        <tr className='flex justify-between'>
                                                            <td className='text-gray-400 font-normal'>Phí thanh toán</td>
                                                            <td className='mr-6 text-green-800 font-normal'>0đ</td>
                                                        </tr>
                                                        <hr className='mr-6 mt-3' />
                                                        <tr className='flex justify-between mt-3'>
                                                            <td className='text-gray-400 font-normal'>Tổng tiền</td>
                                                            <td className='mr-6 font-normal text-orange-600'>280.000đ</td>
                                                        </tr>

                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row className='flex gap-5'>
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

                                        </Row>
                                    </Container>
                                </section>

                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <section className='mt-16'>
                <Container >
                    <Row>
                        <Col lg="12" className="">
                            <div>
                                <div>
                                    <h1 className="text-blue-900 text-2xl font-medium mx-auto text-center mt-10">
                                        TRIP TIX BUS LINES - MANG LẠI KỶ NIỆM ĐÁNG NHỚ
                                    </h1>
                                </div>

                                <div className="time_sales rounded-lg relative  mt-7">
                                    <div className='w-[1200px]  mx-auto justify-between flex'>
                                        <div>
                                            <h1 className="text-blue-900 text-3xl font-bold text-center p-14">
                                                All tickets are 50% off now! <br />Don't miss such a deal!
                                            </h1>
                                            <h1 className="text-center">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                <br /> Sed eu feugiat amet, libero ipsum enim pharetra
                                                hac.
                                            </h1>
                                        </div>
                                        <img
                                            src='https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc006.jpg'
                                            className="w-[600px] h-[470px]" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

// function Table() {
//     return (

//         <table className="table-fixed">
//             <tbody>
//                 {Array(6).fill().map((_, rowIndex) => (
//                     <tr key={rowIndex}>
//                         {Array(6).fill().map((_, colIndex) => (
//                             <td key={colIndex} className=" border px-6 py-[6.5px] m-4">
//                                 {rowIndex * 6 + colIndex + 1}

//                             </td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//         </table>



//     )
// }
function Table() {
    const [selectedCells, setSelectedCells] = useState([]);
    const cellValues = generateCellValues(6, 6);
  
    function generateCellValues(rows, columns) {
      const cellValues = [];
      let cellValue = 1;
      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        for (let colIndex = 0; colIndex < columns; colIndex++) {
          const cellLabel = `A${cellValue.toString().padStart(2, '0')}`;
          cellValues.push(cellLabel);
          cellValue++;
        }
      }
      return cellValues;
    }
  
    const handleCellClick = (cellLabel) => {
      if (selectedCells.includes(cellLabel)) {
        setSelectedCells(selectedCells.filter((selectedCell) => selectedCell !== cellLabel));
      } else {
        if (selectedCells.length < 5) {
          setSelectedCells([...selectedCells, cellLabel]);
        }
      }
    };
  
    return (
      <table className="table-fixed">
        <tbody>
          {Array(6).fill().map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array(6).fill().map((_, colIndex) => {
                const cellIndex = rowIndex * 6 + colIndex;
                const cellLabel = cellValues[cellIndex];
                const isSelected = selectedCells.includes(cellLabel);
  
                return (
                  <td
                    key={cellLabel}
                    className={`border px-6 py-[6.5px] m-4 ${isSelected ? 'bg-blue-300' : ''}`}
                    onClick={() => handleCellClick(cellLabel)}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleCellClick(cellLabel)}
                    />
                    {cellLabel}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
//   function formatCellLabel(rowIndex, colIndex) {
//     const rowLabel = String.fromCharCode(65 + Math.floor(colIndex / 6)); // Converts 0 to A, 1 to B, etc.
//     const colLabel = (colIndex % 6 + 1).toString().padStart(2, '0'); // Converts 0 to "01", 1 to "02", etc.
//     return `${rowLabel}${colLabel}`;
//   }
  
//   function Table() {
//     const [selectedCells, setSelectedCells] = useState([]);
  
//     const handleCellClick = (rowIndex, colIndex) => {
//       const cellKey = formatCellLabel(rowIndex, colIndex);
  
//       if (selectedCells.includes(cellKey)) {
//         setSelectedCells(selectedCells.filter(cell => cell !== cellKey));
//       } else {
//         if (selectedCells.length < 5) {
//           setSelectedCells([...selectedCells, cellKey]);
//         }
//       }
//     };
  
//     return (
//       <table className="table-fixed">
//         <tbody>
//           {Array(6).fill().map((_, rowIndex) => (
//             <tr key={rowIndex}>
//               {Array(6).fill().map((_, colIndex) => (
//                 <td
//                   key={colIndex}
//                   className={`border px-6 py-[6.5px] m-4 ${
//                     selectedCells.includes(formatCellLabel(rowIndex, colIndex)) ? 'bg-blue-300' : ''
//                   }`}
//                   onClick={() => handleCellClick(rowIndex, colIndex)}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={selectedCells.includes(formatCellLabel(rowIndex, colIndex))}
//                     onChange={() => handleCellClick(rowIndex, colIndex)}
//                   />
//                   {formatCellLabel(rowIndex, colIndex)}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   }
  
export default ProductCart