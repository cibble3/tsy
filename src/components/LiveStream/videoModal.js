import React from 'react'
import { Modal } from 'react-bootstrap'
import { IoCloseSharp } from 'react-icons/io5'
import styles from "./live-stream.module.css"
import useWindowSize from '@/hooks/useWindowSize'
const VideoModal = ({ show, onHide }) => {
    const { width, height } = useWindowSize();

    return (
        <Modal
            show={show ? true : false}
            {...{ onHide }}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdropClassName={styles.backdrop}
        // className={styles.modalView}
        >
            <div style={{ position: "relative" }}>
                <video width="100%" height={height / 2} autoplay src={show} onLoad={(e) => e.target.play()} muted controls style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 10, right: 10 }}>
                    <IoCloseSharp color="#282828" size={25} onClick={() => onHide(false)} />

                </div>
            </div>

        </Modal>
    )
}

export default VideoModal