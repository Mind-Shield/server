# import joblib
import tensorflow as tf
import pandas as pd
import numpy as np
from sentence_transformers import SentenceTransformer
from joblib import load

# modelo, vetorizador = load('./src/ml/modelo_Bert.pkl')
print("Versão do TensorFlow:", tf.version)
# print(modelo)