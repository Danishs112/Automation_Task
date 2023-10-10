import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../../pageObject/login'

const loginPage = new LoginPage();

Given("I am on the login page", () => {
    loginPage.visit()
});



