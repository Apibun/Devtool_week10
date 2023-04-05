# Video
https://drive.google.com/drive/folders/1Gzuu0Hc8LNfokYB-REReXSbIFjT6OBVI?usp=sharing

# Install jenkins, docker, docker-compose

### 1. Open the install_git_docker_docker_compose.sh file :

```
nano install_git_docker_dockercompose.sh
```

### 2. Add the following content to install_git_docker_docker_compose.sh :

```
#!/bin/bash

# Update the package index and install required dependencies
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable Docker repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update the package index and install Docker
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add the current user to the Docker group
sudo usermod -aG docker $USER

# Enable and start the Docker service
sudo systemctl enable docker
sudo systemctl start docker

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Print Docker and Docker Compose versions
docker --version
docker-compose --version



```



## 3.Save and close the file.
```
Ctrl+X, then Y, then Enter.
```

 
## 4. Make the install.sh script executable:
```
chmod +x install_git_docker_dockercompose.sh
```



## 5 .Run the install.sh script:

```
./install_git_docker_dockercompose.sh

```

## 6.ADD DOCKER NOT USE sudo
 
 ```
sudo usermod -aG docker $USER
sudo groupadd docker
```

## 7.build Docker image with docker build
 
 ```
docker build -t fastapi-docker_lab5 .
```

## 8.Run the Docker container by executing the following command:
 
 ```
docker run -p 8088:80 fastapi-docker_lab5 
```

