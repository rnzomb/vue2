describe('Check storage', function() {
  it('storage', function() {
    cy.visit('http://localhost:8080/')
    cy.contains('Add Page').click()
    cy.url().should('include', '/add')
    let r = Math.random().toString(36).substring(3)
    cy.get('#firstName')
      .type(r)
    cy.get('#Date').click()

    cy.get('.vdp-datepicker__calendar')

    cy.get('span.cell.day').contains(18).click()
    cy.get('#formSubmit').click() 

    



    
  
  
 
  

   

  })
})