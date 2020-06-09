describe("Chat", () => {
  before(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("1.0 Get data file", () => {
    cy.get("input[id=contained-button-file]")
      .click({ force: true })
      .wait(1000)
      .uploadFile("Scatterplot/payparkingstations.csv", "application/csv");

    cy.contains("Can you tell us more about this dataset?").should(
      "be.visible"
    );
    cy.get("div")
      .contains("div", "Which columns contain longitudes?")
      .find('[name="Longitude"]')
      .check()
      .wait(500);

    cy.get("div")
      .contains("div", "Which columns contain latitudes?")
      .find('[name="Latitude"]')
      .check()
      .wait(500);

    cy.get("div")
      .contains("div", "Can you tell us more about this dataset?")
      .within(($form) => {
        cy.get("button")
          .should("be.visible")
          .trigger("mouseover")
          .wait(500)
          .click()
          .wait(500);
      });

    cy.get(".MuiBox-root-338").within(($form) => {
      cy.get(".MuiButtonBase-root")
        .first()
        .trigger("mouseover")
        .wait(500)
        .click()
        .wait(500);
    });
    cy.get('[aria-labelledby="longitude-label"]').click().wait(500);

    cy.get('[aria-labelledby="longitude-label"]').within(($form) => {
      cy.get('[data-value="22"]')
        .contains("li", "Longitude")
        .trigger("mouseover")
        .click()
        .wait(500);
    });

    cy.get('[aria-labelledby="latitude-label"]').click().wait(500);

    cy.get('[aria-labelledby="latitude-label"]').within(($form) => {
      cy.get('[data-value="21"]')
        .contains("li", "Latitude")
        .trigger("mouseover")
        .wait(500)
        .click()
        .wait(500);
    });

    cy.get(".makeStyles-button-349")
      .trigger("mouseover")
      .wait(500)
      .click()
      .wait(500);
  });
});
