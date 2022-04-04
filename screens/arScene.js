//https://viro-community.readme.io/docs/overview
//https://github.com/viromedia/viro/tree/master/code-samples/js/360PhotoTour/res


import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  ViroARTrackingTargets,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlaneSelector,
  ViroScene,
  ViroFlexView,
  ViroARPlane,
  ViroImage,
  ViroNode,
} from '@viro-community/react-viro';
import usePressability from 'react-native/Libraries/Pressability/usePressability';
import {back} from 'react-native/Libraries/Animated/Easing';

var infoIconImage = require('../assets/icon_info.png');
var backImage = require('../assets/icon_back.png');

const InitialScene = () => {
  const [showPlane, setShowPlane] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [backButton, setBackbutton] = useState(false);


  ViroAnimations.registerAnimations({
    rotate: {
      duration: 2500,
      properties: {
        rotateY: '+=90',
      },
    },
  });

  ViroARTrackingTargets.createTargets({
    wappen: {
      source: require('../assets/Wappen2.jpg'),
      orientation: 'down',
      physicalWidth: 0.165,
    },
  });

  const anchorFound = () => {
    console.log('Anchor Image detected');
    setShowDescription(true);
    setShowPlane(true);
  };

  const showObject = () => {
    if (showPlane) {
      return (
        <ViroARPlaneSelector
          onClick={(position, source) => {
            setBackbutton(true);
          }}>
          <Viro3DObject
            source={require('../assets/windmill/windmill.obj')}
            position={[0, 0, -4]}
            scale={[0.025, 0.025, 0.025]}
            type="OBJ"
            // rotation={[0, 0, 10]}
            dragType="FixedDistance"
            onDrag={() => {}}
            animation={{name: 'rotate', loop: true, run: true}}
          />
        </ViroARPlaneSelector>
      );
    }
  };
  const showBackButton = () => {
    if (showDescription) {
      return (
        <ViroNode
          onClick={(position, source) => {
            setShowDescription(false);
            setShowPlane(false);
            setBackbutton(false);
            console.log('Click', position, source);
          }}>
          <ViroImage
            transformBehaviors={['billboard']}
            position={[-1, -1, -3]}
            width={1}
            height={1}
            opacity={1.0}
            scale={[0.5, 0.5, 0.5]}
            source={backImage}
          />
        </ViroNode>
      );
    }
  };

  const description = () => {
    if (showDescription && !backButton) {
      return (
        <ViroNode
          onClick={(position, source) => {
            console.log('Click', position, source);
          }}>
          <ViroFlexView
            style={styles.titleContainer}
            position={[0, 0, -11]}
            rotation={[0, 0, 0]}
            height={2}
            width={4}
            onDrag={() => {}}>
            <ViroText
              text="Die Windmühle De Meenkmolen stammt aus dem Jahre 1851. Ihren Namen erbte sie vom nahegelegenen Bauernhof Meenk..."
              style={styles.prodDescriptionText}
            />
            <ViroText
              text="Klicke auf eine graue Fläche, um das Objekt zu platzieren"
              height={1}
              width={8}
              style={{color: 'red'}}
            />
          </ViroFlexView>
        </ViroNode>
      );
    }
    if (showDescription && backButton) {
      return (
        <ViroNode
          onClick={(position, source) => {
            setShowDescription(false);
            setShowPlane(false);
            console.log('Click', position, source);
          }}>
          <ViroFlexView
            style={styles.titleContainer}
            position={[0, 0, -11]}
            rotation={[0, 0, 0]}
            height={2}
            width={4}
            onDrag={() => {}}>
            <ViroText
              text="Die Windmühle De Meenkmolen stammt aus dem Jahre 1851. Ihren Namen erbte sie vom nahegelegenen Bauernhof Meenk.
              Seit 1990 ist die Mühle ab und an in Betrieb und mahlt ausschließlich mit Windkraft."
              style={styles.prodDescriptionText}
            />
          </ViroFlexView>
        </ViroNode>
      );
    }
  };

  const infoIcon = () => {
    if (!showDescription) {
      return (
        <ViroNode
          onClick={(position, source) => {
            setShowDescription(true);
            setShowPlane(true);
            console.log('Click', position, source);
          }}>
          <ViroImage
            transformBehaviors={['billboard']}
            position={[0, 0, -5]}
            width={1}
            height={1}
            opacity={1.0}
            scale={[0.5, 0.5, 0.5]}
            source={infoIconImage}
          />
        </ViroNode>
      );
    }
  };

  return (
    <ViroARScene>
      <ViroAmbientLight color="#ffffff" />
      <ViroARImageMarker target="wappen" onAnchorFound={anchorFound} />
      {infoIcon()}
      {description()}
      {showObject()}
      {showBackButton()}
    </ViroARScene>
  );
};

export default ARScene = () => {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: InitialScene}}
      styles={{flex: 1}}
      autofocus={true}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 50,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffffdd',
    padding: 0.2,
  },
  clickContainer: {
    backgroundColor: 'red',
  },
  prodDescriptionText: {
    fontFamily: 'sans-serif-light',
    fontSize: 14,
    color: '#222222',
    textAlignVertical: 'center',
    textAlign: 'left',
    flex: 1,
  },
});
