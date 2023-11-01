import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Schedule_card from "../UI/schedule-card/schedule_card";
import { dataSchedule } from "../data/dataSchedule";
import IconPrice from '../assets/icon/price-tag-svgrepo-com.svg'

const Schedule = () => {
  return (
    <>
      <section className="choosFrom_wrap">
        <Container>
          <Row>
            <Col lg="12">
              <div>
                <div className="btn From_wrap">
                  <div className="w-[980.53px] h-[55px] rounded-[30px] mx-auto bg-slate-50 mt-[-25px] shadow-2xl border border-gray-400 "></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // 0 pixels left and right, 320 pixels top and bottom
        }}
      >
        <div className="flex flex-col sm:flex-row sm:gap-6 sm:pt-36">
          <div className="hidden sm:block">
            <div className="flex w-[360px] min-w-[360px] flex-col bg-[#F8F9F9] stroke-[#EBEDEE] text-[15px] font-medium sm:rounded-xl">
              <div className="flex justify-between p-4">
                <span className="text-base uppercase">Bộ lọc tìm kiếm</span>
                <div className="flex cursor-pointer gap-2 text-[#E12424]">
                  Bỏ lọc
                </div>
              </div>
              <div class="p-4">
                <span>Giờ đi</span>
                <div
                  className="ant-checkbox-group checkbox-group-custom"
                  style={{ display: "grid" }}
                >
                  <label class="ant-checkbox-wrapper mt-2">
                    <span class="ant-checkbox">
                      <input
                        type="checkbox"
                        class="ant-checkbox-input"
                        value="1"
                      />
                      <span class="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span class="ml-1 font-normal">
                        Sáng sớm 00:00 - 06:00{" "}
                      </span>
                    </span>
                  </label>
                  <label class="ant-checkbox-wrapper mt-2">
                    <span class="ant-checkbox">
                      <input
                        type="checkbox"
                        class="ant-checkbox-input"
                        value="2"
                      />
                      <span class="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span class="ml-1 font-normal">
                        Buổi sáng 06:00 - 12:00
                      </span>
                    </span>
                  </label>
                  <label class="ant-checkbox-wrapper mt-2">
                    <span class="ant-checkbox">
                      <input
                        type="checkbox"
                        class="ant-checkbox-input"
                        value="3"
                      />
                      <span class="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span class="ml-1 font-normal">
                        Buổi chiều 12:00 - 18:00
                      </span>
                    </span>
                  </label>
                  <label class="ant-checkbox-wrapper mt-2">
                    <span class="ant-checkbox">
                      <input
                        type="checkbox"
                        class="ant-checkbox-input"
                        value="4"
                      />
                      <span class="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span class="ml-1 font-normal">
                        Buổi tối 18:00 - 24:00
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="divide"></div>
              <div class="p-4">
                <span>Loại xe</span>
                <div class="mt-4 flex flex-wrap gap-2">
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Ghế
                  </div>
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Giường
                  </div>
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Limousine
                  </div>
                </div>
              </div>
              <div class="divide"></div>
              <div class="p-4">
                <span>Hàng ghế</span>
                <div class="mt-4 flex flex-wrap gap-2">
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Hàng đầu
                  </div>
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Hàng giữa
                  </div>
                  <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Hàng cuối
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full flex-col">
            <div class="hidden text-xl font-medium sm:block">
              An Nhơn - TP. Hồ Chí Minh (2)
            </div>
            <div class="header-popover-custom sm:hidden">
              <div class="relative flex h-14 w-full items-center text-[17px] font-medium">
                <img
                  class="absolute left-6 z-40"
                  src="./images/icons/back.svg"
                  alt="back"
                />
                <span class="w-full text-center">
                  An Nhơn - TP. Hồ Chí Minh (2)
                  <br />
                  <span class="text-[13px] font-normal">Thứ 5, 14/09</span>
                </span>
                <img
                  class="absolute right-4 z-40"
                  src="./images/icons/edit_filter.svg"
                  alt="open filter"
                />
              </div>
            </div>
            <div class="flex w-full gap-3 overflow-y-auto bg-[#F7F7F7] p-3 sm:mt-3 sm:bg-white sm:p-0">
              <div class="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm icon-orange border-[#FCDACE] bg-[#FEF6F3] text-orange">
                {/* <IconPrice /> */}
                Giá rẻ bất ngờ
              </div>
              <div class="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm icon-orange border-[#FCDACE] bg-[#FEF6F3] text-orange">
                <img
                  src="./images/icons/clock.svg"
                  alt="icon"
                  width="20"
                  height="20"
                />
                Giờ khởi hành
              </div>
              <div class="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm border-[#DDE2E8] bg-white sm:bg-[#F9F9FA]">
                <img
                  src="./images/icons/seat.svg"
                  alt="icon"
                  width="20"
                  height="20"
                />
                Ghế trống
              </div>
            </div>
            {dataSchedule.map((trip) => {
              return <Schedule_card key={trip.id} trip={trip} />;
            })}

            {/* <div class="mb-2 flex w-full flex-col border border-[#DDE2E8] bg-white p-3 pb-4 sm:mb-6 sm:rounded-xl sm:p-6">
              <div class="flex items-center justify-between gap-8">
                <span>17:30</span>
                <div class="flex w-full items-center">
                  <img src="./images/icons/pickup.svg" alt="pickup" />
                  <span class="flex-1 border-b-2 border-dotted"></span>
                  <span class="text-center leading-4">
                    14 giờ <br />
                    <span class="text-[13px]">(Asian/Ho Chi Minh)</span>
                  </span>
                  <span class="flex-1 border-b-2 border-dotted"></span>
                  <img src="./images/icons/station.svg" alt="station" />
                </div>
                <span>07:30</span>
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
                  <span class="text-[15px] font-medium">Bến xe An Sương</span>
                  <br />
                  <span class="text-gray mt-2"></span>
                </div>
              </div>
              <div class="text-yellow mt-1 text-[13px] sm:w-1/2">
                <span class="underline">Lưu ý</span>: Quý Khách đang chọn tuyến
                xe có lộ trình đi Cao tốc Phan Thiết Dầu Giây. Lưu ý không nhậ
                <span class="ml-1 cursor-pointer lowercase">
                  <span class="text-orange">...Xem thêm</span>
                </span>
              </div>
              <div class="divide my-3 sm:my-4"></div>
              <div class="flex items-center justify-between">
                <div class="text-gray flex items-center gap-2 text-sm">
                  <span class="text-orange">285.000đ</span>
                  <div class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span>Giường</span>
                  <div class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span class="text-orange">30 chỗ trống</span>f{" "}
                  <span class="cursor-pointer text-blue-400 underline">
                    Chọn ghế
                  </span>
                </div>
                <Link to="/product-cart">
                  <button
                    type="button"
                    class="ant-btn ant-btn-round ant-btn-default button-default hidden sm:block"
                    fdprocessedid="fv7b3s"
                  >
                    <span>Chọn chuyến</span>
                  </button>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
