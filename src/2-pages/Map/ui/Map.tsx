import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    MapContainer, Marker, Popup, TileLayer, useMapEvents,
} from 'react-leaflet';
import { classNames } from '6-shared/lib/classNames/classNames';
import s from './Map.module.scss';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  className?: string;
}

function LocationMarker() {
    const { t, i18n } = useTranslation('navbar');
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
        click() {
            map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>{t('You are here')}</Popup>
        </Marker>
    );
}

export function Map({ className }: MapProps) {
    const { t, i18n } = useTranslation('map');

    return (
        <div>
            {t('Map')}
            <MapContainer className={classNames(s.Map, {}, [className])} center={[51.505, -0.09]} zoom={10}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}
