import { mount } from "cypress/react";
import { Counter } from "../components/Counter";

describe("Counter", () => {
  it("mounts correctly", () => {
    mount(<Counter />);
  });
  it("Counter should start at 0", ()=>{
    mount(<Counter/>)
    const stepperSelector = '[data-testid=stepper]'
    cy.get(stepperSelector).should('contain.text', 0)
  })
  it("can be incremented", ()=>{
    mount(<Counter/>)
    const incrementSelector = '[aria-label=increment]'
    const stepperSelector = '[data-testid=stepper]'
    cy.get(incrementSelector).click()
    cy.get(stepperSelector).should('contain.text', 1)
  })
  it("can be decremented", ()=>{
    mount(<Counter/>)
    const decrementSelector = '[aria-label=decrement]'
    const stepperSelector = '[data-testid=stepper]'
    cy.get(decrementSelector).click()
    cy.get(stepperSelector).should('contain.text', -1)
  })
});
