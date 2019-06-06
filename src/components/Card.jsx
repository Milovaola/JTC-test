import React from "react";
import "../css/characters.css";

export const Card = ({
  image,
  name,
  status,
  species,
  gender,
  origin,
  location,
  classNameCard,
  classNameCardInfo
}) => (
  <div className={classNameCard}>
    <img src={image} alt={name} />

    <div className={classNameCardInfo}>
      <table>
        <tbody>
          <tr>
            <th>ИМЯ</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>СТАТУС</th>
            <td>{status}</td>
          </tr>
          <tr>
            <th>ВИД</th>
            <td>{species}</td>
          </tr>
          <tr>
            <th>ПОЛ</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>ОТКУДА РОДОМ</th>
            <td>{origin && origin.name}</td>
          </tr>
          <tr>
            <th>ГДЕ НАХОДИТСЯ СЕЙЧАС</th>
            <td>{location && location.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
