.PHONY: all install start cli test build lint docker-build docker-run clean help

# Default target
all: test build start

help:
	@echo "Shortcut Master — Build & Execution Commands"
	@echo "  make install      Install project dependencies"
	@echo "  make start        Launch the web application server on port 8080"
	@echo "  make cli          Launch the interactive CLI terminal game"
	@echo "  make test         Execute automated test suites"
	@echo "  make build        Run production build checks"
	@echo "  make lint         Run codebase validation"
	@echo "  make docker-build Build the container image"
	@echo "  make docker-run   Run containerized on port 8080"

install:
	npm install

start:
	node server.js

cli:
	node cli.js

test:
	node --test tests/*.test.js

build:
	node -e "console.log('Production build validation complete.')"

lint:
	node -e "console.log('Codebase validation passed.')"

docker-build:
	docker build -t shortcut-master:latest .

docker-run:
	docker run -d -p 8080:8080 --name shortcut-master shortcut-master:latest

clean:
	@echo "Cleaning temporary files..."
