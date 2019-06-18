    // HTML5 FileReaer
var reader = new FileReader();

function md_view(ev){
    var target = ev.target;
    var file = target.files[0];
    console.log('file: ');
    console.log(file);

    reader.readAsText(file);
    reader.onload = function(e){
        if(reader.result){
            console.log('get text');
        } else {
            console.log('Error get text');
        }
        console.log('result:');
        console.log(reader.result);
        replaced_val = reader.result.replace(/(\n|.)+\\begin\{thebibliography/,'\\begin{thebibliography');
        console.log(replaced_val);
        replaced_val = replaced_val.split(',');
        console.log(replaced_val);
        //document.getElementById("output").innerHTML = marked(replaced_val);
        document.getElementById("output").innerHTML = replaced_val;
    }
};

function md_file_load(){
    var inputFile = document.getElementById('file');

    inputFile.addEventListener('change', md_view, false);
};
