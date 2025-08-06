# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
import tensorflow as tf
import numpy as np

app = FastAPI()

class InputData(BaseModel):
    features: list

@app.post("/predict")
def predict(data: InputData):
    # Load or define model (example)
    model = tf.keras.models.load_model("your_model.h5")
    prediction = model.predict(np.array([data.features]))
    return {"prediction": prediction.tolist()}
