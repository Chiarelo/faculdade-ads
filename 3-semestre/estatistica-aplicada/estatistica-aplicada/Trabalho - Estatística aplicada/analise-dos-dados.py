import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt
from IPython.display import display
from scipy.stats import norm
import shap
import matplotlib.pyplot as plt

# Carregar o dataset
df = pd.read_csv(r'C:\Users\vinic\OneDrive - Fatec Centro Paula Souza\1-fatec\Fatec - GitHub\3-semestre\estatistica-aplicada\estatistica-aplicada\estatistica-aplicada\Análise dos Dados.py')

# Remover colunas indesejadas
cols_delete = ['Person ID', 'Blood Pressure', 'BMI Category']
df = df.drop(columns=cols_delete)

# Descrever o DataFrame
descricao = df.describe()

# Exibir DataFrame e descrição
display(df)
display(descricao)

# Selecionar apenas colunas numéricas
df_numeric = df.select_dtypes(include='number')

# Calcular a moda da duração do sono
moda_duracao_sono = df['Sleep Duration'].mode()[0]

display("Moda da duração do sono:", moda_duracao_sono)

# Calcular estatísticas de interesse
desvio_padrao = df_numeric.std()
curtose = df_numeric.kurtosis()
assimetria = df_numeric.skew()

print("Desvio Padrão:")
display(desvio_padrao)

print("\nCurtose:")
display(curtose)

print("\nAssimetria:")
display(assimetria)

# Visualizar a distribuição da variável alvo ao longo do tempo
X = df[['Quality of Sleep']]
y = df['Sleep Duration']

# Dividir os dados em conjuntos de treinamento e teste
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Treinar o modelo de regressão linear
model = LinearRegression()
model.fit(X_train, y_train)

# Fazer previsões
y_pred = model.predict(X_test)

# Avaliar o modelo
r_squared = r2_score(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)

print("Coeficiente de determinação (R²):", r_squared)
print("Erro quadrático médio (MSE):", mse)

# Filtrar DataFrame para 'Software Engineer'
software_engineers = df[df['Occupation'] == 'Software Engineer']

# Calcular a média e o desvio padrão para 'Quality of Sleep'
media = software_engineers['Quality of Sleep'].mean()
desvioPadrao = software_engineers['Quality of Sleep'].std()

# Calcular a probabilidade de 'Quality of Sleep' > 8.0
threshold = 8.0
probability = 1 - norm.cdf(threshold, media, desvioPadrao)

# Converter a probabilidade para porcentagem
probability_percent = probability * 100

# Exibir a probabilidade
print(f'Probabilidade de Software Engineers terem uma qualidade de sono acima de {threshold}: {probability_percent:.2f}%')

# Exibir o DataFrame e a descrição dos Software Engineers
descricao_se = software_engineers.describe()
#display(software_engineers)
#display(descricao_se)

# Plotar a distribuição normal para visualização
import matplotlib.pyplot as plt

x = np.linspace(media - 4*desvioPadrao, media + 4*desvioPadrao, 1000)
y = norm.pdf(x, media, desvioPadrao)

plt.plot(x, y, label=f'Normal Distribution\n$\mu={media:.2f}$, $\sigma={desvioPadrao:.2f}$')
plt.axvline(threshold, color='r', linestyle='dashed', linewidth=2, label=f'Threshold = {threshold}')
plt.title('Distribuição Normal - Quality of Sleep (Software Engineers)')
plt.xlabel('Quality of Sleep')
plt.ylabel('Densidade de Probabilidade')
plt.hist(software_engineers['Quality of Sleep'], bins=30, density=True, alpha=0.6, color='g', label='Histograma')
plt.legend()
plt.grid(True)
plt.show()

# Filtrar DataFrame para 'Doctor'
doctors = df[df['Occupation'] == 'Doctor']

# Calcular a média e o desvio padrão para 'Stress Level'
media = doctors['Stress Level'].mean()
desvioPadrao = doctors['Stress Level'].std()

# Calcular a probabilidade de 'Stress Level' > 7.0
threshold = 7.0
probability = 1 - norm.cdf(threshold, media, desvioPadrao)

# Converter a probabilidade para porcentagem
probability_percent = probability * 100

# Exibir a probabilidade
print(f'Probabilidade de Doctors terem um nível de estresse acima de {threshold}: {probability_percent:.2f}%')

# Exibir o DataFrame e a descrição dos doctors
descricao_se = doctors.describe()
#display(doctorss)
#display(descricao_se)

# Plotar a distribuição normal para visualização
import matplotlib.pyplot as plt

x = np.linspace(media - 4*desvioPadrao, media + 4*desvioPadrao, 1000)
y = norm.pdf(x, media, desvioPadrao)

plt.plot(x, y, label=f'Normal Distribution\n$\mu={media:.2f}$, $\sigma={desvioPadrao:.2f}$')
plt.axvline(threshold, color='r', linestyle='dashed', linewidth=2, label=f'Threshold = {threshold}')
plt.title('Distribuição Normal - Stresss Level (Doctors)')
plt.xlabel('Stress Level')
plt.ylabel('Densidade de Probabilidade')
plt.hist(doctors['Stress Level'], bins=30, density=True, alpha=0.6, color='g', label='Histograma')
plt.legend()
plt.grid(True)
plt.show()


# Calcular todas as medidas separatrizes
quartis = df['Sleep Duration'].quantile([0.25, 0.5, 0.75])
quintis = df['Sleep Duration'].quantile([i/5 for i in range(1, 5)])
decis = df['Sleep Duration'].quantile([i/10 for i in range(1, 10)])
percentis_10_em_10 = df['Sleep Duration'].quantile([i/10 for i in range(1, 10)])


# Exibir os resultados
print("Quartis:")
print(quartis)
print("\nQuintis:")
print(quintis)
print("\nDecis:")
print(decis)
print("Percentis de 10 em 10:")
print(percentis_10_em_10)
