import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from './reducer';

class RepoList extends React.Component {

    componentDidMount() {
        this.props.listRepos('relferreira');
    }

    renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );

    render() {
        return (
            <FlatList
                styles={{ flex: 1 }}
                data={this.props.repos}
                renderItem={this.renderItem}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

const mapStateToProps = (state) => {
    let storedRepositories = state.repos.map(repo => ({ key: repo.id, ...repo }));
    return {
        repos: storedRepositories
    };
};

const mapDispatchToProps = {
    listRepos
};

const List = connect(mapStateToProps, mapDispatchToProps)(RepoList);
export default List;