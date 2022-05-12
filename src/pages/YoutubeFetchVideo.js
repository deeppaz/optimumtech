import React, { useState, useEffect } from "react";

export default function YoutubeFetchVideo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRYOj4DmyxhBVrdvbsUwmAA&maxResults=5&order=date&key=AIzaSyDNFi4LsFB8hls9ef2v_kxlc91U7utVDcU"
      );
      const json = await res.json();
      setData(json.items);
    };
    fetchData();
  }, [setData]);

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-3">
              <div className="embed-responsive embed-responsive-4by3">
                <div className="card" key={index}>
                  <div className="card-body">
                    <iframe
                      className="embed-responsive-item"
                      src={`https://www.youtube.com/embed/${item.id.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
