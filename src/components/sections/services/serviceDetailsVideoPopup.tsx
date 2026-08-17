// src/components/sections/services/serviceDetailsVideoPopup.tsx
import React, { useState } from "react";

const ServiceDetailsVideoPopup: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [videoError, setVideoError] = useState<boolean>(false);

  const videoPath = "/img/project/bangalore_video.mp4";
  const imagePath = "/img/project/Bangalore_metro_image.jpg";

  const handleOpenVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setVideoError(false);
    setOpen(true);
  };

  return (
    <>
      <div className="video-thumb">
        <img
          src={imagePath}
          alt="Video thumbnail"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "10px",
          }}
        />
        <div className="video-box">
          <a
            href="#"
            onClick={handleOpenVideo}
            className="video-btn ripple video-popup"
          >
            <i className="fa-solid fa-play" />
          </a>
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "-50px",
                right: "0px",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "40px",
                cursor: "pointer",
                lineHeight: 1,
                zIndex: 100000,
              }}
            >
              &times;
            </button>

            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "10px",
                backgroundColor: "#000",
              }}
            >
              {!videoError ? (
                <video
                  controls
                  autoPlay
                  muted
                  onError={() => setVideoError(true)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px",
                  }}
                >
                  <source src={videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000",
                    color: "#fff",
                    flexDirection: "column",
                  }}
                >
                  <i
                    className="fa-solid fa-video-slash"
                    style={{ fontSize: "48px", marginBottom: "20px" }}
                  ></i>
                  <p>Unable to load video</p>
                  <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    Path: {videoPath}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetailsVideoPopup;
