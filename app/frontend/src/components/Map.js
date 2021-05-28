import React, { useState, useEffect } from "react";
import _ from "lodash";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import * as config from "../config/config.js";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

const storeList = [
    { name: "CU", location: [37.565964, 126.986574] },
    { name: "할리스", location: [37.564431, 126.986591] },
    { name: "세븐일레븐", location: [37.565188, 126.983238] },
    { name: "파리바게트", location: [37.564869, 126.98445] },
    { name: "스타벅스", location: [37.562003, 126.985829] },
];

const Mapbox = () => {
    const MAP_TOKEN = config.mapbox.key;

    const [selectedStore, setSelectedStore] = useState(null);

    const [viewport, setViewport] = useState({
        latitude: 37.5326,
        longitude: 127.024612,
        width: "100vw",
        height: "100vh",
        zoom: 12,
    });

    useEffect(() => {
        const mapResizeEvent = _.throttle(() => {
            setViewport(
                Object.assign(
                    {},
                    {
                        ...viewport,
                        width: `${window.innerWidth}px`,
                        height: `${window.innerHeight}px`,
                    }
                )
            );
        }, 2000);
        window.addEventListener("resize", mapResizeEvent);
        return () => {
            window.removeEventListener("resize", mapResizeEvent);
        };
    }, [viewport]);

    return (
        <div className="Mapbox">
            <ReactMapGL
                {...viewport}
                transitionDuration={100}
                mapboxApiAccessToken={MAP_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <div className="navi-control">
                    <NavigationControl />
                </div>
                {storeList.map((store, i) => (
                    <Marker key={i} latitude={store.location[0]} longitude={store.location[1]}>
                        <button className="btn-marker" onClick={() => setSelectedStore(store)} />
                    </Marker>
                ))}
                {selectedStore && (
                    <Popup
                        offsetLeft={10}
                        latitude={selectedStore.location[0]}
                        longitude={selectedStore.location[1]}
                        onClose={() => setSelectedStore(null)}
                    >
                        <div>{selectedStore.name}</div>
                    </Popup>
                )}
            </ReactMapGL>
        </div>
    );
};
export default Mapbox;
