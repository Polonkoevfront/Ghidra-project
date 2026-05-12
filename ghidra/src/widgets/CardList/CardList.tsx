import React from 'react';
import cls from './CardList.module.scss';
import { CardItem } from '../../entities/card/ui';
import { Text } from '../../shared/ui';
import { Product } from '../../entities/card/types/types';

import arrow_left from '../../shared/assets/svg/chevron_left.svg';
import arrow_right from '../../shared/assets/svg/chevron_right.svg';
import big_arrow from '../../shared/assets/svg/big_arrow.svg';

export const CardList = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isCurrent, setIsCurrent] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 650);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 650);
    window.addEventListener('resize', handleResize);

    fetch('http://localhost:1080/api/products').then((res) =>
      res
        .json()
        .then((data: Product[]) => {
          console.log(data);
          setProducts(data);
        })
        .catch((err) => {
          console.log('error', err);
        }),
    );

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setIsCurrent((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  if (products.length === 0) return null;

  return (
    <div className={cls.cards_bar}>
      <div className={cls.list_head}>
        <div className={cls.list_title}>
          <Text>WHY BUILD</Text>
          <div>
            <Text fw={300}>WHY HYDRA?</Text>
            <img src={big_arrow} alt="" />
          </div>
        </div>
        <div className={cls.list_desc}>
          <span>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat
          </span>
          <span>
            nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris
            commodo
          </span>
          <span>
            quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet
            tellus. Ornare
          </span>
          <span>
            lectus sit amet est placerat in. Lectus magna fringilla urna
            porttitor rhoncus vitae.
          </span>
        </div>
      </div>
      <div className={cls.cards_list}>
        {isMobile ? (
          <>
            <div className={cls.chevron}>
              <img onClick={prevSlide} src={arrow_left} alt="" />
            </div>
            <div className={cls.slider}>
              <CardItem
                key={products[isCurrent].id}
                title={products[isCurrent].title}
                description={products[isCurrent].desc}
                description2={products[isCurrent].desc2}
                description3={products[isCurrent].desc3}
                imageUrl={products[isCurrent].imageUrl}
              />
            </div>
            <div className={cls.chevron}>
              <img onClick={nextSlide} src={arrow_right} alt="" />
            </div>
          </>
        ) : (
          products.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              description={item.desc}
              description2={item.desc2}
              description3={item.desc3}
              imageUrl={item.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};
