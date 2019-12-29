import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1)
  };
  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9
      }).start();
    }
    if (this.props.action == "closeMenu") {
      Animated.spring(this.state.scale, {
        toValue: 1
      }).start();
    }
  };
  render() {
    return (
      <AnimatedContainer
        style={{
          transform: [{ scale: this.state.scale }]
        }}
      >
        <Menu />
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity onPress={this.props.openMenu}>
                <Avatar source={require("../assets/avatar.jpg")} />
              </TouchableOpacity>
              <Title>Welcome back, </Title>
              <Name>Mina</Name>
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
              showsHorizontalScrollIndicator={false}
            >
              {logo.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <SubTitle>Continue Learning</SubTitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((cards, index) => (
                <Card
                  key={index}
                  title={cards.title}
                  image={cards.image}
                  caption={cards.caption}
                  logo={cards.logo}
                  subtitle={cards.subtitle}
                />
              ))}
            </ScrollView>
            <SubTitle>Popular Courses</SubTitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
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
`;

const SubTitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logo = [
  {
    image: require("../assets/logo-framerx.png"),
    text: " Framer X "
  },
  {
    image: require("../assets/logo-figma.png"),
    text: " Figma "
  },
  {
    image: require("../assets/logo-studio.png"),
    text: " Studio "
  },
  {
    image: require("../assets/logo-react.png"),
    text: " React "
  },
  {
    image: require("../assets/logo-swift.png"),
    text: " Swift "
  },
  {
    image: require("../assets/logo-sketch.png"),
    text: " Sketch "
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("../assets/background11.jpg"),
    subtitle: "React Native",
    caption: " 1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Style Components",
    image: require("../assets/background12.jpg"),
    subtitle: "React Native",
    caption: " 2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("../assets/background13.jpg"),
    subtitle: "React Native",
    caption: " 3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("../assets/background14.jpg"),
    subtitle: "React Native",
    caption: " 4 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
