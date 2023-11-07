import { MdArrowUpward } from "react-icons/md";
import data from "../../database/Soundcharts.json";
import React from "react";
import { getPlatformData } from "../../utils/getPLatformData";

const Index = () => {
  const arr = Array(8).fill(0);
  const params = new URLSearchParams(window.location.search);
  const artist = params.get("artist");
  const [filteredData, setFilteredData] = React.useState<any>();
  const [genreList, setGenreList] = React.useState<any>();
  const [platformList, setPlatformList] = React.useState<any>();

  return (
    <div className="detail-main">
      <div className="detail-container">
        <div className="detail-sub-container-1">
          <div className="detail-card">
            <img
              style={{
                width: "100%",
                aspectRatio: 16 / 13,
                borderRadius: "0.25rem",
              }}
              src="/photo.png"
              alt="Artist profile pic"
            />

            <div className="card-detail-container">
              <div className="card-detail-header">
                <p style={{ fontSize: "2rem" }}>{filteredData?.artist}</p>
              </div>

              <div className="card-detail-tag-main">
                <p className="label">Country</p>
                <div className="tag"></div>
              </div>

              <div className="card-detail-tag-main">
                <p className="label">Genre</p>
                <div className="card-detail-tag-container "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-sub-container-2">
          <div className="detail-about-container"></div>

          <div className="detail-performance-container">
            <div className="header-border-box">
              <p className="label">Performance</p>
            </div>
            <div className="detail-performance-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
