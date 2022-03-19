const problemStatements = [
  {
    id: 1,
    title:
      "To develop AI-based systems for automatic detection of Rice crop disease detection systems from the visual data captured from the fields.",
    content: {
      des: `One of the effective control methods is disease identification based on the analysis of digital images, with the possibility of obtaining them in field conditions, using mobile devices. 
      You must purpose a method for the recognition of class of rice disease.
      This problem focuses on designing a system for disease diagnosis in rice using a public dataset of images of diseased and healthy rice collected either from the internet or directly from fields under varying conditions. The students can use machine learning, deep learning, computer vision, or any of the techniques they find suitable to achieve the task of disease identification in rice.
      From an input test image of rice crop, the trained learning model should be able to detect whether or not the image has diseased crop and if yes, then the model should be able to classify the class of disease present in the image and if the image has no disease, then classify it as "healthy" class. Each image belongs to only a single class.
      `,
      data: `"Dataset_PS1" contains labelled images of 7 classes, 6 disease classes and one "Healthy" class. These are separated in 7 folders, one folder for each class. There is a "test" folder containing a mix of images from all classes that is meant for testing of model at the end. 
      The recognition method must be implemented as a bot on the Telegram platform, which allows users to assess plants by lesions in the field conditions. You have to implement the bot on Telegram as reported in the paper mentioned in Problem statement-1. It should be multilingual and support Hindi, English and Punjabi. It will better if you implement the feature of speech recognition in this telegram bot. After recognising the disease, bot must guide the farmer for the possible treatment of the disease. For possible treatment of each disease you can search the web and recommend the farmer accordingly. Also watch this video for better understanding
      https://youtu.be/I2D1LnMyJbA`,
      link: `https://drive.google.com/drive/u/2/folders/13TSUWfHxa-syL9wO4RLgv3Q83Bpyz3pr`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 2,
    title:
      "Develop a learning-based disease detection system that can identify the class of disease based on the Wheat crop.",
    content: {
      des: `One of the effective control methods is disease identification based on the analysis of digital images, with the possibility of obtaining them in field conditions, using mobile devices. 
      You must purpose a method for the recognition of five fungal diseases of wheat shoots (leaf rust, stem rust, yellow rust, powdery mildew, and septoria), both separately and in case of multiple diseases, with the possibility of identifying the stage of plant development. A set of 2414 images of wheat fungi diseases (WFD2020) was generated by Genaev et al.,  for which expert labeling was performed by the type of disease. More than 80% of the images in the dataset correspond to single disease labels (including seedlings), more than 12% are represented by healthy plants, and 6% of the images labeled are represented by multiple diseases.`,
      data: `The recognition method must be implemented as a bot on the Telegram platform, which allows users to assess plants by lesions in the field conditions. You have to implement the bot on Telegram as reported in the paper. It should be multilingual and support Hindi, English and Punjabi. It will better if you implement the feature of speech recognition in this telegram bot. After recognising the disease, bot must guide the farmer for the possible treatment of the disease. For possible treatment of each disease you can search the web and recommend the farmer accordingly. Also watch this video for better understanding
      https://youtu.be/I2D1LnMyJbA`,
      link: `https://drive.google.com/drive/u/2/folders/1C8_BMk7LUiHmR0vysFQl-AAEgfNURViR`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 3,
    title:
      "Develop a learning-based Weed detection system that can identify the class of weed based on Rice crop and Wheat Crop.",
    content: {
      des: `Weeds are harmful, sometimes poisonous plants that grow in a crop field where they are not desired. They negatively impact the growth of the crop, and eventually, it affects the quality and quantity of production. The aim of this problem statement is to create an artificial intelligence powered system that detects weeds in rice and wheat crop, when the input is in the form of images. By detection, we mean detecting the weed in an image either in the form of segments or bounded boxes and classifying its correct class. Using the dataset which contains images of rice and wheat with weeds, and annotations giving details of classes of weeds, the teams need to create a model that identifies weeds’ locations in an image and their classes, correctly and optimally, employing any of the available techniques like machine learning, deep learning, computer vision, etc.`,
      data: `For an input test image of the crop, the model should be able to detect weeds in the image and classify them into the correct class. The location of weeds needs to be output as a Bounding box along with the probability of the class of weed. The folder "problem statement 3" contains 4 folders "wheat_weeds", "wheat_weeds1", "wheat_weeds2", "wheat_weeds3". All these folders contain a folder "images" (that has the images of crop) and the corresponding annotations file called "weedcoco.json" (the annotations file follows the COCO format). There is a "test" folder that contains images on which the model will be finally tested. 
      This is just a sample database and you are encouraged to find appropriate dataset over web for rice and wheat weeds. 
      The recognition method must be implemented as a bot on the Telegram platform, which allows users to assess plants by lesions in the field conditions. You have to implement the bot on Telegram as reported in the paper mentioned in Problem statement-1. It should be multilingual and support Hindi, English and Punjabi. It will better if you implement the feature of speech recognition in this telegram bot. After recognising the disease, bot must guide the farmer for the possible treatment of the disease. For possible treatment of each disease you can search the web and recommend the farmer accordingly. Also watch this video for better understanding
      https://youtu.be/I2D1LnMyJbA`,
      link: `https://drive.google.com/drive/u/2/folders/1H78zipb7QfpxIibvAQ-oyUIE9O14omKO`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like accuracy of detection, correctness of the classification, time taken in detection, rate of false positives etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 4,
    title:
      "Develop a smart App for PA (precision agriculture) to generate irrigation schedule recommendations based on real-time weather and short-term forecasted data to better meet the plant water needs of a given period, conserving water while also minimizing nutrient leaching from the root zone due to excessive irrigation.",
    content: {
      des: `With challenges like resource scarcity, climate change, etc. it has become imperative that the requirements of any crop like the amount of water needed for irrigation, amount of nutrients to be supplied to the crop throughout its life cycle etc. be calculated precisely. 
This problem statement is formulated to create an application that gives information about irrigation requirements for a crop. The application obtains values of parameters that affect irrigation requirements of a crop using remote and on-ground sensors and then using suitable methods and known knowledge, calculates the quantity of water required for irrigation daily or as required regularly. The input parameters include soil moisture, temperature, pressure, humidity and luminosity (sunlight). The teams need to derive relation between these parameters and the water need of the crop such that the yield of the crop is maximized and resource utilization is optimal. Keep in mind the other parameters that affect the final result like the crop type and its growth stage. And on that basis, the application should provide the time/schedule of irrigation and amount of irrigation needed. 
Based on Crop Irrigation needs as suggested by Food and Agriculture Organization in their white paper on Irrigation and Drainage Paper given below designed the algorithm to calculate the water needs based on type of crop, soil type, age of the crop etc. Functional Requirements: 1.) Location of field identified must be identified automatically by GPS 2.) The area of the field needs to be input by the farmer. 3.) Choices to set the type of crop 4.) Choices to select the age of the crop. 5.) Based on that get weather details by using weather API. 6.) Then based on this it must display the water requirements. 7.) Then it should do scheduling of this and store the amount of water irrigated daily/weekly/monthly and so on. 8.) Graphs and analysis of irrigation (daily/weekly/monthly) must be done. 9.) For GUI you can refer https://smartirrigationapps.org/; Cotton App | SmartIrrigationApps.org`,
      data: `N/A`,
      link: `https://drive.google.com/drive/u/2/folders/1UrDqf8cn7LuK3CDydPOlGLf9tE2-EpcA`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like mean square error, time complexity of the prediction algorithm and how optimal the prediction is. Other than these parameters, the novelty of the idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 5,
    title:
      "Develop a forecasting model based on remote sensing data to predict yield. This remote sensing data will be mapped with sensor data to build an AI-based system.",
    content: {
      des: `Forecasting environmental parameters like temperature, soil moisture, humidity etc. is an important task in precision agriculture as these parameters affect the yield of crops. The accurate prediction of these parameters can help a farmer plan well in terms of irrigation needs and other requirements so as to maximize crop yield both in terms of quality as well as quantity. This problem statement is formulated with a twofold aim in mind. First, to study existing patterns of environmental parameters like humidity, air temperature etc. using data collected through on ground sensors or remote sensing, across a time series to predict future values of these environmental parameters. And second, to formulate the relationship between these parameters and the yield of crop. To be precise, the teams are expected to predict yield values based on these input parameters.`,
      data: `There are 3 csv files, KVK_ORG1.xlsx and KVK_Field_sensor1.xlsx contain values of environmental parameters, soil moisture, humidity, temperature, pressure, and luminosity (sunlight) collected through on-ground sensors in regular intervals. Vegetation indices.xlsx contains values of different vegetation indices. The teams have to analyze this data to make a time series prediction model that predicts values of environmental parameters, soil moisture, humidity, temperature, pressure, and luminosity (sunlight) for the next interval. Also, the teams have to predict the final yield of the wheat crop based on these parameters. The teams are free to use any model or technique to achieve the task. You are encouraged to develop prediction of time-series data by using LSTM and ARIMA etc.`,
      link: `https://drive.google.com/drive/u/2/folders/1UrDqf8cn7LuK3CDydPOlGLf9tE2-EpcA`,
      eval: `The forecasting model will be evaluated on various evaluation parameters like mean squared error, mean absolute error, etc. Other than these parameters, the novelty of idea behind the proposed model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 6,
    title:
      "Develop a learning-based automatic labeling system on images for specified classes. This will help us to create labeled data for AI systems.",
    content: {
      des: `For an input test image of the crop, the model should be able to label/annotate the image, i.e. locate weeds in the image and label them with the correct class. The location of weeds needs to be output as a bounding box along with the probability of the class of weed.
      There are 6 classes- lolium rigidum, rapistrum rugosum, sonchus oleraceus, raphanus raphanistrum, wheat.`,
      data: `The folder "problem statement 6" contains a folder "images" that contains images of crops. You are expected to create an unsupervised learning-based model using these images that labels these images, i.e. locate weed and crop in the image and specify their class. There is a "test" folder that contains images on which the model will be finally tested.`,
      link: `https://drive.google.com/drive/u/2/folders/1vC_HeZYpbeDPIo42cgL46xhwli4end5P`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like correctness of labeling, time complexity, etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 7,
    title:
      "To develop IoT Based Smart & Automatic Irrigation System with Node MCU ESP8266 or ESP32, soil sensor, solenoid valve with support of Mobile App.",
    content: {
      des: "Based on the soil moisture contents measured from the sensor node installed in the field, the automatic irrigation system should control the water tap.Functional Requirements: 1.) The water content should be measured through a soil moisture sensor node and pushed to the cloud-based mobile app. 2.) The water contents should be accessed by the farmer of the field from anywhere through the mobile app. 3.)  If the value of the water content threshold reaches the lower level (dry field) the water tap placed in the field may start irrigation automatically and stops whenever sufficient water content level (wet field) shows above the threshold. 4.)  The solenoid valve connected to the water tap must be controlled automatically through the wireless mode based on the water level threshold displayed through the mobile app.",
      data: `N/A`,
      link: `https://drive.google.com/drive/u/2/folders/1UrDqf8cn7LuK3CDydPOlGLf9tE2-EpcA`,
      eval: `The submitted solution will be evaluated on various evaluation parameters like time complexity, accuracy of the model, etc. Other than these parameters, the novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
  {
    id: 8,
    title: "Open challenges of precision agriculture.",
    content: {
      des: `As the name suggests, this problem statement is formulated to tackle any open challenge of precision agriculture domain. The students can choose any such problem and formulate a solution for the same. The problem can be related to farm management software or hardware, smart farming, robotics, data analysis etc. Students can choose to work on any public dataset or create one of their own.`,
      data: `Any public dataset can be chosen by students to work on or they can create a dataset of their own.`,
      link: `<dataset link>`,
      eval: `The chosen problem and how it solves existing issues of precision farming will be a major criteria of evaluation. Depending on the problem, the submitted solution will be evaluated on conventional parameters like accuracy, mean square error, correlation etc. in regression problem, specificity, sensitivity, ROC etc. in classification problem and other relevant evaluation parameters according to open problem selected by the team. The novelty of idea behind the proposed architecture/model/algorithm and scope of improvement in the submitted solution will also be key parameters for evaluation.`,
    },
  },
];

export default problemStatements;
