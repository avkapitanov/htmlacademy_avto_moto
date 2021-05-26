import React from "react";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {MAP_ICON_OPTIONS, MAP_OFFICE_COORDINATES, MAP_OFFICE_ZOOM} from "../../constants";

const ProductContacts = () => {
  return (
    <div className="product-card__tabs-content tab-contacts">
      <div className="tab-contacts__info">
        <div className="tab-contacts__info-item">
          <p className="tab-contacts__info-item-title">Адрес</p>
          <address className="tab-contacts__info-item-value">Санкт-Петербург,<br/>
          набережная реки Карповки, дом 5</address>
        </div>
        <div className="tab-contacts__info-item">
          <p className="tab-contacts__info-item-title">Режим работы</p>
          <span className="tab-contacts__info-item-value">Ежедневно, с 10:00 до 21:00</span>
        </div>
        <div className="tab-contacts__info-item">
          <p className="tab-contacts__info-item-title">Телефон</p>
          <a className="tab-contacts__info-item-value" href="tel:88003335599">
            8 (800) 333-55-99
          </a>
        </div>
        <div className="tab-contacts__info-item">
          <p className="tab-contacts__info-item-title">E-mail</p>
          <a className="tab-contacts__info-item-value" href="mailto:info@avto-moto.ru">
            info@avto-moto.ru
          </a>
        </div>
      </div>
      <YMaps >
        <Map className="tab-contacts__map" defaultState={{center: MAP_OFFICE_COORDINATES, zoom: MAP_OFFICE_ZOOM, controls: []}}>
          <Placemark
            geometry={MAP_OFFICE_COORDINATES}
            options={MAP_ICON_OPTIONS}/>
        </Map>
      </YMaps>
    </div>

  );
};

export default ProductContacts;
