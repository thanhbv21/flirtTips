import React from 'react';
import PropTypes from 'prop-types';
import { 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { Text } from '@ui-kitten/components'
import ImageOverlay from '../ImageOverlay';
import { textStyle } from '../TextStyle'
import { connect } from 'react-redux';
import { getFeaturedImage } from '../../actions';

const propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    featured: PropTypes.number
  };
  
  const defaultProps = {
    title: '',
    excerpt: '',
    featured: ''
  };
  

class PostItem extends React.PureComponent {
    state = {
        featuredImage: ''
    }

    componentDidMount() {
        const { featured, onGetFeatured } = this.props;
        if(featured != 0) {
            onGetFeatured(featured);
        }
    }

    static getDerivedStateFromProps(props, state) {
        if(state.featuredImage === '') {
            if(props.media.mediaList.length > 0 && props.media.mediaList[props.featured]) {
                return {
                    featuredImage: props.media.mediaList[props.featured].source_url
                }
            } 
        }
        return null;
    }

    render() {
        const { title, excerpt } = this.props;
        const { featuredImage } = this.state;
        const src = featuredImage === '' ? 'https://img3.thuthuatphanmem.vn/uploads/2019/09/30/anh-background-giot-nuoc_111421147.jpg' : featuredImage;
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.container}
                >
                    <ImageOverlay 
                        style={styles.image}
                        source={{
                        uri: src
                    }}>

                    <Text 
                        style={styles.titleLabel}
                        category='h4'
                    >{title}</Text>
                    </ImageOverlay>
                    
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        minHeight: 220,
        borderRadius: 12,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 24,
        paddingBottom: 16,
      },
      titleLabel: {
        maxWidth: 192,
        color: 'white',
        // ...textStyle.headline,
      },
});

PostItem.propTypes = propTypes;
PostItem.defaultProps = defaultProps;

const mapStateToProps = state => ({
    media: state.media,
});

const mapDispatchToProps = dispatch => ({
    onGetFeatured: (id) => {
      dispatch(getFeaturedImage(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);