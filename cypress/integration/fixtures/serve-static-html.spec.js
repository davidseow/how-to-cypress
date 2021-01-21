describe("fixtures", () => {
  it("can serve static html", () => {
    cy.visit("cypress/fixtures/static/");
    cy.get("h1").should("contain.text", "Test page");
  });
});
