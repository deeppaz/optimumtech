import React, { useState, useEffect, Fragment } from "react";

export default function YoutubeFetchVideo() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRYOj4DmyxhBVrdvbsUwmAA&maxResults=6&order=date&key=AIzaSyCctfkCcWrtIQhZGk2D5FW60Q7WcX3deIo"
      );
      const json = await res.json();
      setData(json.items);
      setIsLoading(false);
    };
    fetchData();
  }, [setData]);

  return (
    <>
      {isLoading ? (
        <h1 className="asection" style={{fontWeight:"bolder"}}>Loading ...</h1>
      ) : (
        <div className="asection">
          <div className="container-fluid">
            <div className="row">
              {data.map((item, index) => (
                <div className="col-md-6" style={{ paddingBottom: "15px" }}>
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
      )}
    </>
  );
}
