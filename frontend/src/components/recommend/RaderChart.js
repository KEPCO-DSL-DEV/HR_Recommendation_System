import React from 'react';

import { RadarChart, CircularGridLines } from 'react-vis';

const DATA = [
  {
    학력: 20,
    학교: 20,
    전공: 30,
    어학: 25,
    자격증: 30,
  },
];

const DOMAIN = [
  { name: '학력', domain: [0, 40], tickFormat: t => t },
  { name: '학교', domain: [0, 40] },
  { name: '전공', domain: [0, 40] },
  { name: '어학', domain: [0, 40] },
  { name: '자격증', domain: [0, 40] },
];

function generateData() {
  return [
    Object.keys(DATA[0]).reduce((acc, key) => {
      acc[key] = DATA[0][key] + 5 * (Math.random() - 0.5);
      return acc;
    }, {}),
  ];
}

const AnimatedRadar = () => {
  const data = [...DATA];
  return (
    <div className="centered-and-flexed">
      <RadarChart
        animation
        data={data}
        domains={DOMAIN}
        style={{
          polygons: {
            stroke: '#ff8c00', //그래프 색깔 주황색
            fillOpacity: 0,
            strokeWidth: 3,
          },
          axes: {
            text: {
              opacity: 0, //범위 숫자
            },
          },
          labels: {
            textAnchor: 'middle',
          },
        }}
        margin={{
          left: 50,
          top: 50,
          bottom: 50,
          right: 50,
        }}
        tickFormat={t => ''}
        width={300}
        height={300}
      >
        <CircularGridLines
          style={{
            fill: 'white',
            fillOpacity: 0.4,
            backgroundColor: '#fff',
            opacity: 1,
            stroke: '#333333',
          }}
          tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
        />
      </RadarChart>
    </div>
  );
};

export default AnimatedRadar;
