import React, { useState } from 'react';

const CarpetStore = () => {
  // State для хранения параметров ковра
  const [width, setWidth] = useState(1); // Ширина ковра
  const [height, setHeight] = useState(1); // Высота ковра
  const [color, setColor] = useState('red'); // Цвет ковра

  // Базовая стоимость за единицу площади
  const costPerSquareMeter = 100; // Стоимость за 1 м²

  // Рассчитываем стоимость ковра
  const calculatePrice = () => width * height * costPerSquareMeter;

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Магазин ковров</h1>
      
      {/* Настройка размеров ковра */}
      <div className="mb-4">
        <label className="block mb-2">Ширина ковра (м):</label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          min="1"
          className="border rounded p-2 w-full"
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-2">Высота ковра (м):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
          min="1"
          className="border rounded p-2 w-full"
        />
      </div>

      {/* Настройка цвета ковра */}
      <div className="mb-4">
        <label className="block mb-2">Цвет ковра:</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="red">Красный</option>
          <option value="blue">Синий</option>
          <option value="green">Зелёный</option>
          <option value="yellow">Жёлтый</option>
          <option value="black">Чёрный</option>
        </select>
      </div>

      {/* Отображение ковра */}
      <div
        className="border mb-4"
        style={{
          width: `${width * 50}px`,
          height: `${height * 50}px`,
          backgroundColor: color,
        }}
      ></div>

      {/* Итоговая стоимость */}
      <div className="text-xl font-bold">
        Итоговая стоимость: {calculatePrice()} ₽
      </div>
    </div>
  );
};

export default CarpetStore;