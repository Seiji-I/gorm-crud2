package main

import (
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
	models "gin/models"
)

func main() {
	dsn := "host=postgres user=root password=root dbname=sample port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(err)
	}
	db.AutoMigrate(&models.Item{})
}