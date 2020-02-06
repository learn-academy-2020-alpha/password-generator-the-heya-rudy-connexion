#Testing

#Testing B

# Password Generator

## User Story

As a USER, I need to be able to GENERATE A SECURE PASSWORD, so that I can CREATE A STRONG PASSWORD FOR MAXIMUM SECURITY.

## Acceptance Criteria

GIVEN: I need a new, secure password

- WHEN I click a button to generate a strong password
- THEN I am presented with a series of prompts for password criteria

- WHEN prompted for password criteria
- THEN I select wich criteria to include in the password

- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characaters and no more than 128 characters

- WHEN prompted for character types to include in the password
- THEN I choose lowercase, uppercase

- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected

- WHEN  all my prompts are answered
- THEN a password is generated that matches the selected criteria

- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page.

## Stretch Goals

- WHEN prompted for character types to include in the password
- THEN I choose numeric, and/or special characters

- WHEN I click on the copy button
- THEN my password is stored to the clipboard
