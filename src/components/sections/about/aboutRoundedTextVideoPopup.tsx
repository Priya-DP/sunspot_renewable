import React, { useState } from "react";

const AboutRoundedTextVideoPopup: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="video-box">
        <a
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            setOpen(true);
          }}
          className="video-buttton video-popup"
        >
          <i className="fa-solid fa-play" />
          <img
            src="/img/about/circle-text.png"
            alt="text-img"
            className="text-circle"
          />
        </a>
      </div>

      {/* Video Modal Popup */}
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
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "900px",
            }}
          >
            {/* Close Button */}
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

            {/* 16:9 Video Wrapper */}
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
              <video
                src="/img/about/about-video.mp4"
                controls
                autoPlay
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutRoundedTextVideoPopup;
