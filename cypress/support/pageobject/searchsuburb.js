class searchsuburb{
    inputlocation(tempat){
        cy.get('#locatorTextSearch').type(tempat)
    }
    clicksearchbutton(){
        cy.get('.form__actions > .button').click()
    }
    clicksearchfilter(){
        cy.get('[value="type:store"]').click()
    }
}
export default searchsuburb