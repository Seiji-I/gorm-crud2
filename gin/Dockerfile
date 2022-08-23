FROM golang:1.16.0-buster

ENV GOPATH /go
ENV GO111MODULE on

RUN apt-get update

WORKDIR /go/src
COPY go.mod go.sum ./
RUN go mod download && go mod verify
RUN go get github.com/cosmtrek/air@v1.29.0
RUN go mod tidy

CMD ["air", "-c", ".air.toml"]
