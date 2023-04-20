import 'cypress-file-upload';


const userName = 'test';
const password = 'test';

describe('WalletHub Profile Picture Testing', () => {
    it('Visit the profile website', () => {
        cy.visit('https://wallethub.com/home/settings/public-info');

        cy.get('[ng-if="!(expired_session || email_exists() || from_logout || captcha.needed || ispreql || isfromtasks)"]').should('exist');
    })

    // Login page
    it('Login testing', () => {
        cy.visit('https://wallethub.com/pi-request?dontsell=1');

        // Click on sinup/login button
        cy.get('.brgm-signup-login').click();

        // Email/Pass and Login Button
        cy.get('#email').type(userName);
        cy.get('#password').type(password)

        cy.get('.blue').click();

        // Wait time
        cy.wait(6000);

        // Go to settings page
        cy.get('.menu-items > .burger').click();

        cy.get('#side-settings-nav').click();

        cy.get('[hm-tap="changePage($event,\'settings/public-info\')"]').click();

        // Wait for the page to load
        cy.wait(3000);

        // Click on the upload image
        cy.get('.r-right > .btn').click();

        cy.readFile('cypress/fixtures/example.png', 'binary').then((fileContent) => {
            cy.get('input[type=file]').attachFile({
              fileContent: fileContent,
              fileName: 'example.png',
              mimeType: 'image/png'
            });
          });

          cy.wait(3000);
          
          cy.get('.r-right > .blue').click();
          
    })
    
})
