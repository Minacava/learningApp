import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./components/Logo";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back, </Title>
            <Name>Meng</Name>
            <Ionicons
              name="ios-notifications"
              size={32}
              color="#4775f2"
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30
            }}
            horizontal={true}
          >
            <Logo
              image={require("./assets/logo-framerx.png")}
              text="Framer X"
            />
            <Logo image={require("./assets/logo-figma.png")} text="Figma" />
          </ScrollView>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              title="Styled Components"
              image={require("./assets/background2.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 section"
            />
            <Card
              title="Styled Components"
              image={require("./assets/background1.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 section"
            />
            <Card
              title="Styled Components"
              image={require("./assets/background3.jpg")}
              caption="React Native"
              logo={require("./assets/logo-react.png")}
              subtitle="5 of 12 section"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background-color: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
