import React, { useState } from "react";
import Layout from "@/ui/Layout";
import Header from "@/componets/Header";
import Footer from "@/componets/Footer";
import Steps from "@/componets/Steps";
import { appContent } from "@/style";
import Booking from "@/componets/Booking";
import Benefits from "@/componets/Benefits";
import Modal from "@/ui/Modal";
import Title from "@/ui/Title";
import Confirm from "@/componets/Confirm";
import Thx from "@/componets/Thx";
const App = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isThx, setIsThx] = useState(false);
  return (
    <>
      {isConfirm && (
        <Confirm
          onSubmit={() => {
            setIsConfirm(false);
            setIsThx(true);
          }}
          onClose={() => {
            setIsConfirm(false);
          }}
        />
      )}
      {isThx && (
        <Thx
          onClose={() => {
            setIsThx(false);
          }}
        />
      )}
      <Header />

      <Layout.Main className={appContent}>
        <Booking
          onSubmit={() => {
            setIsConfirm(true);
          }}
        />
        <Steps />
        <Benefits />
        {/*<Footer />*/}
      </Layout.Main>
    </>
  );
};

export default App;
