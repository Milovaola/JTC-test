import React from "react";

export const Location = ({
  header,
  name,
  typeLocation,
  type,
  dimension,
  residents,
  created
}) => (
  <div className="location">
    <h3>{header}</h3>
    <ul>
      <li>
        Наименование планеты:
        {name}
      </li>
      {{ typeLocation } ? (
        <>
          <li>Тип планеты: {type}</li>
          <li>Измерение: {dimension}</li>
          <li>Жители: </li>
          <div>{residents}</div>
          <li>Создано: {created}</li>
        </>
      ) : (
        <>НЕТ ДАННЫХ</>
      )}
    </ul>
  </div>
);
