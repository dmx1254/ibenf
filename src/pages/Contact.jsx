import React from "react";
import { BsTelephone, BsChatLeftDots } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Contact = () => {
  const { language } = useSelector((state) => state.language);
  return language === "anglais" ? (
    <div className="contact">
      <div className="contact-header">
        <h1>Contact Us!</h1>
        <p>We are available Monday to Saturday from 10 am to 1 am.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>By telephone</h3>
          <p>
            Call us on:{" "}
            <a
              href="tel:+44 1273 90 1262"
              style={{
                color: "#333333",
              }}
            >
              +44 1273 90 1262
            </a>{" "}
            (The whole week, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>By online chat</h3>
          <p>
            Ask all your questions by clicking on the chat button at the bottom
            left of each page.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>By e-mail</h3>
          <p>
            Write to us on the email address:
            <br></br>
            <a
              href="mailto:contact@ibendouma.com"
              style={{
                color: "#333333",
              }}
            >
              contact@ibytrade.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-input">
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
          ></textarea>
        </div>
        <input type="submit" value="Send" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          By using this website, you accept{" "}
          <Link to="/term-and-conditions" className="contact-link">
            the Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link to="/privacy-policy" className="contact-link">
            he Privacy Policy{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, ibytrade.All rights are reserved to
          ibytrade Limited.
          <br></br>
          Address: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  ) : language === "espagnol" ? (
    <div className="contact">
      <div className="contact-header">
        <h1>Contacta con nosotras!</h1>
        <p>Estamos disponibles de lunes a s??bado de 10 am a 1 am.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>Por tel??fono</h3>
          <p>
            Ll??manos:{" "}
            <a
              href="tel:+44 1273 90 1262"
              style={{
                color: "#333333",
              }}
            >
              +44 1273 90 1262
            </a>{" "}
            (Toda la semana, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>Por chat en l??nea</h3>
          <p>
            Haga todas sus preguntas haciendo clic en el bot??n de chat en la
            parte inferior izquierda de cada p??gina.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>Por correo electr??nico</h3>
          <p>
            Escr??banos a la direcci??n de correo electr??nico:
            <br></br>
            <a
              href="mailto:contact@ibendouma.com"
              style={{
                color: "#333333",
              }}
            >
              contact@ibytrade.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-input">
          <div>
            <label htmlFor="email">Correo electr??nico</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
          ></textarea>
        </div>
        <input type="submit" value="Send" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          Al utilizar este sitio web, usted acepta{" "}
          <Link to="/term-and-conditions" className="contact-link">
            los t??rminos y condiciones
          </Link>{" "}
          y{" "}
          <Link to="/privacy-policy" className="contact-link">
            la pol??tica de privacidad{" "}
          </Link>
          derechos de autor &copy; 2020-
          {new Date().getFullYear()}, ibytrade.Todos los derechos est??n
          reservados a ibytrade Limited.
          <br></br>
          Direcci??n: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  ) : (
    <div className="contact">
      <div className="contact-header">
        <h1>CONTACTEZ-NOUS</h1>
        <p>Nous sommes disponible du lundi au samedi de 10h ?? 1h du matin.</p>
      </div>
      <div className="contact-main">
        <div>
          <span>
            <BsTelephone />
          </span>
          <h3>Par telephone</h3>
          <p>
            Appellez nous au:{" "}
            <a
              href="tel:+44 1273 90 1262"
              style={{
                color: "#333333",
              }}
            >
              +44 1273 90 1262
            </a>{" "}
            (Toute la semaine, 24h/24){" "}
          </p>
        </div>
        <div>
          <span>
            <BsChatLeftDots />
          </span>
          <h3>Par chat</h3>
          <p>
            Posez-nous toutes vos questions en cliquant sur le chat en bas ??
            gauche de chaque page.
          </p>
        </div>
        <div>
          <span>
            <AiOutlineMail />
          </span>
          <h3>Par mail</h3>
          <p>
            Ecrivez-nous sur l'adresse mail<br></br>
            <a
              href="mailto:contact@ibendouma.com"
              style={{
                color: "#333333",
              }}
            >
              contact@ibytrade.com
            </a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <div className="contact-form-input">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Votre adresse email"
            />
          </div>

          <textarea
            className="area"
            placeholder="Ecrivez votre message..."
          ></textarea>
        </div>
        <input type="submit" value="Envoyer" className="send" />
      </form>
      <div className="contact-footer">
        <p>
          En utilisant ce site, vous acceptez les termes et conditions ainsi que{" "}
          <Link to="/term-and-conditions" className="contact-link">
            les Termes & Conditions
          </Link>{" "}
          et{" "}
          <Link to="/privacy-policy" className="contact-link">
            la Politique de confidentialit??{" "}
          </Link>
          copyright &copy; 2020-
          {new Date().getFullYear()}, ibytrade.Tous les droits sont r??serv??s ??
          ibytrade Limited.
          <br></br>
          Adresse: 71-75 Shelton Street, Covent<br></br>
          Garden, Londres, WC2H9JQ
        </p>
      </div>
    </div>
  );
};

export default Contact;
