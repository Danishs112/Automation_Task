Feature: Dashboard Page

    As a tester, I want to test the "https://support.google.com/" application login page

    Scenario Outline: Test the Support Google page
        Given I am on the login page
        When I click on the "<icon>" icon
        And I click on the "Community" tab
        And I click on the "View all posts" button
        And I click on the "View more" button on the thread page
        And the number of replies is greater that "5"
        # When I should email the url of the the reply

        Examples:
            | icon          |
            | Google Search |