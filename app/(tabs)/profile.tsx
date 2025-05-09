import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function Profile() {
  const webViewRef = useRef(null);

  const epubURL = "https://s3.amazonaws.com/moby-dick/OPS/package.opf"; // testable OPF from epub.js repo

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <script src="https://unpkg.com/epubjs/dist/epub.min.js"></script>
        <style>
          html, body { margin: 0; padding: 0; height: 100%; }
          #viewer { height: 100vh; }
        </style>
      </head>
      <body>
        <div id="viewer"></div>
        <script>
          const book = ePub("${epubURL}");
          const rendition = book.renderTo("viewer", {
            width: "100%",
            height: "100%",
          });
          rendition.display();
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        onMessage={(event) =>
          console.log("Message from WebView:", event.nativeEvent.data)
        }
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("WebView error: ", nativeEvent);
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("HTTP Error: ", nativeEvent);
        }}
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true} // Show loading spinner until content is loaded
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
