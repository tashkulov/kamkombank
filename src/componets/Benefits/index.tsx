import React from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import { container, slide } from "@/componets/Benefits/style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from "@/ui/Icon";

const Benefits: React.FC = () => {
  return (
    <Layout.Container>
      <Title.H2>Преимущества обмена от Камкомбанка</Title.H2>

      <div className={container}>
        <div className={slide}>
          <Icon name={"ben-1-icon"} />
          <span>Выгодный курс</span>
        </div>
        <div className={slide}>
          <Icon name={"ben-2-icon"} />
          <span>Удобное резервирование валюты</span>
        </div>
        <div className={slide}>
          <Icon name={"ben-3-icon"} />
          <span>Широкий выбор валюты всегда в наличии</span>
        </div>
      </div>
    </Layout.Container>
  );
};

export default Benefits;
