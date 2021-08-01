
import csv, numpy as np, pandas as pd

import chart_studio.tools as tls
import chart_studio.plotly as py
import plotly.express as px

from pprint import pprint

print(tls.get_embed('https://plotly.com/~chris/1638'))

df = pd.read_csv(filepath_or_buffer='unemployment_rate_by_state_2021.csv').rename(mapper=dict({'date': 'month'}), axis=1).fillna(value=0)
pprint(df)

# unemployment in california
df_california = df[df.state == 'California'].set_index(keys=['month']).iloc[:5, 1]
pprint(df_california)
fig = px.line(data_frame=df_california, x=df_california.index, y='unemployment_rate', title='California Unemployment Rate 2021', labels=dict({'month': 'Month', 'unemployment_rate': 'Unemployment Rate'}))
fig.write_html(file='plots/california_unemployment_rate.html')

# unemployment in florida
df_florida = df[df.state == 'Florida'].set_index(keys=['month']).iloc[:5, 1]
pprint(df_florida)
fig = px.line(data_frame=df_florida, x=df_florida.index, y='unemployment_rate', title='Florida Unemployment Rate 2021', labels=dict({'month': 'Month', 'unemployment_rate': 'Unemployment Rate'}))
fig.write_html(file='plots/florida_unemployment_rate.html')

# unemployment in texas
df_texas = df[df.state == 'Texas'].set_index(keys=['month']).iloc[:5, 1]
pprint(df_texas)
fig = px.line(data_frame=df_texas, x=df_texas.index, y='unemployment_rate', title='Texas Unemployment Rate 2021', labels=dict({'month': 'Month', 'unemployment_rate': 'Unemployment Rate'}))
fig.write_html(file='plots/texas_unemployment_rate.html')
