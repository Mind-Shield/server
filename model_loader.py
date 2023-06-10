import sys
import tensorflow as tf
import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
from joblib import load
from tensorflow.keras.models import load_model

vetorizadorBert = SentenceTransformer('bert-base-multilingual-cased')
modelo = load_model('.\src\ml\modelo_Bert.h5')

data = sys.argv
data = data[1:]

previsao = []
classe_predita = []

for i in range(0,len(data)):
   data[i] = vetorizadorBert.encode([data[i]])
   previsao.append(modelo.predict(data[i]))
   classe_predita.append(np.argmax(previsao[i]))

print(classe_predita)