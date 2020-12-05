//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            //validate property to check that the user provided a value
            validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
        },
        {
            type: 'input',
            message: 'Give a brief description of your project',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'instructions to follow?',
            name: 'instructions',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'how do you install your app?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'How do you use your app?',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'What are the Contribution Guidelines?',
            name: 'contributing',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'Are there any tests?',
            name: 'tests',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            //list of licenses
            type: 'list',
            message: 'what license did you use?',
            name: 'license',
            choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU license', 'N/A'],
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        },
        {
            type: 'input',
            message: 'LinkedIn:',
            name: 'linkedin',
            validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } }
        }
    ]

).then(({
    title,
    description,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contributing

}) => {
    //templatea
    const template =
        `# ${title}
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Contribution](#contribution)
* [Credits](#credits)
* [License](#license)
* [Contact](#contact)
## Installation
${installation}
## Description
${description}
## Usage
${usage}
## Contribution
${contributing}
### Instructions
${instructions}
## Credits
${credit}
## License
${license}
    
# Contact
* GitHub :${git}
* Linkedin :${linkedin}
* Email :${email}`;
    //fs function for generating Readme
    createNewFile(title, template);
}
);
//creating the new file function
function createNewFile(fileName, data) {

    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been generated');
    })
}
