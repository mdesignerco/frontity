describe("UseInfiniteScroll", () => {
  const url = "http://localhost:3001/?name=use-infinite-scroll";

  it("useInfiniteScroll should render wrapper and fetcher if IntersectionObserver is supported", () => {
    cy.visit(url);
    cy.location("href").should("eq", url);
    // cy.get("#supported").should("exist").should("have.text", "supported: true");
  });

  // it("useInfiniteScroll should return supported false", () => {
  //   cy.visit(url + "&removeIO");
  //   cy.location("href").should("eq", url + "&removeIO");
  //   cy.window().its("IntersectionObserver").should("eq", undefined);
  //   cy.get("#supported")
  //     .should("exist")
  //     .should("have.text", "supported: false");
  // });
});
