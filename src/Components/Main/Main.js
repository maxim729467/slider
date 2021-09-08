import React from "react";
import Background from "Components/Background";
import Container from "Components/Container";
import Form from "Components/Form";

export default function Main() {
  return (
    <main>
      <Background styleClassName="MainBackground">
        <Container>
          <section className="Form-block">
            <h1 className="Form-block__title">Cracker Pack</h1>
            <Form />
          </section>
        </Container>
      </Background>
    </main>
  );
}
