# Homework

In order to build the container image:
```bash
docker build -t vuejs-hw .
```

In order to run the container:
```bash
docker run -it --rm --name vuejs-hw -v$(pwd):/usr/project -p8080:8080 vuejs-hw
```

In order to exit container:
```bash
# either run command
exit
# or input EOF
Ctrl + D
```
