import React from "react";
import {
  BarChart,
  XAxis,
  Bar,
} from "recharts";
import './OverviewScreenStyle.css';

const OverviewScreen = () => {
  const data = [
    { name: "Jan", users: 100, color: "grey" },
    { name: "Feb", users: 150, color: "grey" },
    { name: "March", users: 60, color: "grey" },
    { name: "April", users: 50, color: "grey" },
    { name: "May", users: 110, color: "grey" },
    { name: "June", users: 90, color: "grey" },
    { name: "July", users: 78, color: "grey" },
    { name: "Aug", users: 93, color: "grey" },
    { name: "Sep", users: 56, color: "grey" },
    { name: "Oct", users: 121, color: "blue" },
    { name: "Nov", users: 132, color: "grey" },
    { name: "Dec", users: 90, color: "grey" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div className="overview_container_screen">
        <div className="overview_top_container">
          <div className="text_container">
            <h2 className="main_text">Overview</h2>
            <h3 className="sub_text">Monthly Earning</h3>
          </div>
          <div className="select_field_container">
            <select className="select_field">
              <option value="">Last 1 month</option>
              <option value="">Last 2 month</option>
              <option value="">Last 3 month</option>
            </select>
          </div>
        </div>
       
        <BarChart
          width={900}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 20 }}
            axisLine={false}
            tickLine={false}
          />
      
          <Bar dataKey="users" fill="#e5e4e4" radius={10}>
            {data.map((entry, index) => (
              <Bar
                key={index}
                dataKey="users"
                fill={entry.color === "blue" ? "blue" : "grey"}
                radius={entry.color === "blue" ? [12, 12, 12, 12] : [10, 10, 10, 10]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default OverviewScreen;


