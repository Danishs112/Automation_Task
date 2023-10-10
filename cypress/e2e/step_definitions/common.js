import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import Page from '../../pages/pageLocator';
import GenericActions from "../../utilities/genericActions";

const page = new Page();
const genericActions = new GenericActions();

Given("I am on the login page", () => {
    genericActions.visit();
});

When("I click on the {string} icon", async(icon) => {
    const element = page.getIcon(icon);
    element.click();    
})


When("I click on the {string} tab", async(tab) => {
    const element = page.getElement(tab);
    element.click();
})


When("I click on the {string} button", async(button) => {
    const element = page.getElement(button);
    element.click();
});

Then("the number of replies is greater that {string}", (value) => {
    const thresholdValue = parseInt(value);
    const hrefLinks = [];
    page.getThreadReplyCount().each((element, index) => {
      cy.wrap(element).invoke("text").then(txt => {
        let count = "";
        let replyCount;
  
        if (txt.includes("Reply")) {
          count = txt.replace("Reply", "");
          replyCount = parseInt(count);
        } else {
          count = txt.replace("Replies", "");
          replyCount = parseInt(count);
        }
  
        if (replyCount > thresholdValue) {
          page.getThreadsReplies().eq(index).then($thread => {
            const threadHref = $thread.attr("href");
            hrefLinks.push(Promise.resolve(threadHref));
          });
        }
      });
    }).then(() => {
        Promise.all(hrefLinks).then(hrefArr => {
            hrefArr.forEach((href, index) => {
              cy.log(`${href}`);
            });
            
          });
    });
  });
  