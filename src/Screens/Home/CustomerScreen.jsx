import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './CustomerScreenStyle.css'

const CustomerScreen = () => {
  const data = [
    { name: 'Last 1 month', users: 100, gradient: 'url(#gradient1)', startAngle: 0, endAngle: 0.1 },
    { name: 'Last 2 months', users: 250, gradient: 'url(#gradient2)', startAngle: 0.1, endAngle: 0.3 },
    { name: 'Last 3 months', users: 300, gradient: 'url(#gradient3)', startAngle: 0.3, endAngle: 0.5 },
    { name: 'Last 5 months', users: 480, gradient: 'url(#gradient4)', startAngle: 0.5, endAngle: 1 },
  ];

  const renderCustomizedLabel = ({ cx, cy }) => (
    <g>
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
        <tspan x={cx} dy="0" className="align_text_perc">65%</tspan>
        <tspan x={cx} dy="20" className="sub_text_span" style={{color:"#bebcbc"}}>Total new customers</tspan>
      </text>
    </g>
  );

  return (
    <div className='customer_screen_container'>
      <div className="text_header_customer">
        <h2 className='customer_text_prime'>Customers</h2>
        <h3 className='customer_text_span'>Customers buy products</h3>
      </div>
      <PieChart width={400} height={400}>
        <defs>
          <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#FF5733" />
            <stop offset="100%" stopColor="#FFC300" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#33FF57" />
            <stop offset="100%" stopColor="#C3FF00" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3377FF" />
            <stop offset="100%" stopColor="#00C3FF" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7A33FF" />
            <stop offset="100%" stopColor="#D100FF" />
          </linearGradient>
          </defs>
        <Pie
          dataKey="users"
          isAnimationActive={true}
          data={data}
          cx={180}
          cy={150}
          innerRadius={80}
          outerRadius={120}
          label={renderCustomizedLabel}
          labelLine={false}
          startAngle={40} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.gradient} />
          ))
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default CustomerScreen;
