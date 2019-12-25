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

    componentDidMount() {
        const { featured, onGetFeatured } = this.props;
        if(featured != 0) {
            onGetFeatured(featured);
        }
    }

    render() {
        const { title, excerpt, featured, mediaList } = this.props;
        const src = mediaList[featured] ? mediaList[featured].media_details.sizes['post-thumbnail'].source_url : 'https://img3.thuthuatphanmem.vn/uploads/2019/09/30/anh-background-giot-nuoc_111421147.jpg';
        console.log(src);
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
    mediaList: state.media.mediaList
});

const mapDispatchToProps = dispatch => ({
    onGetFeatured: (id) => {
      dispatch(getFeaturedImage(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);