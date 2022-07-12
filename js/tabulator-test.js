/* ************************************************************************* */
/* *****************       Tabulator       ********************************* */
/* ************************************************************************* */
document.getElementById('tabulator-lib').style.display = 'block';


//define data
var tabledata = [
    {id:1, name:"Billy Bob", age:12, gender:"male", height:95, col:"red", dob:"14/05/2010"},
    {id:2, name:"Jenny Jane", age:42, gender:"female", height:142, col:"blue", dob:"30/07/1954"},
    {id:3, name:"Steve McAlistaire", age:35, gender:"male", height:176, col:"green", dob:"04/11/1982"},
];

//define table
new Tabulator("#example-table", {
    data:tabledata,
    autoColumns:true,
    columns:[
        {title:"Name", field:"name", sorter:"string", width:200, editor:true},
        {title:"Age", field:"age", sorter:"number", hozAlign:"right", formatter:"progress"},
        {title:"Gender", field:"gender", sorter:"string", cellClick:function(e, cell){console.log("cell click")},},
        {title:"Height", field:"height", formatter:"star", hozAlign:"center", width:100},
        {title:"Favourite Color", field:"col", sorter:"string"},
        {title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
        {title:"Cheese Preference", field:"cheese", sorter:"boolean", hozAlign:"center", formatter:"tickCross"},
    ],
    autoColumnsDefinitions:function(definitions){
        //definitions - array of column definition objects

        definitions.forEach((column) => {
            column.headerFilter = true; // add header filter to every column
        });

        return definitions;
    },
});