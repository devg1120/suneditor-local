
import '/src/assets/css/suneditor.css'
import '/src/assets/css/suneditor-contents.css'
import suneditor from '/src/suneditor'
import plugins from '/src/plugins'
//import {en}  from '/src/lang'

let data1 = `
<h1><span style="color: rgb(255, 0, 0)">Hi</span></h1><h3>H3</h3><p><br></p><p><br></p><p>関西システム　　<span style="font-size: 18px;background-color: rgb(209, 178, 255)">機内</span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><br></p>
`;

let data2 = `
<div class="se-component se-video-container __se__float-none"><figure style="width: 515px; height: 290px; padding-bottom: 290px;"><iframe src="https://www.youtube.com/embed/OeuxE_frLgw" data-proportion="true" data-size="515px,290px" data-align="none" data-file-name="OeuxE_frLgw" data-file-size="0" data-origin="100%,56.25%" style="width: 515px; height: 290px;"></iframe></figure></div><h1><span style="color: rgb(255, 0, 0)">Hi</span></h1><h3>H3</h3><p><br></p><p><br></p><p>関西システム　　<span style="font-size: 18px;background-color: rgb(209, 178, 255)">機内</span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><span style="font-size: 18px;background-color: rgb(209, 178, 255)"><br></span></p><p><br></p>
`;

let data3 = `
<p>SunEditor</p>

<div class="se-component se-image-container __se__float-right">
  <figure style="margin: auto;">
    <img src="http://suneditor.com/docs/cat.jpg" data-align="right" alt="Tabby" data-rotate="" data-proportion="false" origin-size="640,426" data-origin="640,426" data-file-name="cat.jpg" data-file-size="0" data-size="," data-percentage="auto,auto" style="" data-index="0" data-rotatex="" data-rotatey="" width="" height="">
    <figcaption>
      <p>Insert description</p>
    </figcaption>
  </figure>
</div>


<h3>The Suneditor is based on pure JavaScript, with no dependencies.</h3>

<pre>
Suneditor is a lightweight, flexible, customizable WYSIWYG text editor for your web applications.</pre>

<blockquote>
  <p>Supports Chrome, Safari, Opera, Firefox, Edge, IE11, Mobile web browser.</p>
</blockquote>

<p><strong><span style="color: rgb(255, 94, 0)">SunEditor</span></strong><em><span style="background-color: rgb(250, 237, 125)">distributed under</span></em>&nbsp;the <a href="https://github.com/JiHong88/SunEditor/blob/master/LICENSE.txt" target="_blank">MIT</a> license.</p>

<hr>

<p><span style="font-size: 16px"><span style="font-family: Impact">Table</span></span></p>

<table class="se-table-size-auto">
  <thead>
    <tr>
      <th>
        <div>Column_1</div>
      </th>
      <th>
        <div>Column_2</div>
      </th>
      <th>
        <div>Column_3</div>
      </th>
      <th>
        <div>Column_4</div>
      </th>
      <th>
        <div>Column_5</div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
      <td>
        <div><br>
        </div>
      </td>
    </tr>
  </tbody>
</table>

<p><br>
</p>

<ul>
  <li>Pasting from Microsoft Word and Excel.</li>
  <li>Custom table selection, merge and split.</li>
  <li>Media embed, images upload.</li>
  <li>Can use CodeMirror, KaTeX.
    <ul>
      <li>And.. many other features :)</li>
    </ul>
  </li>
</ul>

<p><br>
</p>

<p> </p>
`;

let data4 = `
<p><span style="font-size: 24px"><span style="color: rgb(153, 0, 133)"><strong>SunEditor</strong></span></span></p>
<div class="se-component se-image-container __se__float-right">
   <figure style="margin: auto;">
      <img src="http://suneditor.com/docs/cat.jpg" data-align="right" alt="Tabby" data-rotate="" data-proportion="false" origin-size="640,426" data-origin="640,426" data-file-name="cat.jpg" data-file-size="0" data-size="," data-percentage="auto,auto" style="">
      <figcaption>
         <p>Insert description</p>
      </figcaption>
   </figure>
</div>
<h3>The Suneditor is based on pure JavaScript, with no dependencies.</h3>
<pre>Suneditor is a lightweight, flexible, customizable WYSIWYG text editor for your web applications.</pre>
<blockquote>
   <p>Supports Chrome, Safari, Opera, Firefox, Edge, IE11, Mobile web browser.</p>
</blockquote>
<p><strong><span style="color: rgb(255, 94, 0)">SunEditor</span></strong><em><span style="background-color: rgb(250, 237, 125)">distributed under</span></em>&nbsp;the <a href="https://github.com/JiHong88/SunEditor/blob/master/LICENSE.txt" target="_blank">MIT</a> license.</p>
<hr>
<p><span style="font-size: 16px"><span style="font-family: Impact">Table</span></span></p>
<table class="se-table-size-auto">
   <thead>
      <tr>
         <th>
            <div>Column_1</div>
         </th>
         <th>
            <div>Column_2</div>
         </th>
         <th>
            <div>Column_3</div>
         </th>
         <th>
            <div>Column_4</div>
         </th>
         <th>
            <div>Column_5</div>
         </th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
      </tr>
      <tr>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
      </tr>
      <tr>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
      </tr>
      <tr>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
      </tr>
      <tr>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
         <td>
            <div><br></div>
         </td>
      </tr>
   </tbody>
</table>
<p><br></p>
<ul>
   <li>Pasting from Microsoft Word and Excel.</li>
   <li>Custom table selection, merge and split.</li>
   <li>Media embed, images upload.</li>
   <li>
      Can use CodeMirror, KaTeX.    
      <ul>
         <li>And.. many other features :)</li>
      </ul>
   </li>
</ul>
<p><br></p>
`;

let ta = document.querySelector("#textarea")
ta.value = data4;


let editor = suneditor.create('textarea', {
    plugins: plugins,
    mode: 'classic',
	//  ('classic', 'inline', 'balloon', 'balloon-always'). default: 'classic' {String}

    buttonList: [
        ['undo', 'redo'],
        ['font', 'fontSize', 'formatBlock'],
        ['paragraphStyle', 'blockquote'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
        ['fontColor', 'hiliteColor', 'textStyle'],
        ['removeFormat'],
        '/', // Line break
        ['outdent', 'indent'],
        ['align', 'horizontalRule', 'list', 'lineHeight'],
        ['table', 'link', 'image', 'video', 'audio' ], // You must add the 'katex' library at options to use the 'math' plugin.
        ['fullScreen', 'showBlocks', 'codeView'],
        ['preview', 'print'],
        ['save', 'template'],
    ],
    resizingBar : false,
    showPathLabel: false,
    resizeEnable: true,
})

editor.readOnly(true);
editor.toolbar.hide();


// You can also load what you want
/*
suneditor.create('textarea', {
    plugins: [plugins.font],
    // Plugins can be used directly in the button list
    buttonList: [
        ['font', plugins.image]
    ]
})
*/

document.querySelector("#edit").onclick = () => {
       editor.readOnly(false);
       editor.toolbar.show();

};
document.querySelector("#view").onclick = () => {
       editor.readOnly(true);
       editor.toolbar.hide();
       editor.save();

};

document.querySelector("#save").onclick = () => {
        editor.save();
	let ta = document.querySelector("#textarea")
	console.log(ta.value);
};


