package dao

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type PortfolioDAO struct {
	Collection *mongo.Collection
}

func (dao *PortfolioDAO) GetAllPortfolios(ctx context.Context) ([]map[string]interface{}, error) {
	var results []map[string]interface{}
	cursor, err := dao.Collection.Find(ctx, bson.D{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var result map[string]interface{}
		cursor.Decode(&result)
		results = append(results, result)
	}
	if err := cursor.Err(); err != nil {
		return nil, err
	}
	return results, nil
}

func (dao *PortfolioDAO) GetPortfolioByID(ctx context.Context, id string) (map[string]interface{}, error) {
	var result map[string]interface{}
	err := dao.Collection.FindOne(ctx, bson.M{"route": id}).Decode(&result)
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (dao *PortfolioDAO) CreatePortfolio(ctx context.Context, portfolio map[string]interface{}) (*mongo.InsertOneResult, error) {
	return dao.Collection.InsertOne(ctx, portfolio)
}

func (dao *PortfolioDAO) UpdatePortfolio(ctx context.Context, id string, update map[string]interface{}) (*mongo.UpdateResult, error) {
	filter := bson.M{"route": id}
	updateBson := bson.M{"$set": update}
	return dao.Collection.UpdateOne(ctx, filter, updateBson)
}

func (dao *PortfolioDAO) DeletePortfolio(ctx context.Context, id string) (*mongo.DeleteResult, error) {
	return dao.Collection.DeleteOne(ctx, bson.M{"route": id})
}

func (dao *PortfolioDAO) DeleteAllPortfoliosByCustomerCode(ctx context.Context, customerCode string) (*mongo.DeleteResult, error) {
	filter := bson.M{"customerCode": customerCode}
	return dao.Collection.DeleteMany(ctx, filter)
}

func (dao *PortfolioDAO) GetPortfoliosByClientId(ctx context.Context, clientId string) ([]map[string]interface{}, error) {
	var results []map[string]interface{}
	cursor, err := dao.Collection.Find(ctx, bson.M{"customerCode": clientId})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var result map[string]interface{}
		cursor.Decode(&result)
		results = append(results, result)
	}
	if err := cursor.Err(); err != nil {
		return nil, err
	}
	return results, nil
}
