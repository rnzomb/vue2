
describe('My First Test', function() {
  it('clicks the link "type"', function() {
    cy.visit('http://localhost:8080/')

    //Add Page
    cy.contains('Add Page').click()

    cy.url().should('include', '/add')

    cy.get('#firstName')
      .type('Hello')
      .should('have.value', 'Hello')
    
    cy.get('#Date')
    .type('2005-02-02')
    .should('have.value', '2005-02-02')

    cy.get('#formSubmit').click()
    //home
    cy.url().should('include', '/')

    cy.get('#app')
    .contains('Hello')

    //.pause()
    //Add Page
    cy.visit('http://localhost:8080/')

    cy.contains('Add Page').click()

    cy.url().should('include', '/add')

    cy.get('#firstName')
      .type('Hello%')
    
    cy.contains('Length from 3 to 10')

    cy.get('div').find('div.invalid-feedback')

    cy.get('#firstName').next('div.invalid-feedback')

    //profile
    cy.contains('Profile').click()
    cy.url().should('include', '/profile')

    cy.wait(500)
    cy.get('#firstName')
      .type('hhhhhhhh$^')

    cy.get('#firstName').next('div.invalid-feedback')

    cy.get('#Age')
      .type('4444')

    cy.get('#Age').next('div.invalid-feedback')

    cy.get('#phoneNumber')
      .type('hhhh')

    cy.get('#phoneNumber').next('div.invalid-feedback')
    
    // request 
    cy.server()
    cy.route('GET', 'https://reqres.in/api/users')
    .its('status').should('eq', 200)
    
  })
})