// основная страница видео

const VideoPage = () => {
   return (
      <>
            <iframe
               src="https://www.youtube.com/embed/I1hLZ2OchZ8"
               frameBorder="0" width="100%" height="315px"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               allowFullScreen
            />
      </>
   );
}

export default VideoPage;