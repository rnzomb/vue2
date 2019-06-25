describe('My First Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('http://localhost:8080/')

    cy.contains('Add Page').click()

    cy.url().should('include', '/add')

    cy.get('#firstName')
      .type('Hello')
      .should('have.value', 'Hello')
    
    cy.get('#Date')
    .type('2005-02-02')
    .should('have.value', '2005-02-02')

    cy.get('#formSubmit').click()

    cy.url().should('include', '/')

    cy.get('#app')
    .contains('Hello')

    .pause()

    cy.visit('http://localhost:8080/')

    cy.contains('Add Page').click()

    cy.url().should('include', '/add')

    cy.get('#firstName')
      .type('Hello%')
      .contains('Length from 3 to 10, with no scpecial characters')


      




    
  })
})