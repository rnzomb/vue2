describe('My First Test', function() {
  it('lang!', function() {
    cy.visit('http://localhost:8080/')
    cy.contains('Add Page').click()
    cy.url().should('include', '/add')
  
   // cy.get('#firstName')
 //   .type('ghj')
    cy.wait(500)
    
    for (var i = 0; i < 5 ; i++) {
      cy.contains('Add Page').click()
      let r = Math.random().toString(36).substring(3)
      cy.get('#firstName')
      .type(r)

      cy.get('#Date').click()

      cy.get('.vdp-datepicker__calendar')
  
      var date = Math.floor(Math.random() * 10)
      cy.get('span.cell.day').contains(date).click()
      cy.get('#formSubmit').click()     
    }
  

   

  })
})