import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import clx from "classnames";
import {
  container,
  faqItem,
  question,
  questionActive,
  answer,
  iconWrapper,
  questionText,
} from "@/componets/FAQ/style";
import { Icon } from "@/ui/Icon";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQ: React.FC = () => {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(
          "https://backbron.kamkombank.ru/v1/faq/index",
        );

        if (!response.ok) {
          throw new Error(`Ошибка при запросе: ${response.status}`);
        }

        // ✅ Получаем JSON напрямую!
        const data: FAQItem[] = await response.json();
        console.log("FAQ с сервера:", data);

        setFaqData(data);
      } catch (err) {
        console.error("Ошибка при запросе:", err);
        setError("Не удалось загрузить вопросы");
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return (
      <Layout.Container>
        <Title.H2>Ответы на частые вопросы</Title.H2>
        <p>Загрузка...</p>
      </Layout.Container>
    );
  }

  if (error) {
    return (
      <Layout.Container>
        <Title.H2>Ответы на частые вопросы</Title.H2>
        <p>{error}</p>
      </Layout.Container>
    );
  }

  return (
    <Layout.Container>
      <Title.H2>Ответы на частые вопросы</Title.H2>

      <div className={container}>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.id} className={faqItem}>
              <div
                className={clx(question, isOpen && questionActive)}
                onClick={() => toggleFAQ(index)}
              >
                <span className={clx(questionText, isOpen && "open")}>
                  {item.question}
                </span>

                <span className={clx(iconWrapper, isOpen && "open")}>
                  {isOpen ? (
                    <Icon name={"X-gray"} />
                  ) : (
                    <Icon name={"X-green"} />
                  )}
                </span>
              </div>

              {isOpen && (
                <div className={answer}>
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i} style={{ marginBottom: "8px" }}>
                      {line.trim()}
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Layout.Container>
  );
};

export default FAQ;
