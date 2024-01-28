import { Dialog } from "primereact/dialog";
import React from "react";
import { useState } from "react";
import ContactDialog from "../Dialog/ContactDialog";
import Project1 from "../Dialog/Projects/Project1";
import Project2 from "../Dialog/Projects/Project2";
import Project5 from "../Dialog/Projects/Project5";
import Project8 from "../Dialog/Projects/Project8";

const NeuroIntegrate = () => {
  const [visible, setVisible] = useState(false);
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project5, setProject5] = useState(false);
  const [project8, setProject8] = useState(false);
  return (
    <section className="integrate">
      <div className="dots">
        <img src="assets/images/Dot.svg" alt="dot" />
        <img src="assets/images/Dot.svg" alt="dot" />
      </div>
      <div className="integrate-wraps">
        <div className="topicwraps">
          <div className="heading">
            <h2>Интеграция нейросотрудника</h2>
            <div
              className="btn-p"
              onClick={() => setVisible(true)}
              title="Обсудить проект"
            >
              Обсудить проект
            </div>
          </div>
          <img src="assets/images/bot.png" alt="bot" className="bot-img" />
        </div>

        <div className="integrate-grid-wraps">
          <img
            src="assets/images/Ellipse1.png"
            alt="ball"
            className="ellipse1"
          />
          <div className="integrate-grid">
            <div className="integrate-card" onClick={() => setProject8(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/Automation.png"
                  alt="Automation"
                  className="icon"
                />
              </div>
              <h4>Автоматизация офисных задач</h4>
              <p>
                Разработка индивидуальных решений для автоматизации рутинных
                офисных задач, таких как учет времени, анализ и управление
                документооборотом, работа с данными в таблицах и другие
                административные функции.
                <br />
                <br />
                Данные решения могут быть легко интегрированы с популярными
                бизнес-платформами, включая 1С, Битрикс24 и AmoCRM, Microsoft
                Office, Google Docs и другими.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject1(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/Personalized.png"
                  alt="Personalized"
                  className="icon"
                />
              </div>
              <h4>Персонализированные чат-боты</h4>
              <p>
                Разработка и обучения чат ботов для выполнения специфических
                задач, таких как обработка заказов, предоставление информации о
                продуктах и услугах, а также решение стандартных запросов
                клиентов.
                <br />
                <br />
                Эти чат-боты могут интегрироваться с различными платформами
                (telegram, whatsapp, веб, мобильные приложения) чтоб
                обеспечивать бесперебойную поддержку 24/7.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject2(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/analytics.png"
                  alt="Analytics"
                  className="icon"
                />
              </div>
              <h4>Автоматизация аналитики и отчетности</h4>
              <p>
                Разработка и интеграция нейронных сетей, которые анализируют
                данные и документы компании и автоматически генерируют отчеты с
                заданной периодичностью.
                <br />
                <br />
                Наши системы могут анализировать большие объемы данных, выявлять
                скрытые тенденции, прогнозировать будущие тренды и предоставлять
                рекомендации по оптимизации бизнес-процессов.
              </p>
            </div>
            <div className="integrate-card" onClick={() => setProject5(true)}>
              <div className="icon-wraps">
                <img
                  src="assets/images/Generating.png"
                  alt="Generating"
                  className="icon"
                />
              </div>
              <h4>Генерация контента любого типа</h4>
              <p>
                Мы предлагаем услуги по автоматической генерации качественного
                контента, включая тексты, изображения и видеоматериалы.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        visible={visible}
        className="hide-sidebar-dialog"
        showHeader={false}
        position={"top"}
      >
        <ContactDialog setVisible={setVisible} />
      </Dialog>
      <Dialog
        visible={project8}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Project8 setProject8={setProject8} />
      </Dialog>
      <Dialog
        visible={project1}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Project1 setProject1={setProject1} />
      </Dialog>
      <Dialog
        visible={project2}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Project2 setProject2={setProject2} />
      </Dialog>
      <Dialog
        visible={project5}
        className="hide-sidebar-dialog"
        showHeader={false}
      >
        <Project5 setProject5={setProject5} />
      </Dialog>
    </section>
  );
};

export default NeuroIntegrate;
