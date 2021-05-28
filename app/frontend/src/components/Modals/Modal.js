import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Modal.css";

const Modal = props => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    const [value, onChange] = useState(new Date());

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            {" "}
                            &times;{" "}
                        </button>
                    </header>
                    {/* TODO: 달력 넣어야함 */}
                    <main>
                        <Calendar onChange={onChange} value={value} selectRange={false}></Calendar>
                    </main>
                    <footer>
                        <button className="close" onClick={close}>
                            {" "}
                            close{" "}
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};
export default Modal;
