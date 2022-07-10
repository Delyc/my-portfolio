import React, { useState, useEffect } from "react";
import start from "../../assets/start.png";
import end from "../../assets/end.png";
import me from "../../assets/me.jpeg";
import GiveTestimony from "../../modals/GiveTestimony";
import giveTestimony from "../../assets/givetestimony.png";
import axiosBase from "../../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function Testimony() {
  const [openModal, setOpenModal] = useState(false);
  const [testimony, setTestimony] = useState();
  useEffect(() => {
    const getTestimony = async () => {
      try {
        const res = await axiosBase.get("/testimony");
        setTestimony(res.data.data);
        console.log("testimony", res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTestimony();
  }, []);
  return (
    <div id="testimony">
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div>
          {testimony ? (
            <div className="">
              {testimony.map((test, index) => (
                <SwiperSlide key={index}>
                  <p>
                    {" "}
                    <img src={start} alt="" />{" "}
                    {test.message}{" "}
                    <img src={end} alt="" />
                  </p>
                  <div>
                    {/* <img src={test.banner} alt="" /> */}
                    <div >
                      <h3>{test.empname}</h3>
                      <p>{test.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          ) : (
            <p> n projects </p>
          )}
        </div>
      </Swiper>

      <button
        onClick={() => {
          setOpenModal(true);
        }}
        className="give-testimony"
      >
        <img src={giveTestimony} alt="" /> Give testimony
      </button>
      {openModal && <GiveTestimony closeModal={setOpenModal} />}
    </div>
  );
}

export default Testimony;
