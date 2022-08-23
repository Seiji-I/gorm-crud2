package main

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"time"
	routes "gin/routes"
)

func main() {
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:		[]string{"http://localhost:3000"},
		AllowMethods:		[]string{"GET", "POST", "OPTIONS"},
		AllowHeaders:		[]string{"Access-Control-Allow-Credentials", "Access-Control-Allow-Headers", "Content-Type", "Content-Length"},
		ExposeHeaders:	[]string{"Content-Length"},
		AllowCredentials: true,
		MaxAge: 1 * time.Hour,
	}))

	public := router.Group("/api")
	routes.PublicRoutes(public)
	
	router.Run(":3333")
}