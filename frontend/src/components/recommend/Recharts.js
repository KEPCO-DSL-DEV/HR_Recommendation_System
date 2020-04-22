import React, { PureComponent, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Sector,
} from 'recharts';

const data = [
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
      data={data}
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

//export default SimpleBar;

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

  const onPieEnter = index => {
    setState({
      activeIndex: index,
    });
  };

  return (
    <PieChart width={500} height={364}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={eduLevels}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#383D59"
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};
