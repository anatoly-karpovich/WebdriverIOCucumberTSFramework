Feature: Registration form

    Scenario: Test registration functionality with invalid data
        Given I am on the login page "https://anatoly-karpovich.github.io/HiqoMeetup/"
        Then I validate this header "Login"
        When I click on register button
        Then I must be navigated to registration form with header as "Registration"
        Then I register with following incorrect credentials:
            | username                                 | password              | message                                                             |
            |                                          |                       | Please, provide valid data                                          |
            |                                          | 123abcA!              | Username is required                                                |
            | Hiqo                                     |                       | Password is required                                                |
            | Hi                                       | 123abcA!              | Username should contain at least 3 characters                       |
            | Hiqo                                     | 123abca               | Password should contain at least 8 characters                       |
            | Hiq                                      | 123abcA!              | Successfully registered! Please, click Back to return on login page |
            | HiqoUserHiqoUserHiqoUserHiqoUserHiqoUser | 123abcA123abcA123abc! | Successfully registered! Please, click Back to return on login page |
            | Hiq                                      | 123abcA!              | Username is in use                                                  |

