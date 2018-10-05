# SecondCloudApp

This time with app router and authentication.

Authentication does not allow for multitenant: `"tenant-mode": "dedicated"` in `xs-security.json`

`xs-app.json` defines allowed paths for the approuter. Corresponding destinations have to be maintained in `manifest.yml`

## Installation 

Create an instance of xsuaa service out of the project root folder with

`cf cs xsuaa application mysecond-uaa -c ./xs-security.json`

Install npm dependencies with `npm install` in both `web` adn `app` folders

Return to root and deploy app via `cf push`
