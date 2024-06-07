package handler

import (
	"context"
	"net/http"

	"api-client-portafolio/repository"
	"github.com/gin-gonic/gin"
)

type PortfolioHandler struct {
	PortfolioRepo *repository.PortfolioRepository
}

func (h *PortfolioHandler) GetPortfolios(c *gin.Context) {
	portfolios, err := h.PortfolioRepo.GetAllPortfolios(context.Background())
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, portfolios)
}

func (h *PortfolioHandler) GetPortfolioByID(c *gin.Context) {
	routePortfolio := c.Param("id")
	portfolio, err := h.PortfolioRepo.GetPortfolioByID(context.Background(), routePortfolio)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Portfolio not found"})
		return
	}
	c.JSON(http.StatusOK, portfolio)
}

func (h *PortfolioHandler) CreatePortfolio(c *gin.Context) {
	var portfolio map[string]interface{}
	if err := c.BindJSON(&portfolio); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	result, err := h.PortfolioRepo.CreatePortfolio(context.Background(), portfolio)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, result)
}

func (h *PortfolioHandler) UpdatePortfolio(c *gin.Context) {
	routePortfolio := c.Param("id")
	var update map[string]interface{}
	if err := c.BindJSON(&update); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	result, err := h.PortfolioRepo.UpdatePortfolio(context.Background(), routePortfolio, update)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, result)
}

func (h *PortfolioHandler) DeletePortfolio(c *gin.Context) {
	routePortfolio := c.Param("id")
	result, err := h.PortfolioRepo.DeletePortfolio(context.Background(), routePortfolio)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, result)
}

func (h *PortfolioHandler) DeleteAllPortfoliosByCustomerCode(c *gin.Context) {
	customerCode := c.Param("id")
	result, err := h.PortfolioRepo.DeleteAllPortfoliosByCustomerCode(context.Background(), customerCode)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
	c.JSON(http.StatusOK, result)
}

func (h *PortfolioHandler) GetPortfoliosByClientId(c *gin.Context) {
	clientId := c.Param("id")
	portfolios, err := h.PortfolioRepo.GetPortfoliosByClientId(context.Background(), clientId)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, portfolios)
}
