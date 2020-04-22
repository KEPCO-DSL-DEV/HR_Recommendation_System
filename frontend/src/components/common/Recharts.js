import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Sector,
  LineChart,
  Line,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';

const barData = [
  {
    name: 'Group A',
    major: 500,
    amt: 100,
  },
  {
    name: 'Group B',
    major: 400,
    amt: 100,
  },
  {
    name: 'Group C',
    major: 300,
    amt: 100,
  },
  {
    name: 'Group D',
    major: 100,
    amt: 100,
  },
  {
    name: 'Group E',
    major: 50,
    amt: 100,
  },
  {
    name: 'Group F',
    major: 20,
    amt: 100,
  },
  {
    name: 'Group G',
    major: 10,
    amt: 100,
  },
];

export const SimpleBar = ({ fillColour }) => {
  //const jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
  return (
    <BarChart
      width={500}
      height={300}
      data={barData}
      margin={{
        top: 5,
        right: 30,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis />
      <YAxis />
      <Tooltip />

      <Bar dataKey="major" fill={fillColour} />
      {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
    </BarChart>
  );
};

const eduLevels = [
  { name: '학사', value: 40 },
  { name: '고졸', value: 30 },
  { name: '석사', value: 20 },
  { name: '박사', value: 10 },
];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`비율 ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export const ActivePieChart = () => {
  const [activeIndex, setState] = useState(0);

  const onPieEnter = (data, index) => {
    setState(index);
  };

  return (
    <PieChart width={500} height={340}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={eduLevels}
        cx={250}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#383D59"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

const lineData = [
  {
    name: '학교',
    g1: 80,
    g2: 70,
  },
  {
    name: '어학',
    g1: 90,
    g2: 80,
  },
  {
    name: '교육',
    g1: 60,
    g2: 20,
  },
  {
    name: '자격증',
    g1: 95,
    g2: 85,
  },
  {
    name: 'MBO',
    g1: 98,
    g2: 90,
  },
];

export const SimpleLineChart = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={lineData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="g2"
        stroke="#C7D93D"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="g1" stroke="#BF3056" />
    </LineChart>
  );
};

const ability = [
  {
    subject: '학력',
    R1: 80,
    R2: 90,
    fullMark: 100,
  },
  {
    subject: '학교',
    R1: 90,
    R2: 90,
    fullMark: 100,
  },
  {
    subject: '전공',
    R1: 95,
    R2: 70,
    fullMark: 100,
  },
  {
    subject: '어학',
    R1: 70,
    R2: 60,
    fullMark: 100,
  },
  {
    subject: '교육',
    R1: 30,
    R2: 40,
    fullMark: 100,
  },
  {
    subject: '자격증',
    R1: 90,
    R2: 70,
    fullMark: 100,
  },
];

export const AbilityChart = () => {
  return (
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={90}
      width={300}
      height={300}
      data={ability}
      margin={'auto'}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="계열 1"
        dataKey="R1"
        stroke="#027373"
        fill="#027373"
        fillOpacity={0.2}
      />
      <Radar
        name="계열 2"
        dataKey="R2"
        stroke="#F2B705"
        fill="#F2B705"
        fillOpacity={0.2}
      />
      <Legend margin={'auto'} />
    </RadarChart>
  );
};
