.PHONY: help
.DEFAULT_GOAL:=help

DOCKER_IMAGE:=server

run:
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
build:
	docker build --tag ${DOCKER_IMAGE} .