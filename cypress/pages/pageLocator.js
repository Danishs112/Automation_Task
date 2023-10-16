
class PageLocators {
  
    getIcon(icon){
      return cy.get(`section.product-selector a[data-stats-id="${icon}"]`);
    }

    getElement(text){
      return cy.xpath(`.//a[text()="${text}"]`)
    }

    getThreadsReplies(){
      return cy.get('div.material-card a')
    }
    
    getThreadReplyCount(){
      return cy.get('div.material-card a span.thread-list-counts__count--reply')
    }

    getViewMoreButton(){
      return cy.get('[data-stats-id="load-more-button"]')
    }
  }
  
  export default PageLocators;
  