var React = require('react-native');

var {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    ListView
} = React;

var tip = 0;
var bill;
var percentage;

class TipCalc extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    TipCalc
                </Text>
                <Text style={styles.author}>
                    By: Alexander Aron
                </Text>
                <Text style={styles.tip}>
                    Tip: ${tip}
                </Text>
                <Text style={styles.body}>
                    Bill:
                </Text>
                <View style={styles.input}>
                    <TextInput
                        style={{height: 20, width: 100, borderColor: 'black', borderWidth: 1}}
                        onChangeText={(text) => bill = text}
                    />
                </View>
                <Text style={styles.item}>
                    Tip%:
                </Text>
                <View style={styles.item}>
                    <TextInput
                        style={{height: 20, width: 100, borderColor: 'black', borderWidth: 1}}
                        onChangeText={(text) => percentage = text}
                    />
                </View>
                <TouchableHighlight onPress={this.calculateTip(bill, percentage)}>
                    <Text>
                        Calculate!
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
    calculateTip(b, p) {
        tip = b + (b*p);
        this.setState();
    }
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        //marginTop: 50,
        //color: '#333333',
    },
    author: {
        textAlign: 'center',
        fontSize: 20,
        //color: '#333333',
    },
    tip: {
        textAlign: 'center',
        fontSize: 60,
        marginTop: 40,
        marginBottom: 40,
    },
    item: {
        alignItems: 'center',
        marginBottom: 5,
    },
    body: {
        textAlign: 'center',
        //color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
