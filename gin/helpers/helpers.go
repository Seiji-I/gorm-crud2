package helpers

import (
	"gorm.io/gorm"
	"gorm.io/driver/postgres"
	"log"
	"strconv"
	models "gin/models"
)

func GetAllItems() []models.Item{
	dsn := "host=postgres user=root password=root dbname=sample port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	var items []models.Item
	db.Find(&items)
	// db.Raw("SELECT * FROM items").Scan(&items)
	return items
}

func GetOneItem(id string) models.Item {
	dsn := "host=postgres user=root password=root dbname=sample port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}
	log.Println("id:", id)
	var item models.Item
	db.First(&item, id)
	return item
}

func CreateItem(itemName, itemStock string) bool{
	dsn := "host=postgres user=root password=root dbname=sample port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		return false
	}
	var itemStockInt int
	itemStockInt, _ = strconv.Atoi(itemStock)
	item := models.Item{Name: itemName, Stock: itemStockInt}
	result := db.Create(&item)
	db.Save(&item)
	if result.Error != nil {
		log.Fatal(result.Error)
		return false
	}
	return true
}

func UpdateItem(itemID, itemName, itemStock string) bool{
	dsn := "host=postgres user=root password=root dbname=sample port=5432 sslmode=disable TimeZone=Asia/Tokyo"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
		return false
	}

	var itemStockInt int
	itemStockInt, _ = strconv.Atoi(itemStock)
	var item models.Item
	db.First(&item, itemID)
	result := db.Model(&item).Updates(models.Item{Name: itemName, Stock: itemStockInt})

	db.Save(&item)
	if result.Error != nil {
		log.Fatal(result.Error)
		return false
	}
	return true
}