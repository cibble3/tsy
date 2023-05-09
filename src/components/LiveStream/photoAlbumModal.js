import React, { useState } from 'react'
import styles from "./live-stream.module.css"
import { IoCloseSharp } from 'react-icons/io5';
import image1 from "../../../public/pose.png"
import image2 from "../../../public/pose1.png"
import image3 from "../../../public/pose2.png"
import image4 from "../../../public/pose3.png"
import { Modal } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import useWindowSize from '@/hooks/useWindowSize';

const PhotoAlbumModal = ({ show, onHide }) => {
    const { width, height } = useWindowSize();
    const { selectedItem, setSelectedItem } = useState();
    const imagesArray = [
        image1, image2, image3, image4
    ]

    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',

        cursor: 'pointer',
    };
    return (
        <Modal
            show={show ? true : false}
            {...{ onHide }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdropClassName={styles.backdrop}
            className={styles.modalView}
        >
            <div style={{ position: "relative" }} className={styles.corouselView}>
                <Carousel showIndicators={false} showThumbs={false} showStatus={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={15} emulateTouch={true} showArrows={true}
                    renderArrowPrev={(onClickHandler, hasPrev, label) =>
                        hasPrev && (
                            <MdArrowBackIosNew onClick={onClickHandler} style={{ ...arrowStyles, left: 15 }} color='#ffffff' size={40} />
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext, label) =>
                        hasNext && (
                            <MdArrowForwardIos onClick={onClickHandler} style={{ ...arrowStyles, right: 15 }} color="#ffffff" size={40} />
                        )
                    }
                >
                    <div >
                        <img src={imagesArray[0]?.src} style={{ width: "100%", minHeight: 400, height: height / 1.5 }} />
                    </div>
                    <div >
                        <img src={imagesArray[1]?.src} style={{ width: "100%", minHeight: 400, height: height / 1.5 }} />
                    </div>
                    <div >
                        <img src={imagesArray[2]?.src} style={{ width: "100%", minHeight: 400, height: height / 1.5 }} />
                    </div>
                    <div >
                        <img src={imagesArray[3]?.src} style={{ width: "100%", minHeight: 400, height: height / 1.5 }} />
                    </div>
                </Carousel>
                <div style={{ position: "absolute", top: 10, right: 10 }}>
                    <IoCloseSharp color="#282828" size={25} onClick={() => onHide(false)} />

                </div>
            </div>

        </Modal>
    )
}
export default PhotoAlbumModal