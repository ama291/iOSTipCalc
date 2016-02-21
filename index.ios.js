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

class TipCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tip: 0,
            bill: null,
            percentage: null,
            total: 0,
        };
    }
    //called exactly after the component is loaded
    componentDidMount() {

    }
    render() {
        var tip = this.state.tip;
        var bill = this.state.bill;
        var percentage = this.state.percentage;
        var total = this.state.total;
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
                <Text style={styles.total}>
                    Total: ${total}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.body}>Bill: </Text>
                    <View style={styles.input}>
                        <TextInput
                            style={{height: 20, width: 100, borderColor: 'black', borderWidth: 1}}
                            onChangeText={(text) => this.setState({ bill: parseInt(text), })}
                        />
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.item}>Tip %: </Text>
                    <View style={styles.item}>
                        <TextInput
                            style={{height: 20, width: 100, borderColor: 'black', borderWidth: 1}}
                            onChangeText={(text) => this.setState({ percentage: parseInt(text), })}
                        />
                    </View>
                </View>
                <View style={styles.br}></View>
                <TouchableHighlight onPress={() => this.setState({ tip: parseFloat((bill*(percentage/100))).toFixed(2), total: parseFloat(bill + (bill*(percentage/100))).toFixed(2), })}>
                    <Text style={styles.button}>
                        Calculate!
                    </Text>
                </TouchableHighlight>
            </View>
        );
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
        marginBottom: 10,
    },
    total: {
        textAlign: 'center',
        fontSize: 60,
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
    button: {
        fontSize: 30,
    },
    br: {
        marginBottom: 20,
    },
});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
