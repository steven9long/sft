import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherForecast = () => {
  const [weatherData, setWeatherData] = useState({
    date: "",
    sunrise: "",
    sunset: "",
    highestTemp: "N/A",
    lowestTemp: "N/A",
    humidity: "N/A",
    moonrise: "",
    moonset: "",
  });

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const [srsResponse, weatherResponse, mrsResponse] = await Promise.all([
          fetch(`https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=SRS&rformat=json&year=${year}&month=${month}&day=${day}`),
          fetch("https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en"),
          fetch(`https://data.weather.gov.hk/weatherAPI/opendata/opendata.php?dataType=MRS&rformat=json&year=${year}&month=${month}&day=${day}`),
        ]);

        if (!srsResponse.ok || !weatherResponse.ok || !mrsResponse.ok) {
          throw new Error("Failed to fetch data from one or more APIs");
        }

        const srsText = await srsResponse.text();
        const weatherText = await weatherResponse.text();
        const mrsText = await mrsResponse.text();

        //console.log("SRS Response:", srsText);
        //console.log("Weather Response:", weatherText);
        //console.log("MRS Response:", mrsText);

        const srsData = JSON.parse(srsText);
        const weatherData = JSON.parse(weatherText);
        const mrsData = JSON.parse(mrsText);

        const observatoryTemp = weatherData.temperature.data.find(item => item.place === "Hong Kong Observatory")?.value || "N/A";
        const observatoryHumidity = weatherData.humidity.data.find(item => item.place === "Hong Kong Observatory")?.value || "N/A";
        const highestTemp = weatherData.maxtempFrom00To09?.value || observatoryTemp;
        const lowestTemp = weatherData.mintempFrom00To09?.value || observatoryTemp;

        setWeatherData({
          date: srsData.data[0][0],
          sunrise: srsData.data[0][1],
          sunset: srsData.data[0][2],
          highestTemp: highestTemp,
          lowestTemp: lowestTemp,
          humidity: observatoryHumidity,
          moonrise: mrsData.data[0][1],
          moonset: mrsData.data[0][3],
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  if (!weatherData.date) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weather Forecast</Text>
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>{weatherData.date}</Text>
      </View>
      <View style={styles.dataRow}>
        <View style={styles.dataBox}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>☀️</Text>
            <Text style={styles.dataText}>{weatherData.sunrise}</Text>
          </View>
        </View>
        <View style={styles.dataBox}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>☀️</Text>
            <Text style={styles.dataText}>{weatherData.sunset}</Text>
          </View>
        </View>
        <View style={styles.dataBox}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>°C</Text>
            <Text style={styles.dataText}>{weatherData.lowestTemp}–{weatherData.highestTemp}</Text>
          </View>
        </View>
        <View style={styles.dataBox}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>💧</Text>
            <Text style={styles.dataText}>{weatherData.humidity}</Text>
          </View>
        </View>
      </View>
      <View style={styles.dataRow}>
        <View style={styles.dataBoxAlt}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>🌙</Text>
            <Text style={styles.dataText}>{weatherData.moonrise}</Text>
          </View>
        </View>
        <View style={styles.dataBoxAlt}>
          <View style={styles.inlineContent}>
            <Text style={styles.iconText}>🌙</Text>
            <Text style={styles.dataText}>{weatherData.moonset}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    textAlign: "436850",
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  dataBox: {
    height: 25,
    borderColor: "#85A98F",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  dataBoxAlt: {
    height: 25,
    borderColor: "#D8BFD8",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  inlineContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  iconText: {
    fontSize: 14,
  },
  dataText: {
    fontSize: 14,
    color: "#333",
  },
});

export default WeatherForecast;