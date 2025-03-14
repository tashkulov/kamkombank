import React, { useEffect, useState } from "react";
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

const phoneNumbersBySource: { [key: string]: string } = {
  bankiros: "88001002618",
  banki_ru_msk: "88002009538",
  banki_ru_spb: "88002009638",
  banki_ru_kazan: "88002009738",
  banki_ru_nch: "88002004938",
  sravni: "88002008938",
  sravni_msk: "88002008938",
  sravni_spb: "88002008938",
  sravni_kazan: "88002008938",
  yandex_msk: "79582856003",
  yandex_spb: "79582856011",
  yandex_kazan: "79582856025",
  google_msk: "79582856017",
  gis_msk: "79582856001",
  rbc_msk: "79582856002",
  rbc_spb: "79582856004",
};

const defaultPhone = "88002004638";

const formatPhoneNumber = (number: string): string => {
  const digits = number.replace(/\D/g, "");

  if (digits.length !== 11) return number;

  return `${digits[0]} ${digits.slice(1, 4)} ${digits.slice(
    4,
    7,
  )} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
};
const Header: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState(defaultPhone);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("utm_source") || params.get("source");

    if (source && phoneNumbersBySource[source]) {
      setPhoneNumber(phoneNumbersBySource[source]);
      localStorage.setItem("utm_source", source);
    } else {
      const storedSource = localStorage.getItem("utm_source");
      if (storedSource && phoneNumbersBySource[storedSource]) {
        setPhoneNumber(phoneNumbersBySource[storedSource]);
      }
    }
  }, []);

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

          <Link href={`tel:${phoneNumber}`} target={"_blank"} className={phone}>
            <Icon name={"phone-icon"} width={24} height={24} />
            <span>{formatPhoneNumber(phoneNumber)}</span>
          </Link>
        </Layout.Wrapper>
      </Layout.Main>
    </>
  );
};

export default Header;
