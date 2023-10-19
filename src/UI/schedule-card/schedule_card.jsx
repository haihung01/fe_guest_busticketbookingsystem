import React from "react"
import { Link } from "react-router-dom";

const  Schedule_card = ({trip})=>{
  
    return(
        <>
        <div class="no-scrollbar max-h-[84vh] overflow-y-auto bg-[#F7F7F7] sm:max-h-full sm:overflow-visible sm:bg-white sm:pt-6" />
            <div class="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
              <div class="flex items-center justify-between gap-8">
                <span>{trip.startTime}</span>
                <div class="flex w-full items-center">
                  <img src="./images/icons/pickup.svg" alt="pickup" />
                  <span class="flex-1 border-b-2 border-dotted"></span>
                  <span class="text-center leading-4">
                    14 giờ
                    <br />
                    <span class="text-[13px]">(Asian/Ho Chi Minh)</span>
                  </span>
                  <span class="flex-1 border-b-2 border-dotted"></span>
                  <img src="./images/icons/station.svg" alt="station" />
                </div>
                <span>{trip.endTime}</span>
              </div>
              <div class="mt-3 flex justify-between text-[13px] font-normal">
                <div class="flex-1">
                  <span class="text-[15px] font-medium">
                    Bến Xe An Nhơn, Bình Định
                  </span>
                  <br />
                  <span class="text-gray mt-2"></span>
                </div>
                <div class="flex-1 text-right">
                  <span class="text-[15px] font-medium">Bến Xe Miền Tây</span>
                  <br />
                  <span class="text-gray mt-2"></span>
                </div>
              </div>
              <div class="text-yellow mt-1 text-[13px] sm:w-1/2">
                <span class="underline">Lưu ý</span>: Quý Khách đang chọn tuyến
                xe có lộ trình đi Cao Tốc- Long Thành - Dầu Giây - Phan Thiết. L
                <span class="ml-1 cursor-pointer lowercase">
                  <span class="text-orange">...Xem thêm</span>
                </span>
              </div>
              <div class="divide my-3 sm:my-4"></div>
              <div class="flex items-center justify-between">
                <div class="text-gray flex items-center gap-2 text-sm">
                  <span class="text-orange">{trip.price}</span>
                  <div class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span>Giường</span>
                  <div class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span class="text-orange">34 chỗ trống</span>
                  <span class="cursor-pointer text-blue-400 underline">
                    Chọn ghế
                  </span>
                </div>
                <Link to="/product-cart">
                  <button
                    type="button"
                    class="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block"
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