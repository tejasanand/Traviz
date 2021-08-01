## Inspiration

**COVID-19** has become a regular highlight in everyday news, and now because it's 2021, everybody has become a kind of used to it. Changes in social dynamics due to local restrictions impacted human behavior and led to a shift in crime dynamics. Because of the same, it has become a tad easier for the robbers to execute their operations swiftly. This sort of news remains underpinned in most of the daily news, which acts as a catalyst in creating mass fear for travelers, specifically women. According to [TOI](https://timesofindia.indiatimes.com/auto/news/lock-your-cars-vehicle-theft-spikes-in-covid-19-pandemic-in-us/articleshow/75976844.cms), there has been a 125% upsurge in **Car-thefts**, **Robberies** and **Sexual Assaults** which are a matter of great concern for every traveler.

![compiledcomments.png](https://i.postimg.cc/pXD3wjk2/compiledcomments.png)

Moreover, there are few other factors of extreme importance connected to the same node. We carried out extensive research on the COVID-19 status per district in few specific regions in the US / Canada to figure out how safe it is for a traveler to travel across a COVID-19 +ve mass concentrated zone, since at the moment, None of the apps on the Playstore / App Store provides a proper travel guidance solution if connected to the same. Not just about the cars, we also found that in many cases, E-Commerce trucks have been hijacked which incurred losses in Millions over the past few months, where [NYTimes](https://www.nytimes.com) explicitly mentioned this as a result of unemployment.

We believe that with the positive data-driven approach feed by the power of AI, this can be solved if proceeded creatively. Thus we made **Traviz**!

![backf.jpg](https://i.postimg.cc/j5x1hZBW/back2.jpg)

## What it does

**Traviz** is a smart webapp for Hodophiles. It is a revolutionary tool that helps anyone select the best way to reach point **B** from **A** improving the overall experience for the better. Traviz follows a holistic data-centric approach to visualize accurate topological data of different spectrums to generate plots for safer journeys. It considers some important factors like — **Car Thefts**, **House Robberies**, **Crime Reports**, **Region wise COVID19 status**, **Sexual Assault Cases**, & last not least **Unemployment status** for every generated route comprising of different district-wise data. All of those were fed to an custom-made ML model which predicts the scenario according to places, time & season for every individual. 

User can customize Traviz according to their needs to populate interactive plots for visualization. This in turn can help turn every travel into a smart & secure experience. 

## How we built it

**Traviz** is crafted with ❤️. Traviz is primarily a Webapp, based on React.js. The interactive plots are inspired from Tableau and Three.js. We have also leveraged some 3rd party visualization libraries & a few free API's from OpenstreetMap for accessing topological information for setting up travel routes. ml5's toolkit was used to set the training data for the model which is being primarily used for the analysis and generation of interactive plot data from the frozen flat-files. For the backend, we're used GCP for data compression. The authentication of our app is being served via Firebase Authentication. The application is deployed on a free tier of Netlify.

The main issue we faced during building the app is that, half of us didn't have experience with data visualization libraries. Besides most of us had our exams running so maybe if we had got a bit more time, we could invest that in collecting much more data. And apart from the same, cleaning and fitting the data into the model was very cumbersome.  


## Design Process
![process.png](https://i.postimg.cc/sXpVBVbY/process.png)

## Challenges we ran into

*Gathering data*, **a lot of data**. To execute our plan, we need to had a **lot** of clean, filtered data. Since we were specifically focusing on 2019-2021 based data, we faced a really solid challenge because of that. Also, it was a bit difficult for us to collaborate in a virtual setting but we somehow managed to finish the project on time.

---
# Research

- CrimAnalyzer: Understanding Crime Patterns, ArXiv 3rd Oct 2020 : https://arxiv.org/pdf/2010.06517.pdf

- Forecasting Crime Using ARIMA Model, ArXiv, IEIX, 2020 : https://arxiv.org/ftp/arxiv/papers/2003/2003.08006.pdf

- VISUALIZATION AND ANALYSIS OF GEOGRAPHICAL CRIME PATTERNS USING FORMAL CONCEPT ANALYSIS, ArXiv 2013 : https://arxiv.org/ftp/arxiv/papers/1307/1307.8112.pdf

♣ Datasets :- Recompiled from several sources.

♣ Articles :-
- Vehicle thefts increase during Covid-19 pandemic, CTVNews : https://bit.ly/3ycQ0bD
- Cars vehicle theft spikes in Covid-19, TOI : https://bit.ly/3xfqhhy
- Los Angeles crimes in Covid-19 : https://bit.ly/3igjgIO
- Burglaries surge in Covid-19 : https://vrsk.co/3rYN4xb

**CREDITS**
- Design Resources : Freepik
- Icons : Icons8

---
# Takeways
### Accomplishments that we're proud of
A lot! In order for the Traviz to work, there were a lot of features that needed to be implemented. Apart from setting up the front end, we had to leverage a lot of extra hours to gather data on the web, cleaning & redefining them according to our needs. Moreover, we learned a lot about new web technologies and libraries that we could incorporate into our project to meet our unique needs.

We explored so many things within this short period ( We started late ;_; ). It was a tad difficult for us to collaborate in a virtual setting but we are proud of finishing the project on time which seemed like a tough task initially but happily were also able to add most of the concepts that we envisioned for the app during ideation. Lastly, we think the impact our project could have is a significant accomplishment. Especially, trailing the current scenario of COVID19, this could really be a product that people find useful!

This project was especially an achievement for us because this time the experience was very different than what we have while building typical hackathon projects, which also includes heavy brainstorming, extensive research, and yes, hitting the final pin on the board.

### What we learned
**Proper sleep is very important! :p** Well, a lot of things, both summed up in technical & non-technical sides. Also not to mention, we enhanced our googling and Stackoverflow searching skill during the hackathon :)

### What's next for Traviz
Finish the unfinished ones, which include integrating support to Android wear OS & iOS wear, updating the native dashboard followed by improvements in the model. Later, the code might be refactored for adding responsiveness & support for mobile devices. Apart from fine-tuning the project, we're also planning to add various filters and add support for Twilio, etc. Moreover, a lot of code needs to be refactored as we couldn't hit so much irrespective of starting late. Overall, we hope that one day this project can be widely used globally to redefine the existing & remove the backlogs.

Made with ❤️ for [Vizathon](https://vizathon-2021.devpost.com/) 2021. 
Devpost link : https://devpost.com/software/traviz
