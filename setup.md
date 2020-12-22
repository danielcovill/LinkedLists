In order to use private Javascript variables, you need to be using Node 12

The following commands upgrade your linux instance and add a new source for getting node updates
- sudo apt update && sudo apt upgrade
- sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
- curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

Once that's complete, you can run the following to upgrade Node to 12
- sudo apt-get install -y nodejs