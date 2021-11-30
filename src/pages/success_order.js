import React from "react";
import { withLayout } from "../common/layout";

const SuccessOrder = () => (
  <section>
    <h1 className="success_header">Twoje zamówienie zostało przyjęte. Zostanie zrealizowane w wybranym przez Ciebie dniu.</h1>
  </section>
);

export default withLayout(SuccessOrder);