"use client";
import Layout from "@/componentsmain/layout/layout"
import { Container } from "@/componentsmain/skills/skills";

export default function Page3 () {
    return(
        <Layout>
    <Container>
    <h1>Согласие на обработку персональных данных</h1>
    <p>Настоящим я даю согласие на обработку моих персональных данных компанией [название вашей компании] в соответствии с действующим законодательством в области защиты персональных данных. Данное согласие распространяется на следующие данные: фамилия, имя, отчество, дата рождения, адрес электронной почты, номер телефона, место работы, должность и другие данные, которые я свободно предоставляю и предоставлю в будущем компании [название вашей компании].</p>
    <p>Я подтверждаю, что предоставляемые данные являются моими собственными, и я принимаю полную ответственность за их достоверность. Я понимаю и соглашаюсь с тем, что мои персональные данные будут использоваться исключительно для выполнения оговоренных целей, таких как обратная связь, обработка заказов, информационная поддержка и улучшение качества предоставляемых услуг.</p>
    <p>Кроме того, я одобряю передачу моих персональных данных третьим лицам исключительно в целях, указанных выше, и только при условии соблюдения ими мер безопасности и конфиденциальности данных.</p>
    <p>Данное согласие действует бессрочно с момента его предоставления и может быть отозвано мною в любое время путем направления письменного уведомления компании [название вашей компании].</p>
    <p>Я также осведомлен о своем праве требовать уточнения, обновления или удаления своих персональных данных путем обращения в компанию [название вашей компании].</p>
    <p>Подпись: ___________________________________________ Дата: __________________</p>
    <p>Место подписания: ___________________________________________________</p>
    <p>Имя и подпись обязательны для подтверждения согласия на обработку персональных данных.</p>
);

    </Container>
    </Layout>
)}