describe("visit", () => {
  it("can navigate to page via POST method", () => {
    const name = "johnny";

    cy.visit({
      url: "http://tryphp.w3schools.com/demo/demo_global_post.php",
      method: "POST",
      body: {
        fname: name,
      },
    });
    cy.get("body").should("contain.text", name);
  });
});
