import React from "react";
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className={`popup ${props.trigger ? 'show-popup' : 'hide-popup'}`}>
            <div className="popup-inner">
                { props.children }
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Mostrar menos</button>
            </div>
        </div>
    ) : "";
}

export default Popup;
