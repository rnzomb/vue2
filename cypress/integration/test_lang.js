describe('My First Test', function() {
  it('lang!', function() {
    cy.visit('http://localhost:8080/')
    cy.contains('Users').click()
    cy.url().should('include', '/users')
    cy.contains('Russian').click()
    cy.get('h1').contains('Страница Пользователи')
    .should('be.visible') 

    cy.get('tr').children().eq(2)
    .contains('Э-мэйл')
    .should('have.text', 'Э-мэйл') 

    cy.get('.thead-light').find('tr')
    .should(($tr) => {
      if ($tr.length !== 1) {
        // you can throw your own errors
        throw new Error('Did not find 1 element')
      }

      const className = $tr[0].className

      if (className !== '') {
        throw new Error(`throw error" in ${className}`)
      }
    })

    cy.get('button.float-left').first().click()

    cy.get('#userDataSubmit').find('#firstName').click()
    cy.focused().should('have.id', 'firstName')
    cy.wait(1000)
    cy.get('#userDataSubmit').find('#email').click()
    cy.focused().should('have.id', 'email')

    cy.get('#lastName').focus()
    
  })
})