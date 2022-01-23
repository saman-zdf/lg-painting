import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { interior, exterior, commercial, industrial } from '../../data';
const Portfolio = () => {
  const [selected, setSelected] = useState('interior');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'interior',
      title: 'Interior',
    },
    {
      id: 'exterior',
      title: 'Exterior',
    },
    {
      id: 'commercial',
      title: 'Commercial',
    },
    {
      id: 'industrial',
      title: 'Industrial',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'interior':
        setData(interior);
        break;
      case 'exterior':
        setData(exterior);
        break;
      case 'commercial':
        setData(commercial);
        break;
      case 'industrial':
        setData(industrial);
        break;

      default:
        setData(interior);
        break;
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Our Works</h1>
      <div className='divider'></div>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className='container'>
        {data.map((item) => (
          <div className='item' key={item.id}>
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
