package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"log"
	helpers "gin/helpers"
)

func IndexGetHandler() gin.HandlerFunc {
	items := helpers.GetAllItems()
	return func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H {
			"items": items,
		})
	}
}

func ItemDetailGetHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		id := c.Param("id")
		item := helpers.GetOneItem(id)
		c.JSON(http.StatusOK, gin.H {
			"item": item,
		})
	}
}

func CreatePostHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		itemName  := c.PostForm("itemName")
		itemStock := c.PostForm("itemStock")
		result := helpers.CreateItem(itemName, itemStock)
		if !result {
			c.JSON(http.StatusOK, gin.H{
				"message": "Faild to create item",
			})
			log.Fatal("faild to create item...")
			c.Abort()
		}
		c.JSON(http.StatusOK, gin.H {
			"message": "Success to create item",
		})
	}
}

func UpdatePostHandler() gin.HandlerFunc {
	return func(c *gin.Context) {
		itemID  := c.PostForm("itemID")
		itemName  := c.PostForm("itemName")
		itemStock := c.PostForm("itemStock")
		result := helpers.UpdateItem(itemID, itemName, itemStock)
		if !result {
			c.JSON(http.StatusOK, gin.H{
				"message": "Faild to create item",
			})
			log.Fatal("faild to create item...")
			c.Abort()
		}
		c.JSON(http.StatusOK, gin.H {
			"message": "Success to create item",
		})
	}
}