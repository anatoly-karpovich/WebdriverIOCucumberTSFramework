Feature: Test End 2 End user
    Scenario: Validate get request
        Given I am on page <PageUrl>
        When I perform <EndPoint> user search
        And I make GET <EndPoint> api call
        Then I validate the search result

        Examples:
            | PageUrl                  | EndPoint     |
            | http://resttesttest.com/ | /api/users/2 |