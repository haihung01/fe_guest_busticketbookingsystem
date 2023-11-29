import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import ScheduleCard from "../UI/schedule-card/schedule_card";
import { dataSchedule } from "../data/dataSchedule";
import IconPrice from '../assets/icon/price-tag-svgrepo-com.svg'
import { useSelector } from 'react-redux';
import IconCheapPrice from '../assets/img/dollar-coin-stack-svgrepo-com.svg'
import IconClock from '../assets/img/clock-three-svgrepo-com.svg'
import IconEmptySeat from '../assets/img/child-seat-for-the-car-svgrepo-com.svg'


const Schedule = () => {
  const tripData = useSelector((state) => state.tripReducer.tripData); // Assuming tripReducer is your reducer name
  const searchCompleted = useSelector((state) => state.tripReducer.searchCompleted);

  console.log("hehe111", tripData)
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
              <div className="p-4">
                <span>Giờ đi</span>
                <div
                  className="ant-checkbox-group checkbox-group-custom"
                  style={{ display: "grid" }}
                >
                  <label className="ant-checkbox-wrapper mt-2">
                    <span className="ant-checkbox">
                      <input
                        type="checkbox"
                        className="ant-checkbox-input"
                        value="1"
                      />
                      <span className="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span className="ml-1 font-normal">
                        Sáng sớm 00:00 - 06:00{" "}
                      </span>
                    </span>
                  </label>
                  <label className="ant-checkbox-wrapper mt-2">
                    <span className="ant-checkbox">
                      <input
                        type="checkbox"
                        className="ant-checkbox-input"
                        value="2"
                      />
                      <span className="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span className="ml-1 font-normal">
                        Buổi sáng 06:00 - 12:00
                      </span>
                    </span>
                  </label>
                  <label className="ant-checkbox-wrapper mt-2">
                    <span className="ant-checkbox">
                      <input
                        type="checkbox"
                        className="ant-checkbox-input"
                        value="3"
                      />
                      <span className="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span className="ml-1 font-normal">
                        Buổi chiều 12:00 - 18:00
                      </span>
                    </span>
                  </label>
                  <label className="ant-checkbox-wrapper mt-2">
                    <span className="ant-checkbox">
                      <input
                        type="checkbox"
                        className="ant-checkbox-input"
                        value="4"
                      />
                      <span className="ant-checkbox-inner"></span>
                    </span>
                    <span>
                      <span className="ml-1 font-normal">
                        Buổi tối 18:00 - 24:00
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="divide"></div>
              <div className="p-4">
                <span>Loại xe</span>
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Ghế
                  </div>
                  <div className="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Giường
                  </div>
                  <div className="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">
                    Limousine
                  </div>
                </div>
              </div>
              <div className="divide"></div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="hidden text-xl font-medium sm:block">
              {tripData[0]?.name}
            </div>
            <div className="header-popover-custom sm:hidden">
              <div className="relative flex h-14 w-full items-center text-[17px] font-medium">
                <img
                  className="absolute left-6 z-40"
                  src="./images/icons/back.svg"
                  alt="back"
                />
                <span className="w-full text-center">
                  An Nhơn - TP. Hồ Chí Minh (2)
                  <br />
                  <span className="text-[13px] font-normal">Thứ 5, 14/09</span>
                </span>
                <img
                  className="absolute right-4 z-40"
                  src="./images/icons/edit_filter.svg"
                  alt="open filter"
                />
              </div>
            </div>
            <div className="flex w-full gap-3 overflow-y-auto bg-[#F7F7F7] p-3 sm:mt-3 sm:bg-white sm:p-0">
              <div className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm icon-orange border-[#FCDACE] bg-[#FEF6F3] text-orange">
                <img
                  src={IconCheapPrice}
                  alt="icon"
                  width="20"
                  height="20"
                />
                Giá rẻ bất ngờ
              </div>
              <div className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm icon-orange border-[#FCDACE] bg-[#FEF6F3] text-orange">
                <img
                  src={IconClock}
                  alt="icon"
                  width="20"
                  height="20"
                />
                Giờ khởi hành
              </div>
              <div className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border px-4 py-1 text-sm border-[#DDE2E8] bg-white sm:bg-[#F9F9FA]">
                <img
                  src={IconEmptySeat}
                  alt="icon"
                  width="20"
                  height="20"
                />
                Ghế trống
              </div>
            </div>

            {/* {tripData && tripData.map((trip) => {
              return <ScheduleCard key={trip.id} trip={trip} />;

            })} */}
            {searchCompleted && tripData.length === 0 ? (
              <p>Not found the trip at Schedule</p>
            ) : (
              <div>
                {/* Your existing JSX to display the schedule */}
                {tripData && tripData.map((trip) => {
                  return <ScheduleCard key={trip.id} trip={trip} />;
                })}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
