import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

class ImageOverlay extends React.Component {
    
    render() {
        const { children, ...restProps } = this.props;
        return (
            <ImageBackground
                {...restProps}
                >
                <View style={styles.overlay} />
                {children}
            </ImageBackground>
        );

    }
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        ...StyleSheet.absoluteFillObject,
      },
});

export default ImageOverlay;