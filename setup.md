In order to use private Javascript variables, you need to be using Node 12

The following commands upgrade your linux instance and add a new source for getting node updates
        sudo apt update && sudo apt upgrade
        sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

Once that's complete, you can run the following to upgrade Node to 12
        sudo apt-get install -y nodejs


# Adding Unit Testing

## Set up Jasmine
Install jasmine-node from the npm repository for developer use only. It will create a package-lock.json file and a node_modules folder full of supporting code.
        npm i -D jasmine

Use npx (a tool from npm) to run the jasmine tool you've installed to set up a testing area in your codebase. It will create a spec directory and some configuration files.
        npx jasmine init 

At this point you probably want to update your .gitignore file (or create one if you don't have one) and tell it to ignore the node_modules folder because that's all stuff you can re-download.

## Write some tests
We'll go over this, but your tests are all files that end with spec.js (per the configuration file in the spec/support directory that `jasmine init` created).

Once you're ready to run them you can use the following command to tell jasmine to run
        npx jasmine

## Set up some nice stuff for VSCode if you want nicer looking test cases
Install the "Jasmine Test Explorer" extension for VSCode and see that it added a little flask on the right column. When you open that panel you now see tests.