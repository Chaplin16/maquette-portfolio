import { useEffect,useState } from 'react';

//function pour faire apparaitre a interval de 7s la deuxieme video puis inversement 7s plus tard
export default function Video() {
    const [source, setSource] = useState('video-pour-sous-traitance-dev.mp4');


useEffect(() => {
    const video = document.getElementById('video');
    setInterval(() => {
        if (source === 'video-pour-sous-traitance-dev-2.mp4')
            setSource('video-pour-sous-traitance-dev.mp4');
        else
            setSource('video-pour-sous-traitance-dev-2.mp4')
        video.load();
    }, 8200);
},[source]);

return (
    <video autoPlay muted id="video">
        <source src={`/video/${source}`} type="video/mp4"></source>
    </video>
)
}