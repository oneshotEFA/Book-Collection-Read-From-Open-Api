import {
  ActivityIndicator,
  PanResponder,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import ICONS from "react-native-vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AlertComponent from "../componets/AlretComponet";
const BookTetx = () => {
  const { url, info } = useLocalSearchParams();
  const [error, seterror] = useState("");
  const [alert, setalert] = useState(false);
  const ScrollRef = useRef<ScrollView>(null);
  const bookUrl = Array.isArray(url) ? url[0] : url;
  const [bookText, setBookText] = useState("");
  const [loading, setLoading] = useState(true);
  const CHUNK_SIZE = 1200;
  const [page, setPage] = useState(0);
  const BookTitle = ({ title }: any) => {
    return (
      <>
        <View className="flex-row mb-5 justify-center items-center">
          <ICONS color="white" size={30} name="book" />
          <Text className="ml-2 font-bold text-white">{title}</Text>
        </View>
      </>
    );
  };
  const SkeltonText = () => {
    return (
      <>
        <View className="flex-row mb-5 justify-center items-center">
          <ICONS color="white" size={30} name="book" />
          <View className="ml-2 w-30 h-15 font-bold bg-white " />
        </View>
        <ScrollView className="border-2 border-third rounded-lg mb-10 bg-blur">
          {Array.from({ length: 25 }).map((_, index) => (
            <View
              className="rounded-sm h-15 mb-10 mt-12 m-8"
              key={index}
              style={[
                {
                  height: 15,
                  width: `${93}%`,
                  marginBottom: 10,
                  backgroundColor: "#3c94bb",
                  margin: 8,
                  marginTop: 12,
                },
              ]}
            />
          ))}
        </ScrollView>
      </>
    );
  };

  const fetchText = async () => {
    try {
      setLoading(true);
      setPage(0);
      setBookText("");

      const response = await fetch(decodeURIComponent(bookUrl));
      let text = await response.text();
      const titleIndex = text.toLowerCase().indexOf("title:");
      if (titleIndex !== -1) {
        text = text.slice(titleIndex);
      }
      setBookText(text);
    } catch (error) {
      console.error("Error loading book:", error);
      seterror("error: " + error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url === null) {
      return;
    } else {
      fetchText();
    }
  }, [url]);

  const totalPages = Math.ceil(bookText.length / CHUNK_SIZE);

  const pageText = bookText.slice(page * CHUNK_SIZE, (page + 1) * CHUNK_SIZE);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return Math.abs(gestureState.dx) > 15;
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -30) {
        if (page < totalPages - 1) {
          setPage(page + 1);
          setTimeout(() => {
            ScrollRef.current?.scrollTo({ y: 0, animated: true });
          }, 100);
        }
      } else if (gestureState.dx > 30) {
        if (page > 0) {
          setPage(page - 1);
          setTimeout(() => {
            ScrollRef.current?.scrollTo({ y: 0, animated: true });
          }, 100);
        }
      }
    },
  });

  useEffect(() => {
    if (error) {
      setalert(true);
    }
  }, [error]);

  return (
    <SafeAreaProvider>
      <SafeAreaView className={`flex-1 p-5 bg-secondary`}>
        <AlertComponent
          errordetail={error}
          visible={alert}
          onCancel={() => setalert(false)}
          onRetry={() => {
            seterror("");
            fetchText();
            setalert(false);
          }}
        />
        {loading ? (
          <>
            {/* <ScrollView className="border-2 border-secondary rounded-lg mb-10 bg-blur">
              <ActivityIndicator
                className="  mt-60 items-center justify-center"
                color="black"
              />
            </ScrollView> */}
            <SkeltonText />
          </>
        ) : (
          <>
            <BookTitle title={info} />
            <View className="flex-1 " {...panResponder.panHandlers}>
              <ScrollView
                ref={ScrollRef}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10, padding: 10 }}
                className="border-2 border-secondary  rounded-lg mb-10 bg-third"
              >
                <Text style={{ color: "white", fontSize: 16, lineHeight: 24 }}>
                  {pageText}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <Text
                    onPress={() => {
                      if (page > 0) {
                        setPage(page - 1);
                        setTimeout(() => {
                          ScrollRef.current?.scrollTo({ y: 0, animated: true });
                        }, 100);
                      }
                    }}
                    style={{ color: "blue" }}
                  >
                    Previous
                  </Text>
                  <Text style={{ color: "brown" }}>
                    {page + 1} / {totalPages}
                  </Text>
                  <Text
                    onPress={() => {
                      if (page < totalPages - 1) {
                        setPage(page + 1);
                        setTimeout(() => {
                          ScrollRef.current?.scrollTo({ y: 0, animated: true });
                        }, 100);
                      }
                    }}
                    style={{ color: "blue" }}
                  >
                    Next
                  </Text>
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default BookTetx;
