import React from "react";
import Layout from "@/ui/Layout";
import {
  header,
  headerWrapper, headerWrapperMb,
  infoItem,
  infoItem_icon,
  infoItem_text,
  infoItem_title,
  infoItems,
  logo,
  wallet,
  warning
} from "@/componets/Header/style";
import { Icon } from "@/ui/Icon";
import Link from "@/ui/Link";
import Title from "@/ui/Title";

const Header: React.FC = () => {
  return (
    <Layout.Main className={header}>
      <Layout.Wrapper className={headerWrapper}>
        <Icon name={"wallet-img"} className={wallet} />

        <div className={headerWrapperMb}>
          <Link
            href={"https://www.kamkombank.ru/"}
            target={"_blank"}
            className={logo}
          >
            <Icon name={"logo"} />
          </Link>

          <Title.H1>Выгодный обмен валюты</Title.H1>

          <div className={infoItems}>
            <div className={infoItem}>
              <Icon name={"currency-icon"} className={infoItem_icon} />
              <div>
                <span className={infoItem_title}>$ ¥ £ € CNY AED</span>
                <span className={infoItem_text}>Всегда в наличии</span>
              </div>
            </div>

            <div className={infoItem}>
              <Icon name={"check-icon"} className={infoItem_icon} />
              <div>
                <span className={infoItem_title}>Забронируйте сейчас</span>
                <span className={infoItem_text}>Гарантия покупки</span>
              </div>
            </div>
          </div>

          <span className={warning}>Бронирование дейсвтует 1 час</span>
        </div>
      </Layout.Wrapper>
    </Layout.Main>
  );
};

export default Header;
