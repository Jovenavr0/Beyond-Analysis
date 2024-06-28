import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dataSels = [
  {
    time: "2024-01-02",
    sells: 717.149996,
  },
  {
    time: "2024-01-04",
    sells: 345.360306,
  },
  {
    time: "2024-01-13",
    sells: 0.0,
  },
  {
    time: "2024-01-15",
    sells: 1354.055154,
  },
  {
    time: "2024-01-23",
    sells: 1530.707536,
  },
  {
    time: "2024-01-28",
    sells: 363.162678,
  },
  {
    time: "2024-01-30 ",
    sells: 0.0,
  },
];

export default class SaleInDay extends PureComponent {
  static demoUrl = "https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952";


   renderColorfulLegendText = (value, entry) => {
    const { color } = entry;
  
    return <span style={{ color }}>{value}</span>;
  };
  render() {
    return (
        
        <div className="lineChartBody">
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart
              data={dataSels}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="0" horizontal="true" vertical="" />
              <XAxis dataKey="time" />
              <YAxis />
              
              <Tooltip />
              <Line   name="Маркетплейс"  type="monotone" dataKey="sells" stroke="#0069d9" activeDot={{ r: 8 }} strokeWidth={5}  dot={{ stroke: '#022ba6', strokeWidth: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
  }
}
