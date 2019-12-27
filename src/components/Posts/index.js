import React from 'react';
import {
    List
} from '@ui-kitten/components';
import {
    StyleSheet
} from 'react-native';
import PostItem from './PostItem';

class Posts extends React.Component {
    state = {
        refreshing: false
    }
    render() {
        const { data, refreshCb } = this.props;
        return (
            <List
                data={data}
                contentContainerStyle={styles.container}
                renderItem={({item}) => {
                    return (
                        <PostItem title={`${item.title.rendered}`} 
                        excerpt={`${item.excerpt.rendered}`} 
                        featured={item.featured_media}
                        />
                    );
                }}
                refreshing={this.state.refreshing}
                onRefresh={refreshCb}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
});

export default Posts;