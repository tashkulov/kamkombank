import React from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import {
  container,
  step,
  stepNumber,
  stepText,
} from "@/componets/Steps/style";

const Steps: React.FC = () => {
  return (
    <Layout.Container>
      <Title.H2>Как обменять валюту?</Title.H2>

      <div className={container}>
        <div className={step}>
          <span className={stepNumber}>1</span>
          <span className={stepText}>Оставьте заявку</span>
        </div>
        <div className={step}>
          <span className={stepNumber}>2</span>
          <span className={stepText}>
            Дождитесь звонка с&nbsp;подтверждением
          </span>
        </div>
        <div className={step}>
          <span className={stepNumber}>3</span>
          <span className={stepText}>
            Посетите офис Камкомбанка и&nbsp;совершите обмен
          </span>
        </div>
      </div>
    </Layout.Container>
  );
};

export default Steps;
