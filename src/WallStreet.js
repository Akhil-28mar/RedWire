
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Card } from "react-native-paper";


export default function WallStreet() {
  const [data, setData] = useState([]);
  console.log(data);
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dbb5ee80701041e1b3c7724a74329873";

  const getArticles = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <>
      {Object.keys(data).length > 0 && (
        <ScrollView
          style={{
            backgroundColor: "red"
          }}>
          
            {data.articles.map((article, index) => (
              <Card key={index}
                style={
                  {
                    backgroundColor: "red"
                  }
                }>
                <View
                  style={{
                    flexDirection: "row",
                    //backgroundColor: "red",
                    justifyContent: "space-around",
                    alignItems: "center",
                    marginVertical: 30,
                  }}
                >
                  <Text style={{ fontSize: 18, fontWeight: "bold", flex: 1, color:"white" }}>
                    {article.title}
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: article.urlToImage }}
                      style={{
                        width: 150,
                        height: 150,
                        //backgroundColor: "red",
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16, color:"white"}}>{article.description}</Text>
                <Text>{article.publishedAt}</Text>
              </Card>
            ))}
          
        </ScrollView>
      )}
    </>
  );
};