import { Dimensions, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function ChartSimples({titulo, legenda, parametro, leituras}) {
    let strLeituras = '';

    leituras.forEach((leitura, i) => {
      strLeituras += `['CD ${leitura.condensadorId.toString().padStart(2, '0')}', ${leitura[parametro]}, '${leitura[parametro]}', 'color: #5384BC']` + (i != leituras.length-1 ? ',' : '');
    });

    const htmlSource = `<html><head><script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script><script type="text/javascript">google.charts.load('current',{'packages':['corechart']});google.charts.setOnLoadCallback(drawChart);function drawChart(){const data=google.visualization.arrayToDataTable([['Condensador','${legenda}',{role: 'annotation'},{role: 'style'}],${strLeituras}]);const options={title:'${titulo}',backgroundColor:'#161D30',chartArea:{width:'75%',height:'70%'},height:1200,colors:['#5384BC'],titleTextStyle:{color:'#5781B1',fontSize:52},annotations:{textStyle:{color:'#FFF',fontSize:36},},legend:{textStyle:{color:'#FFF',fontSize:36},position:'top'},hAxis:{textStyle:{color:'#FFF',fontSize:36},},vAxis:{textStyle:{color:'#FFF',fontSize:36}}};const chart=new google.visualization.BarChart(document.getElementById('chart'));chart.draw(data,options);}</script></head><body style="background-color: #263A55"><div id="chart"></div></body></html>`;

    return (<WebView style={styles.chart} source={{html: htmlSource}}></WebView>);
}

const styles = StyleSheet.create({
  chart: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});