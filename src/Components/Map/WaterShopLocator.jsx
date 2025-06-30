import React, { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

// Water droplet icon
const waterIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35]
});

// Blue user location icon
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/64/64113.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30]
});

// Initial water shops
const initialShops = [
  {
    id: 1,
    name: "HydroPure Water Shop",
    address: "Connaught Place, Delhi",
    lat: 28.6315,
    lng: 77.2167
  },
  {
    id: 2,
    name: "AquaFresh Outlet",
    address: "Sector 18, Noida",
    lat: 28.5708,
    lng: 77.3260
  },
  {
    id: 3,
    name: "BlueDrop Supply",
    address: "Karol Bagh, Delhi",
    lat: 28.6519,
    lng: 77.1913
  }
];

// Search control
function GeocoderControl() {
  const map = useMap();
  useEffect(() => {
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: true
    })
      .on("markgeocode", function (e) {
        const bbox = e.geocode.bbox;
        const bounds = L.latLngBounds(
          [bbox.getSouthEast().lat, bbox.getSouthEast().lng],
          [bbox.getNorthWest().lat, bbox.getNorthWest().lng]
        );
        map.fitBounds(bounds);
      })
      .addTo(map);
    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);
  return null;
}

// Component to get user location
function UserLocationMarker({ setUserPosition }) {
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setUserPosition(e.latlng);
    });
  }, [map, setUserPosition]);

  return null;
}

// Component to allow adding custom markers
function AddMarkerOnClick({ onAddMarker }) {
  useMapEvents({
    click(e) {
      const name = prompt("Enter shop name:");
      if (name) {
        onAddMarker({
          id: Date.now(),
          name,
          address: "Custom Location",
          lat: e.latlng.lat,
          lng: e.latlng.lng
        });
      }
    }
  });
  return null;
}

export default function WaterShopLocator() {
  const [shops, setShops] = useState(initialShops);
  const [userPosition, setUserPosition] = useState(null);
  const mapRef = useRef();

  // Track open popup to close on new selection
  const [activeShopId, setActiveShopId] = useState(null);

  // Pan map and open popup when a shop is clicked in list
  const onShopClick = (shop) => {
    if (!mapRef.current) return;

    mapRef.current.setView([shop.lat, shop.lng], 15, {
      animate: true
    });

    setActiveShopId(shop.id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full p-4  min-h-[600px]">
      {/* Map section */}
      <div className="flex-1 min-w-[300px] z-40  h-[400px] md:h-[600px]">
        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
          whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <GeocoderControl />
          <UserLocationMarker setUserPosition={setUserPosition} />
          <AddMarkerOnClick
            onAddMarker={(newShop) => setShops((prev) => [...prev, newShop])}
          />

          {/* User location marker */}
          {userPosition && (
            <Marker position={userPosition} icon={userIcon}>
              <Popup>You are here</Popup>
            </Marker>
          )}

          {/* Water shop markers */}
          {shops.map((shop) => (
            <Marker
              key={shop.id}
              position={[shop.lat, shop.lng]}
              icon={waterIcon}
              eventHandlers={{
                click: () => setActiveShopId(shop.id)
              }}
            >
              {activeShopId === shop.id && (
                <Popup
                  position={[shop.lat, shop.lng]}
                  onClose={() => setActiveShopId(null)}
                >
                  <strong>{shop.name}</strong>
                  <br />
                  {shop.address}
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* List section */}
      <div className="w-full md:w-80 max-h-[600px] overflow-y-auto border border-gray-300 rounded-md p-4 bg-white">
        <h3 className="text-xl font-semibold mb-4 text-center">Stores List</h3>
        {shops.length === 0 && (
          <p className="text-center text-gray-500">No shops available.</p>
        )}
        <ul>
          {shops.map((shop) => (
            <li
              key={shop.id}
              className="cursor-pointer mb-3 p-3 rounded-md hover:bg-blue-50 transition"
              onClick={() => onShopClick(shop)}
            >
              <p className="font-semibold text-[#0077B6]">{shop.name}</p>
              <p className="text-sm text-gray-600">{shop.address}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
