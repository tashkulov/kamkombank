import React from "react";
import Layout from "@/ui/Layout";
import {
  header,
  headerWrapper,
  headerWrapperMb,
  infoItem,
  infoItem_icon,
  infoItem_text,
  infoItem_title,
  infoItems,
  logo,
  phone,
  subheader,
  wallet,
  warning,
} from "@/componets/Header/style";
import { Icon } from "@/ui/Icon";
import Link from "@/ui/Link";
import Title from "@/ui/Title";
import clx from "classnames";

const Header: React.FC = () => {
  return (
    <>
      <Layout.Main>
        <Layout.Wrapper className={subheader}>
          <Link
            href={"https://www.kamkombank.ru/"}
            target={"_blank"}
            className={logo}
          >
            <Icon name={"logo"} />
          </Link>

          <Link href={"tel:88002004638"} target={"_blank"} className={phone}>
            <Icon name={"phone-icon"} width={24} height={24} />
            <span>8 800 200 46 38</span>
          </Link>
        </Layout.Wrapper>
      </Layout.Main>

    </>
  );
};

export default Header;
