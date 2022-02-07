import React, {useEffect, useRef} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const sliderWidth = viewportWidth;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const ChickenScreen = () => {
  const refWebView = useRef(null);
  const myScript = `
      document.body.style.backgroundColor = 'red';
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  console.log('refWebView', refWebView);
  useEffect(() => {
    if (refWebView.current) {
      refWebView.current.injectJavaScript(myScript);
    }
  }, [myScript]);

  return (
    <View style={{flex: 1}}>
      <WebView
        ref={refWebView}
        source={{
          uri: 'https://github.com/react-native-community/react-native-webview',
        }}
        injectedJavaScript={myScript}
      />
    </View>
  );
};
