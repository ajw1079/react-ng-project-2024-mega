const VideoAtm = ({ srcProp }) => {
  return (
    <video
      className="video-root"
      src={srcProp}
      autoPlay
      playsInline
      muted
      loop
    ></video>
  );
};
export default VideoAtm;
