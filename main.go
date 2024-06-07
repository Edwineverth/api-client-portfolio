package main

import (
	"log"
	"os"

	"api-client-portafolio/dao"
	"api-client-portafolio/db"
	"api-client-portafolio/handler"
	"api-client-portafolio/repository"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func loadEnv() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func getEnv(key, fallback string) string {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	return value
}

func main() {
	loadEnv()

	mongoURI := getEnv("MONGO_URI", "mongodb://mongo-portfolio:27017")
	mongoDBName := getEnv("MONGO_DB", "portfolioDB")
	serverPort := getEnv("SERVER_PORT", "8081")

	// Initialize MongoDB
	mongoDB := &db.MongoDB{}
	mongoDB.Connect(mongoURI, mongoDBName)

	// Initialize DAO, Repository, and Handler
	portfolioDAO := &dao.PortfolioDAO{Collection: mongoDB.Database.Collection("client_portfolio")}
	portfolioRepo := &repository.PortfolioRepository{PortfolioDAO: portfolioDAO}
	portfolioHandler := &handler.PortfolioHandler{PortfolioRepo: portfolioRepo}

	// Set up Gin router
	router := gin.Default()
	router.GET("/portfolios", portfolioHandler.GetPortfolios)
	router.GET("/portfolios/:id", portfolioHandler.GetPortfolioByID)
	router.POST("/portfolios", portfolioHandler.CreatePortfolio)
	router.PUT("/portfolios/:id", portfolioHandler.UpdatePortfolio)
	router.DELETE("/portfolios/:id", portfolioHandler.DeletePortfolio)

	router.Run(":" + serverPort)
}
