import { useEffect,useState } from 'react';

//function pour faire apparaitre a interval de 7s la deuxieme video puis inversement 7s plus tard
export default function Video() {
    const [source, setSource] = useState('video-aurore-1.mp4');

    useEffect(() => {
        const video = document.getElementById('video');
        setInterval(() => {
            if (source === 'video-aurore-1.mp4')
                setSource('video-aurore-2.mp4');
            else
                setSource('video-aurore-1.mp4')
            video.load();
        }, 8200);
    },[source]);

    return (
        <video autoPlay muted id="video">
            <source src={`/video/${source}`} type="video/mp4"></source>
        </video>
    )
}