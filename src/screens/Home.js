import React from 'react';
import Posts from '../components/Posts';
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
        return (
            <Posts
                data={posts}
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