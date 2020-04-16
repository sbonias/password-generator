# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Pseudocode
```
When button is clicked
    -Create Button Prompt and/or functionality to initiate code
    
Prompt user to enter length of pw
    -"In order to generate a password, please choose a character length between 8 - 128."
        -Write code to limit characters allowed to be between 8-128
            -If characters entered is between 8-128 continue to next prompt
            -If characters entered is < 8 create alert that tells user "Character length needs to be Greater than 8 characters"
            -If characters entered is > 128 create alert that tells user "Character length needs to be less than 128 characters"

Prompt user via a "confirm" to determine if lower case letters are required for their new password
    -"Would you like your new password to contain lower case letters?"
            -If user selects "OK" run code to assign a random lower case letter (that will be stored and called upon at a later time)
            -If user selects "Cancel" omit generating a random lower case letter

Prompt user via a "confirm" to determine if UPPER case letters are required for their new password
    -"Would you like your new password to contain UPPER case letters?"
            -If user selects "OK" run code to assign a random UPPER case letter (that will be stored and called upon at a later time)
            -If user selects "Cancel" omit generating a random UPPER case letter

Prompt user via a "confirm" to determine if numeric values are required for their new password
    -"Would you like your new password to contain numeric values?"
            -If user selects "OK" run code to assign a random numeric value (that will be stored and called upon at a later time)
            -If user selects "Cancel" omit generating a random numeric value

Prompt user via a "confirm" to determine if special characters are required for their new password
    -"Would you like your new password to contain special characters? (ex. !, @, #, $)"
            -If user selects "OK" run code to assign a random special character (that will be stored and called upon at a later time)
            -If user selects "Cancel" omit generating a random special character

Validate that at least 1 of 4 prior options was confirmed

When all prompts are completed
    -Display new password in box
        -Call above functions?

If no prompts were confirmed or selected
    -Inform user via "alert" that not enough criteria was selected for a password to generate and to click "Generate Password" button to start the process again
```

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
