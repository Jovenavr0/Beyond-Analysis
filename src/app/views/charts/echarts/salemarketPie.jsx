import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer,Cell } from "recharts";

const data = [
  { name: "Aliexpress", value: 3119.184534 },
  { name: "Ozon", value: 2235.482613  },
  { name: "Sber Market", value: 2059.778113 },
  { name: "Wildberries", value: 2959.58599  },
  { name: "Yandex Market", value: 5753.120166  },
];
const COLORS = ['#125fb3', '#9855ea', '#ea555d', '#a7ea55','#55eae2'];
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 20;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text fontSize={30} x={cx} y={cy} dy={8} textAnchor="middle" fill={"000000"}>
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
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Выручка ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={20} textAnchor={textAnchor} fill="#999">
        {`    (${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class PieSaLe extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si";

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div className="salePieMarket">
        <ResponsiveContainer width="100%" height="100%" aspect={2}>
          <PieChart width={600} height={600}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={140}
              outerRadius={180}
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
