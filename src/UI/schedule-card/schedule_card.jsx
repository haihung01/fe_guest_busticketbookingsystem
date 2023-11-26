import React from "react"
import { Link } from "react-router-dom";

const  Schedule_card = ({trip})=>{
 
    return(
        <>
        <div className="no-scrollbar max-h-[84vh] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6" />
            <div className="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
              <div className="flex items-center justify-between gap-8">
                <span>{trip.startTime}</span>
                <div className="flex w-full items-center">
                  <img src="./images/icons/pickup.svg" alt="pickup" />
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="text-center leading-4">
                    14 giờ
                    <br />
                    <span className="text-[13px]">(Asian/Ho Chi Minh)</span>
                  </span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <img src="./images/icons/station.svg" alt="station" />
                </div>
                <span>{trip.endTime}</span>
              </div>
              <div className="mt-3 flex justify-between text-[13px] font-normal">
                <div className="flex-1">
                  <span className="text-[15px] font-medium">
                    Bến Xe An Nhơn, Bình Định
                  </span>
                  <br />
                  <span className="text-gray mt-2"></span>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-[15px] font-medium">Bến Xe Miền Tây</span>
                  <br />
                  <span className="text-gray mt-2"></span>
                </div>
              </div>
              <div className="text-yellow mt-1 text-[13px] sm:w-1/2">
                <span className="underline">Lưu ý</span>: Quý Khách đang chọn tuyến
                xe có lộ trình đi Cao Tốc- Long Thành - Dầu Giây - Phan Thiết. L
                <span className="ml-1 cursor-pointer lowercase">
                  <span className="text-orange">...Xem thêm</span>
                </span>
              </div>
              <div className="divide my-3 sm:my-4"></div>
              <div className="flex items-center justify-between">
                <div className="text-gray flex items-center gap-2 text-sm">
                  <span className="text-orange">{trip.price}</span>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span>Giường</span>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span className="text-orange">{trip.availableSeat}</span>
                  <span className="cursor-pointer text-blue-400 underline">
                    Chọn ghế
                  </span>
                </div>
                <Link to="/product-cart">
                  <button
                    type="button"
                    className="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block"
                    fdprocessedid="ujvv0l"
                  >
                    <span>Chọn chuyến</span>
                  </button>
                </Link>
              </div>
            </div>
            </>
    )
}
export default Schedule_card