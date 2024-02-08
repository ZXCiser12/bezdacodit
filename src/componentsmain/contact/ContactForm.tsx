import { MutableRefObject, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { PropagateLoader } from "react-spinners";
import ContactInput from "./ContactInput";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const ContactForm1 = () => {
  //const [acceptWithRules, setAcceptWithRules] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const formRef = useRef() as MutableRefObject<HTMLFormElement>;

  //const toggleAcceptWithRules = () => setAcceptWithRules(!acceptWithRules);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSpinner(true);
    emailjs
      .sendForm(
        "service_ox7yt0d",
        "template_4nfbq0p",
        formRef.current,
        "YJUurqXZph_46Uv98"
      )
      .then(
        (result) => {
          setSpinner(false);
          toast(`Данные отправлены ${result.text}`);
        },
        (error) => {
          setSpinner(false);
          toast.error(`Данные отправлены ${error.text}`);
        }
      );

    formRef.current.reset();
    //setAcceptWithRules(false);
  };

  return (
    <ContactFormContainer onSubmit={sendEmail} ref={formRef}>
      <ContactInput
        text="Ф.И.О.*"
        placeholder="Укажите ваши Ф.И.О."
        type="text"
        name="fullName"
      />
      <ContactInput
        text="Должность/компания"
        placeholder="Укажите вашу должность/компанию"
        type="text"
        name="company"
      />
      <ContactInput
        text="E-mail*"
        placeholder="Укажите ваш E-mail"
        type="email"
        name="email"
      />
      <ContactInput
        text="Телефон*"
        placeholder="Укажите ваш телефон"
        type="tel"
        name="phone"
      />
      <Button>
        {spinner ? <PropagateLoader color="#fff" /> : "Отправить заявку"}
      </Button>

      <CheckboxLabel>
        <CheckboxInput type="checkbox" />
        <CheckboxSpan />
        <CheckboxText>
          Нажимая на кнопку «Отправить заявку», я соглашаюсь с{" "}
          <Link href="/dashboard" passHref legacyBehavior>
            <CheckboxLink>Политикой конфиденциальности</CheckboxLink>
          </Link>{" "}
          и даю{" "}
          <Link legacyBehavior href="/page4" passHref>
            <CheckboxLink>
              Согласие на обработку персональных данных.
            </CheckboxLink>
          </Link>
        </CheckboxText>
      </CheckboxLabel>
    </ContactFormContainer>
  );
};
export default ContactForm1;

const Button = styled.button`
  width: 100%;
  min-height: 57px;
  margin: 0;
  margin-bottom: 43px;
  padding: 0;
  padding: 16px 36px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 22px;
  background: radial-gradient(
    142.65% 2282.99% at 100% -31.65%,
    #00c9fc 0%,
    #1a46ef 56.36%
  );
  border-radius: 4px;
  color: #f2f2f2;

  @media all and (max-width: 675px) {
    font-size: 16px;
  }

  &:hover {
    background: radial-gradient(
      142.65% 2282.99% at 100% -31.65%,
      #08a6ce 0%,
      #6352b1 43.75%,
      #8b0eb7 68.75%
    );
  }

  &:disabled {
    cursor: auto;
    opacity: 0.5;
    background: radial-gradient(
      142.65% 2282.99% at 100% -31.65%,
      #00c9fc 0%,
      #1a46ef 56.36%
    );
  }
`;

const CheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const CheckboxSpan = styled.span`
  margin-right: 12px;
`;

const CheckboxText = styled.span`
  user-select: none;
  font-family: "Lato";
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #b7bfd1;

  @media all and (max-width: 800px) {
    font-size: 14px;
  }
`;

const CheckboxLink = styled.a`
  color: #0caed5;
`;

const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  @media all and (max-width: 675px) {
    margin-top: 40px;
  }
`;
