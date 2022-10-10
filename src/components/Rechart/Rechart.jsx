import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Rechart.css";

const Rechart = () => {
  const data = [
    {
      name: "Page A",
      marks: 4000,
      quiz: 2400,
      avg: 2400,
    },
    {
      name: "Page B",
      marks: 3000,
      quiz: 1398,
      avg: 2210,
    },
    {
      name: "Page C",
      marks: 2000,
      quiz: 9800,
      avg: 2290,
    },
    {
      name: "Page D",
      marks: 2780,
      quiz: 3908,
      avg: 2000,
    },
    {
      name: "Page E",
      marks: 1890,
      quiz: 4800,
      avg: 2181,
    },
    {
      name: "Page F",
      marks: 2390,
      quiz: 3800,
      avg: 2500,
    },
    {
      name: "Page G",
      marks: 3490,
      quiz: 4300,
      avg: 2100,
    },
  ];
  return (
    <div className="rechart pt-10">
      <div>
        <LineChart
          width={500}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="quiz" stroke="#8884d8" />
          <Line type="monotone" dataKey="marks" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Rechart;
