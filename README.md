How To Build :
1. Download Tools = Cypress
2. Connect Cypress with VSCode
3. Create folder Project and Open with VSCode
4. Create new folder in Project Folder on Cypress
5. Connect with Cypress and choose e2e and create new folder
6. Create new file format on e2e cypress and nodeJs name "spec.cy.js"
7. Create new file on e2e name "searchsuburb.js" for the class
8. Create new file on fixtures folder name "search.json" for data driven

* DONT FORGET TO INPUT THIS code because there are some Class and Data Driven *
import searchsuburb from "../../support/pageobject/searchsuburb" 
const searchinputan = require('../../fixtures/search.json')
  const Search = new searchsuburb()

STEP with write code:
1. Navigate to https://www.service.nsw.gov.au/  :
describe('Search', () => {
  const Search = new searchsuburb()
  it('Sydney 2000', () => {
    cy.visit('https://www.service.nsw.gov.au/')

2. Search for "Apply for a number plate"  :
cy.get('#homeautosuggestXQd-xtrTEWs > .form__text').type('Apply for a number plate')
    cy.get('[data-personalisation-type="default"] > .page-hero > .container > .page-hero__title > .form--hero-search-group > .form__actions > .button').click()

  Validate the navigation to appropriate page :
  cy.get('#page-title').should('contain', 'Search')

3. Click on Locate us button :
cy.get('.MobileButton__menu-Zf6a9LYPkd').click()
    cy.get('.MobileNav__list-FRBlsRWCmw > :nth-child(4) > .NavLink__link-M-HSy9SYcc').click()

4. Enter suburb "Sydney 2000" : ( I Make a class name "searchsuburb" in other file name : searchsuburb.js)
Search.inputlocation(searchinputan.lokasi1)
    //cy.get('#locatorTextSearch').type('Sydney 2000')
    Search.clicksearchbutton()

5. It should use service centre named as "Marrickville Service Centre" :
Search.clicksearchfilter()
    //cy.get('[value="type:store"]').click()
    cy.get(':nth-child(6) > .location__title').should('contain','Marrickville Service Centre')

6. Make above test as data-driven so that search items can be replaced with anything in step 4 and filtered result in Step 5 
Like “Sydney Domestic Airport 2020” and it should be having “Rockdale Service Centre” 
( I make a data driven name "searchinputan.lokasi with create other file on fixtures folder name "search.json")
Search.inputlocation(searchinputan.lokasi2)
    //cy.get('#locatorTextSearch').type('Sydney Domestic Airport 2020')
    Search.clicksearchbutton()
    //cy.get('.form__actions > .button').click()
    Search.clicksearchfilter()
    //cy.get('[value="type:store"]').click()
    cy.get(':nth-child(5) > .location__title').should('contain', 'Rockdale Service Centre')

HOW TO RUN :
1. Open the terminal and write " npm run test:Search" because the name of describe is "Search" or write on the terminal Project " npx cypress run"
2. Open the Cypress and choose Chrome/Firefox to run the test, and cypress automaticly direct to chorome/firefox to run the testing.
