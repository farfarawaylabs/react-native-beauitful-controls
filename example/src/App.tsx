import React, { useState } from 'react';
import {
  View,
  Image,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  ButtonEffectType,
  RoundedButton,
  FacebookLoginButton,
  GoogleLoginButton,
  Overlay,
  Carousel,
  AnimatedListItem,
  Typography,
  Styles,
  Screen,
} from '@farfarawaylabs/react-native-beauitful-controls';

import { Center, Col, Row } from '@farfarawaylabs/react-native-layout';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <ShowOverlay />
    </SafeAreaProvider>
  );
}

const ShowRoundedButtons = () => {
  return (
    <View style={{ marginTop: 200, alignItems: 'center' }}>
      <RoundedButton
        backgroundColor="#ffd8a6"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Opacity}
        textColor="#ff427f"
        onPress={() => {}}
      />
      <RoundedButton
        backgroundColor="#00005c"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Native}
        textColor="#FFF"
        onPress={() => {}}
      />
      <RoundedButton
        backgroundColor="#58b4ae"
        title="This is a button"
        width={300}
        effectType={ButtonEffectType.Native}
        textColor="#ffe277"
        onPress={() => {}}
      />
    </View>
  );
};

const ShowSocialLoginButtons = () => {
  return (
    <>
      <Center horizontal vertical>
        <FacebookLoginButton onPress={() => {}} />
        <GoogleLoginButton onPress={() => {}} />
      </Center>
      <Center horizontal vertical />
    </>
  );
};

const ShowCarousel = () => {
  const demoBgImage = require('../demoImages/demoBG.jpg');
  const demoBgImage2 = require('../demoImages/demoBG2.png');
  const demoBgImage3 = require('../demoImages/demoBG3.png');
  return (
    <Center horizontal vertical>
      <Carousel.Container width={400} height={400}>
        <Carousel.Slides
          onSelectedSlideChanged={(selectedSlide) => console.log(selectedSlide)}
        >
          <Image source={demoBgImage} />
          <Image source={demoBgImage2} />
          <Image source={demoBgImage3} />
        </Carousel.Slides>
        <Carousel.Navigation />
      </Carousel.Container>
    </Center>
  );
};

const ShowOverlay = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Center vertical horizontal>
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button title="This is just a button" onPress={() => {}} />
        <Button
          title="Show Overlay"
          onPress={() => {
            setVisible(true);
          }}
        />
      </Center>

      <Overlay visible={visible} blurAmount={8}>
        <Center horizontal vertical>
          <Text>Just a random text</Text>
          <Button
            title="Hide Overlay"
            onPress={() => {
              setVisible(false);
            }}
          />
        </Center>
      </Overlay>
    </>
  );
};

const ShowAnimatedListItem = () => {
  const [indexToRemove, setIndexToRemove] = useState(-1);
  const [items, setItems] = useState(['joe', 'moe', 'merry', 'buck']);

  return (
    <Center horizontal style={{ marginTop: 100 }}>
      <Button
        title="Add Item"
        onPress={() => {
          setItems([...items, `${new Date().getTime()}`]);
        }}
      />
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <AnimatedListItem
            isRemoved={index === indexToRemove}
            onRemoveAnimationEnded={() => {
              const clone = items.slice();
              clone.splice(index, 1);
              console.log(clone);
              setIndexToRemove(-1);
              setItems(clone);
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: 200,
                marginBottom: 20,
                borderWidth: 1,
              }}
              onPress={() => setIndexToRemove(index)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          </AnimatedListItem>
        )}
        keyExtractor={(item) => item}
      />
    </Center>
  );
};

const ShowStyles = () => {
  return (
    <Screen>
      <Row>
        <Col>
          <View style={Styles.MainTheme.screenHeader}>
            <Text style={Styles.MainTheme.screenTitle}>Screen Title</Text>
          </View>
          <View style={Styles.MainTheme.defaultScreenHorizontalMargin}>
            <Text style={Styles.MainTheme.title}>Title</Text>
            <Text style={Styles.MainTheme.subTitle}>Subtitle</Text>
            <Text style={Styles.MainTheme.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col>
          <View style={Styles.MainTheme.screenHeader}>
            <Typography.ScreenTitle>Screen Title</Typography.ScreenTitle>
          </View>
          <View style={Styles.MainTheme.defaultScreenHorizontalMargin}>
            <Typography.Title>Title</Typography.Title>
            <Typography.Subtitle>Subtitle</Typography.Subtitle>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Typography.Paragraph>
          </View>
        </Col>
      </Row>
    </Screen>
  );
};
