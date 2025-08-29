IMAGE_VERSION  ?= latest
EXPORT_PORT ?= 80

.PHONY: build
build:
	 docker build -f Dockerfile -t caobaoqi6040/yuan-idea-docs:$(IMAGE_VERSION) .

.PHONY: run
run:
	docker run -d -p $(EXPORT_PORT):80 --name yuan-idea-docs-$(EXPORT_PORT) caobaoqi6040/yuan-idea-docs:$(IMAGE_VERSION)
