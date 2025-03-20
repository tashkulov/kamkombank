import React, { useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import {
  container,
  faqItem,
  question,
  questionActive,
  answer,
  iconWrapper,
  iconPlus,
  questionText,
} from "@/componets/FAQ/style";

const faqData = [
  {
    question: "Фиксируется ли курс при бронировании валюты?",
    answer: `Нет, курс не фиксируется. Он зависит от официального курса Центрального банка и может изменяться в течение дня.

При этом мы всегда стараемся предлагать один из самых выгодных курсов среди банков.

Перед совершением операции уточняйте актуальный курс на табло в офисах Банка или на этом сайте.`,
  },
  {
    question: "Можно ли оплатить покупку валюты картой?",
    answer: `Нет, оплата валюты осуществляется только наличными.`,
  },
  {
    question: "Какие документы нужны для обмена валюты?",
    answer: `Паспорт гражданина РФ или иной документ, удостоверяющий личность.`,
  },
  {
    question: "Как понять, что мою бронь подтвердили?",
    answer: `Вам придет SMS-уведомление или звонок от менеджера.`,
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout.Container>
      <Title.H2>Ответы на частые вопросы</Title.H2>

      <div className={container}>
        {faqData.map((item, index) => (
          <div key={index} className={faqItem}>
            <div
              className={`${question} ${
                openIndex === index ? questionActive : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className={questionText}>{item.question}</span>

              <span
                className={`${iconWrapper} ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <span
                  className={`${iconPlus} ${openIndex === index ? "open" : ""}`}
                >
                  +
                </span>
              </span>
            </div>

            {openIndex === index && (
              <div className={answer}>
                {item.answer.split("\n").map((line, i) => (
                  <p key={i} style={{ marginBottom: "8px" }}>
                    {line.trim()}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout.Container>
  );
};

export default FAQ;
