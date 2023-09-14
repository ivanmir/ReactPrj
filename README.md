# ReactPrj

1. Clone this repository

2. Run watch on a terminal window
```
# cd app
# npm i
# npm run watch
```
3. Run the vscode launch configuration
```
Open the 'RUN' menu on VSCODE
Select teh run configuration named "Run ReactPrj"
Click on the play button
--> You might see npm installing files automatically or building the project if required
--> You should see lines on the debug console related to html5-rep-mock starting up
```

4. Open the browser at the root of the App Router (don't use the addresses indicated on the debug output):
http://localhost:6004

Notes:
=======
Files:
- app/env1 --> Contains the destination required for the service used by React
- .vscode/launch --> Starts the html5-repo-mock under the app/build dir and reads the env1 file to create an instance of an SAP App Router for application 'App'
- .vscode/tasks --> Contains the instructions on how to build this project, if it weren't built yet and install the App Router and HTML5-REPO-MOCK if necessary
- app/package.json --> dependency to npm-watch, which has a configuration to update the application's 'build' folder
- /package.json --> just a React Build Script
  
