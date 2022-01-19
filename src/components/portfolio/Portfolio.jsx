import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import ManPaintLadder from '../../assets/images/man-paint-ladder.jpg';
import PortfolioList from '../portfolioList/PortfolioList';
import {
  featuredPortfolio,
  webPortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data';
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
      id: 'insudtrial',
      title: 'Insudtrial',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'interior':
        setData(featuredPortfolio);
        break;
      case 'exterior':
        setData(webPortfolio);
        break;
      case 'commercial':
        setData(designPortfolio);
        break;
      case 'industrial':
        setData(contentPortfolio);
        break;

      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Recent Work</h1>
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
            {/* <h3>{item.title}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
