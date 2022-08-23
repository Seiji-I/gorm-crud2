package routes

import (
	"github.com/gin-gonic/gin"
	controllers "gin/controllers"
)

func PublicRoutes(g *gin.RouterGroup) {
	g.GET("/", controllers.IndexGetHandler())
	g.GET("/item/:id", controllers.ItemDetailGetHandler())
	g.POST("/create", controllers.CreatePostHandler())
	g.POST("/update", controllers.UpdatePostHandler())
	// g.POST("/delete", controllers.DeletePostHandler())
}

