from fastapi import FastAPI
import joblib
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


model = joblib.load("sales_prediction_model.pkl")

@app.get("/")
def home():
    return {"message": "Sales Prediction API running"}

@app.post("/predict")
def predict(
    year: int,
    month: int,
    category: str,
    region: str
):
    data = {
        "Year": year,
        "Month": month,
        "Category_Furniture": 0,
        "Category_Office Supplies": 0,
        "Category_Technology": 0,
        "Region_Central": 0,
        "Region_East": 0,
        "Region_South": 0,
        "Region_West": 0
    }

    # Encode category
    if category == "Furniture":
        data["Category_Furniture"] = 1
    elif category == "Office Supplies":
        data["Category_Office Supplies"] = 1
    elif category == "Technology":
        data["Category_Technology"] = 1

    # Encode region
    if region == "Central":
        data["Region_Central"] = 1
    elif region == "East":
        data["Region_East"] = 1
    elif region == "South":
        data["Region_South"] = 1
    elif region == "West":
        data["Region_West"] = 1

    df_input = pd.DataFrame([data])

    prediction = model.predict(df_input)

    return {"predicted_sales": float(prediction[0])}
