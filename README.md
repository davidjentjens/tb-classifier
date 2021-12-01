<center>
  <h1 align="center">Tuberculosis Classifier</h1>
  <div align="center">
    <img src="https://prod-images-static.radiopaedia.org/images/16357056/f0383135c7c3c2d55eedefffe9ece8_jumbo.jpeg" height="128px">
    <img src="https://prod-images-static.radiopaedia.org/images/2802824/9097405bba7d96b21f10cb008a9551_jumbo.jpg" height="128px">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Dense_opacity_of_primary_pulmonary_tuberculosis.jpg" height="128px">
    <img src="https://www.researchgate.net/profile/Ali-Khan-98/publication/47567125/figure/fig25/AS:202500230651943@1425291225792/Primary-Mycobacterium-tuberculosis-Chest-X-ray-shows-right-upper-lobe-and-left-midzone.png" height="128px">
  </div>
  <br/>
  <div align="center">
    <img alt="GitHub" src="https://img.shields.io/github/license/davidjentjens/tb-classifier?style=flat-square">
    <img alt="Website" src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Ftbclassify.netlify.app%2F">
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/davidjentjens/tb-classifier?style=flat-square">
  </div>
  <br/><br/>
</center>

This project presents a React-based Web Application which is able to take in images of X-Rays of patients lungs, predicting whether or not the lungs are infected with Tuberculosis, with a given confidence score. The Web App is hosted under the following domain: [https://tbclassify.netlify.app](https://tbclassify.netlify.app).

**DISCLAIMER: This project is not meant to be used for medical purposes. It is for academical purposes only.**

## Data

The data for this project comes from the kaggle dataset [Pulmonary Chest X-Ray Abnormalities](https://www.kaggle.com/kmader/pulmonary-chest-xray-abnormalities). It is divided into testing and training data on download.

## Context

This project was developed for the purposes handing in an assessment for completing the Computational Vision course at PUC-Rio, under the supervision of professor Marcelo Gattass.

## Prediction
The model used for predicting outcomes was trained using the training tool [Teachable Machine](https://teachablemachine.withgoogle.com), developed by Google. The training data was fed into the algorithm, which produced a model that could be loaded by the interface, being able to generate predictions.

## Usage
This project is completely open-source and may be used by anyone for academical or commercial purposes. To run the project, follow these steps:

1. Install NodeJS and yarn in your local machine
2. cd into the project source folder
3. Run `yarn` in your command prompt, to install the necessary dependencies
4. Run `yarn start` to run the project in your browser
5. Enjoy :)
