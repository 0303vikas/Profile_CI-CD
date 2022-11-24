describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login',{ headers: { "Accept-Encoding": "gzip, deflate" } })
    cy.login('dropi','dropidropi')    
    cy.wait(1000)


  })

  
  it('Add Page can be accepted ', () => {
    cy.visit('http://localhost:3000/add', { headers: { "Accept-Encoding": "gzip, deflate" } })
    cy.get('.navigation').find('li').eq(1).click()
    cy.get('.formdiv').should('be.visible')

    cy.get('.formdiv').find('input[type=file]').each(($el) => cy.wrap($el).selectFile('cypress/fixtures/image1.png',{force: true}))
    

    cy.get('.formdiv').find('button').click()
    cy.wait(8000)
   
  })

 
})