const fs = require('fs');

// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-green.svg)](${renderLicenseLink(license)})`;
  } else {
    return ``
  }
}

// Returns the license link
function renderLicenseLink(license) {
  
  if (license === 'GNU AGPLv3') {
    return `https://choosealicense.com/licenses/agpl-3.0/`
  }
  if (license === 'GNU GPLv3') {
    return `https://choosealicense.com/licenses/gpl-3.0/` 
  }
  if (license === 'GNU LGPLv3') {
    return `https://choosealicense.com/licenses/lgpl-3.0/` 

  }if (license === 'MPL') {
    return `https://choosealicense.com/licenses/mpl-2.0/` 

  }if (license === 'Apache') {
    
    return `https://choosealicense.com/licenses/apache-2.0/` 

  }if (license === 'MIT') {
      return `https://choosealicense.com/licenses/mit/`
    

  }if (license === 'BSL') {
    return `https://choosealicense.com/licenses/bsl-1.0/` 
  }

  if (license === 'The Unlicense') {
    return `https://choosealicense.com/licenses/unlicense/`
  }

  if (license === 'none') {
    return ``
  }

}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  } else {
    return ``
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ---
  ![${data.license}](https://img.shields.io/badge/license-${data.license}-green)
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  7. [Features](#features)
  8. [Credits](#credits)
  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License 
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  ## Features
  This is a list of the differents features for this project
  ${data.feature}
  ## Questions
  If you have any questions about this repository, you might want to open an issue or contact me  at (mailto:${data.email}). Also, you can find more of my work at (https://www.github.com/${data.username}).
  ## Credits
  This has been made with the collaboration of :${data.credits}.Thank you.
`;
}

module.exports = generateMarkdown;
