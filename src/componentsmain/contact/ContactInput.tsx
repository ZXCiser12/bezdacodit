import styled from "styled-components";

const FormLable = styled.label`
  display: block;
  margin-bottom: 34px;
  @media all and (max-width: 1080px) {
    margin-bottom: 26px;
  }
`;

const FormLableText = styled.span`
  display: block;
  margin-bottom: 8px;
  font-family: "Lato";
  font-weight: 600;
  font-size: 20px;
  color: #f2f2f2;

  @media all and (max-width: 1080px) {
    font-size: 18px;
    font-weight: 500;
  }

  @media all and (max-width: 675px) {
    font-size: 16px;
  }
`;

const ContactFormLabelInput = styled.input`
  font-family: "Lato";
  font-weight: 400;
  font-size: 22px;
  padding-top: 6px;
  padding-left: 22px;
  width: 100%;
  height: 76px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background-color: transparent;

  @media all and (max-width: 1080px) {
    height: 58px;
    padding-left: 11px;
  }

  @media all and (max-width: 675px) {
    height: 50px;
  }
`;

interface IContactInput {
  type: string;
  text: string;
  placeholder: string;
  name: string;
}

const ContactInput = ({ type, text, placeholder, name }: IContactInput) => (
  <FormLable>
    <FormLableText>{text}</FormLableText>
    <ContactFormLabelInput
      type={type}
      placeholder={placeholder}
      name={name}
      required
    />
  </FormLable>
);

export default ContactInput;
