import React from "react";
import { Link } from "react-router-dom";

function Faq() {

  const faqs = [
    {
      question: "Where is Sabarmati Gandhi Ashram located?",
      answer:
        "Sabarmati Gandhi Ashram is located in Ahmedabad, Gujarat. It was the residence of Mahatma Gandhi and played an important role in India's freedom movement."
    },
    {
      question: "Why is the Taj Mahal famous?",
      answer:
        "The Taj Mahal in Agra is one of the Seven Wonders of the World. It was built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal."
    },
    {
      question: "What is special about Chhatrapati Shivaji Maharaj Terminus?",
      answer:
        "Located in Mumbai, this historic railway station is a UNESCO World Heritage Site known for its beautiful Victorian Gothic architecture."
    },
    {
      question: "Where is Laxmi Vilas Palace located?",
      answer:
        "Laxmi Vilas Palace is located in Vadodara, Gujarat. It is one of the largest private residences in the world and was built by the Gaekwad royal family."
    },
    {
      question: "Why is Konark Sun Temple important?",
      answer:
        "Konark Sun Temple in Odisha is famous for its unique chariot-shaped architecture dedicated to the Sun God and is a UNESCO World Heritage Site."
    },
    {
      question: "What is the historical significance of the Red Fort?",
      answer:
        "Red Fort in Delhi was the main residence of Mughal emperors for about 200 years and is a symbol of India's independence."
    },
    {
      question: "What are the Hoysala Temples known for?",
      answer:
        "Hoysala Temples in Karnataka are famous for their intricate stone carvings and star-shaped architectural style."
    },
    {
      question: "Why is Hawa Mahal called the Palace of Winds?",
      answer:
        "Hawa Mahal in Jaipur has 953 small windows called jharokhas that allow cool air to pass through, keeping the palace naturally ventilated."
    },
    {
      question: "What is Nalanda Mahavihara?",
      answer:
        "Nalanda Mahavihara in Bihar was one of the world's first residential universities and an important center of learning in ancient India."
    }
  ];

  return (
    <div>

      {/* Inner Banner */}
      <section className="w3l-inner-banner-main">
        <div className="banner-9">
          <div className="wrapper">
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to={"/"}>
                  Home <span className="fa fa-angle-right" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <a href="#pages">
                  Pages <span className="fa fa-angle-right" aria-hidden="true" />
                </a>
              </li>
              <li className="active">FAQ</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w3l-text-28-main">
        <div className="text-28">
          <div className="wrapper">

            <div className="text-styles-top-28">
              <h3>Heritage Sites FAQs</h3>

              <div className="d-grid">

                {faqs.map((faq, index) => (
                  <div className="faq-drawer" key={index}>

                    <input
                      className="faq-drawer__trigger"
                      id={`faq${index}`}
                      type="checkbox"
                    />

                    <label
                      className="faq-drawer__title"
                      htmlFor={`faq${index}`}
                    >
                      <h6 className="title">{faq.question}</h6>
                    </label>

                    <div className="faq-drawer__content-wrapper">
                      <div className="faq-drawer__content">
                        <p className="text-text">{faq.answer}</p>
                      </div>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Faq;