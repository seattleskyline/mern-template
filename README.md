# MERN Template

### How to Run

Navigate to the top level of the directory and enter `npm run start`.  This will trigger a webpack build process i the terminal.  Open the browser to https://localhost:3000 and the app should be there.

### Making Changes

The javascript files should be watched via webpack and update the build packages when a change has been made and saved.

### Directory Layout

  #### /src

  This is where all of the react components are. 

  #### /public

  This is where all static assets are stored.  Everything in this directory is publicly accessible through url ( example https://localhost:3000/images/myimage.png would return an image stored in /public/images/myimage.png).

  #### /webpack

  This folder stored the webpack config files.

  #### /node_modules

  These are external libraries downloaded to the directory based on the package.json.  It is not generally advisable to directly modify anything in these folders.