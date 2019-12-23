import React from 'react';
import {
    List,
    ListItem,
} from '@ui-kitten/components';
import { connect } from 'react-redux';
import { getPosts } from '../actions';

const data = new Array(8).fill({
    title: 'Item',
});
class Home extends React.PureComponent {
    componentDidMount() {
        this.props.onGetPosts();
    }

    render() {
        const { posts } = this.props;
        const renderItem = ({ item }) => (
            <ListItem title={`${item.title.rendered}`} 
            description={`${item.excerpt.rendered}`} />
        );
        return (
            <List
                data={posts}
                renderItem={renderItem}
            />
        );
    }
}

const mapStateToProps = state => ({
    posts: state.post.postList,
});

const mapDispatchToProps = dispatch => ({
    onGetPosts: () => {
      dispatch(getPosts());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);