import { useEffect, useState } from 'react';
import { data } from './data';
import Video from './Video';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(data);
    }, []);

    const eliminar = () => {
        let nuevoEstado = videos.filter(video => video.id!==1);
        setVideos(nuevoEstado);
    }

    return (
        <>
        <button onClick={eliminar}>Eliminar Video 1</button>
        {
            videos.map((video) => 
              <Video
                key={video.id}
                title={video.title}
                dateAdded={video.dateAdded}
                channel={video.channel}
                thumbnail={video.thumbnail}
                description={video.description}
              />
            )
        }
        </>
    );
}

export default VideoContainer;