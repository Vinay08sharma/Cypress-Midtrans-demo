/// <reference types="Cypress" />

describe('empty spec', () => {
  it('e2e testing for mindtrans demo site', () => {
    cy.visit('https://demo.midtrans.com/');
    cy.get("a.btn.buy").click();
    cy.get("input[type*='text']").eq(0).clear().type("vinay");
    cy.get("input[type*='email']").clear().type("abc@gmail.com");
    cy.get("input[type*='text']").eq(1).clear().type("1234567890");
    cy.get("input[type*='text']").eq(2).clear().type("Mumbai");
    cy.get("input[type*='text']").eq(3).clear().type("400101");
    cy.get("div.cart-checkout").click();
    // cy.getIframe().get("div.list-content").eq(0).click();
    cy.getIframe().find("div.list-content").eq(2).click();
    // cy.getIframe().find("div.card-number-input-container").type("4811111111111114");
    // cy.getIframe().find("#card-expiry").type("1230");
    // cy.getIframe().find("#card-cvv").clear().type("123");
    // cy.getIframe().find("div.promo-radio-input").eq(4).click();
    // cy.getIframe().find("button[type*='button']").click();
    // cy.get("iframe[title='3ds-iframe']").its('0.contentDocument.body').then(cy.wrap).find("input[type*='password']").clear().type("112233");
    // cy.get("div.trans-status span").should('have.text','Thank you for your purchase.');
    cy.getIframe().find("button.btn.full.primary").click();
    cy.get("div.trans-status span").should('have.text', "We've booked your payment.Please continue as instructed.");






  })
})
