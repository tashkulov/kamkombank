import React from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import {
  container,
  topBlock,
  grid,
  card,
  iconLarge,
  highlightText,
  badge,
  iconSmall1,
  iconSmall2,
  iconSmall3,
  badgeSecond,
  iconWrapper, iconLine,
} from "@/componets/Benefits/style";

import "swiper/css";
import { Icon } from "@/ui/Icon";

const Benefits: React.FC = () => {
  return (
    <Layout.MainBlock>
      <Title.H2>Почему нам доверяют</Title.H2>

      <div className={container}>
        <div className={topBlock}>
          <span className={highlightText}>
            1 место в номинации премии Банки.ру 2023г. “Курсы валют. <br />
            Лучшие условия обмена”
          </span>
          <Icon name="goldcup" className={iconLarge} />
          <Icon name="green-line" className={iconLine} />
        </div>

        <div className={grid}>
          <div className={card}>
            <p className={badge}>3 место</p>
            <div className={iconWrapper}>
              <Icon name="medal" className={iconSmall1} />
            </div>
            <span className={badgeSecond}>
              Лучшие обменники. Рейтинг Москвы
            </span>
          </div>
          <div className={card}>
            <p className={badge}>ТОП-10</p>
            <div className={iconWrapper}>
              <Icon name="ring-icon" className={iconSmall2} />
            </div>
            <span className={badgeSecond}>Рейтинга банков Сравни</span>
          </div>
          <div className={card}>
            <p className={badge}>4 место</p>
            <div className={iconWrapper}>
              <Icon name="camcom-wallet" className={iconSmall3} />
            </div>
            <span className={badgeSecond}>
              Народного рейтинга Банки.ру 2024 г.
            </span>
          </div>
        </div>
      </div>
    </Layout.MainBlock>
  );
};

export default Benefits;
