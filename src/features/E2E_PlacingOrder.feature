Feature: E2E_Placing_Order

    Scenario Outline: Placing an order
        Given User is on the loginPage
        And User logins with valid credentials "<useremail>" and "<password>"
        And User is on the Dashboard page
        And User selects products "<products_to_add>" and adds to cart
        And User navigates to the cart page and verifies the cart contents with "<products_to_add>"
        And User proceeds to checkout and enters details "<firstName>", "<lastName>", "<zipcode>"
        And User lands on the Checkout Overview Page
        And User verifies the order summary on checkout overview page
        When User confirms the order
        Then User should see the order confirmation page with order details
        And User is on the Dashboard page after order confirmation
        And User logs out of the application

        Examples:
            | firstName | lastName | zipcode | useremail             | password    |  products_to_add                    |
            | John      | Doe      | 12345   | test@qabrains.com     | Password123 |  Sample Shoe Name,Sample Shirt Name | 
            | Jane      | Smith    | 67890   | practice@qabrains.com | Password123 |  Sample Shirt Name                  |
            | Bob       | Johnson  | 54321   | test@qabrains.com     | Password123 |  Sample Trouser Name                | 
            | Alice     | Williams | 98765   | practice@qabrains.com | Password123 |  Sample Shoe Name,Sample Trouser Name,Sample Shirt Name |