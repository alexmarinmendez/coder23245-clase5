import React, { useEffect, useState } from "react";

const Video = ({ thumbnail, title, dateAdded, channel, description }) => {
    const [valoraciones, setValoraciones] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log('useEffect');
    });

    const increment = () => {
        // valoraciones += 1;
        setValoraciones(valoraciones+1);
    }

    const changeVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className="video-container">
            <div className="video-image">
              <img src={thumbnail} alt={title} />
            </div>
            <div className="video-info">
              <h3>{title}</h3>
              <p>{valoraciones} estrellas</p>
              <button onClick={increment}>Valorar</button>
              <button onClick={changeVisible}>Cambiar Visibilidad</button>

              <p>Upload date: {dateAdded}</p>
              <h4>Channel's Title: {channel}</h4>
              <p>{description}</p>
            </div>
        </div> 
    );
}

export default Video;