describe('Google', () => {
    it('Search for university webpage and check university logo is present', () => {
        cy.visit("https://www.google.co.uk?&hl=en&lr=lang_en");
        cy.get('button').contains("Accept all").scrollIntoView().click();
        cy.get('input[title="Search"]').type("Caterury crist chuch university{enter}");
        cy.contains("canterbury.ac.uk").scrollIntoView().click();
        cy.get('#onetrust-accept-btn-handler').contains("Accept All Cookies").scrollIntoView().click();

        // * Hint: "Terms and Conditions" must be accepted - click the 'Accept All' button
        // * Perform a google search for canterbury christ church university (with a spelling mistake)
            // type text into the right input box?
        // * Check that `canterbury.ac.uk` is somewhere in the returned list of searches
        // * Follow the google search link to the main university webpage and check the logo is visible
            // * Hint: "Cookie Popup" will block your way. Your test should deal with these
    });
});
/*
* Run with
    * Local Headless: `npx cypress run --spec cypress/google.spec.cy.js`
    * Container Headless: `make cypress_cmd CYPRESS_CMD="run --spec cypress/example.spec.cy.js"`
* https://docs.cypress.io/api/commands/
    * `.visit("https://site")`
    * `.contains("text on webpage")`
    * `.click()`
    * `.type("the text you want to type{enter}")`
    * `.get('???')`
        * `.get('input[title="???"]')`
        * `.get('#id_of_element')`
        * `.get('img[alt="???"')`
    * `.should('be.visible')`
    * `.scrollIntoView()`
*/