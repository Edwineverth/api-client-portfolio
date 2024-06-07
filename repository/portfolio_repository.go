package repository

import (
	"context"
	"go.mongodb.org/mongo-driver/mongo"

	"api-client-portafolio/dao"
)

type PortfolioRepository struct {
	PortfolioDAO *dao.PortfolioDAO
}

func (r *PortfolioRepository) GetAllPortfolios(ctx context.Context) ([]map[string]interface{}, error) {
	return r.PortfolioDAO.GetAllPortfolios(ctx)
}

func (r *PortfolioRepository) GetPortfolioByID(ctx context.Context, id string) (map[string]interface{}, error) {
	return r.PortfolioDAO.GetPortfolioByID(ctx, id)
}

func (r *PortfolioRepository) CreatePortfolio(ctx context.Context, portfolio map[string]interface{}) (*mongo.InsertOneResult, error) {
	return r.PortfolioDAO.CreatePortfolio(ctx, portfolio)
}

func (r *PortfolioRepository) UpdatePortfolio(ctx context.Context, id string, update map[string]interface{}) (*mongo.UpdateResult, error) {
	return r.PortfolioDAO.UpdatePortfolio(ctx, id, update)
}

func (r *PortfolioRepository) DeletePortfolio(ctx context.Context, id string) (*mongo.DeleteResult, error) {
	return r.PortfolioDAO.DeletePortfolio(ctx, id)
}

func (r *PortfolioRepository) DeleteAllPortfoliosByCustomerCode(ctx context.Context, customerCode string) (*mongo.DeleteResult, error) {
	return r.PortfolioDAO.DeleteAllPortfoliosByCustomerCode(ctx, customerCode)
}

func (r *PortfolioRepository) GetPortfoliosByClientId(ctx context.Context, clientId string) ([]map[string]interface{}, error) {
	return r.PortfolioDAO.GetPortfoliosByClientId(ctx, clientId)
}
