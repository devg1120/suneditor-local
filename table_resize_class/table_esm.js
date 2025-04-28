export class Table {

  col_element;
  next_element;
  cursorStart;
  dragStart;
  width;
  height;
  th_width;
  next_width;
  next_height;
  resize;
  resize_left;
  table_wt;
  resizeCheck;


  constructor() {
    this.menu_list = [
      ["next insert row", this.next_insert_row],
      ["prev insert row", this.prev_insert_row],
      ["left insert col", this.left_insert_col],
      ["right insert col", this.right_insert_col],
    ];
    this.left_insert_col.bind(this)

  };

  init() {
    this.cursorStart = 0;
    this.dragStart = false;
    this.next_width = undefined;

    this.container = document.getElementById("container");
    this.table = this.container.querySelector("#table_resize");
   this.menu = this.container.querySelector("#context-menu");
    this.contextMenu = this.container.querySelector("#context-menu");

    //this.menu = document.getElementById("context-menu");
    //this.contextMenu = document.getElementById("context-menu");
console.log(this.menu);
console.log(this.contextMenu);
    this.table_th = this.table.getElementsByTagName("th");
    this.bodyRect = document.body.getBoundingClientRect();

    this.container.style.position = "relative";

    this.select_td = null;
    //this.tds = this.table.querySelectorAll("#table_resize  td");
    this.tds = this.table.querySelectorAll("td");

    this.table.addEventListener("contextmenu", (event) => {
      event.preventDefault();

      const { clientX: mouseX, clientY: mouseY } = event;

      //const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

      this.contextMenu.classList.remove("visible");

      //contextMenu.style.top = `${normalizedY}px`;
      //contextMenu.style.left = `${normalizedX}px`;
      this.contextMenu.style.top = `${mouseY}px`;
      this.contextMenu.style.left = `${mouseX}px`;

      setTimeout(() => {
        this.contextMenu.classList.add("visible");
      });
    });

    this.table.addEventListener("click", (e) => {
      //console.log("click");
      // ? close the menu if the user clicks outside of it
      if (e.target.offsetParent != this.contextMenu) {
        this.contextMenu.classList.remove("visible");
      }
    });
//  }

//  init() {
    this.menu_setup2();
    this.table_setid();
    //this.table_dump();
    this.setTdWidth(this.table);
    this.createResizeDiv();
    this.initEvents(this.table_th);
  }

  table_rows() {
    return this.table.rows.length;
  }

  table_cells() {
    return this.table.rows[0].cells.length;
  }

  next_insert_row = () => {
    this.contextMenu.classList.remove("visible");
    if (this.select_td == null) {
      return;
    }

    let param = this.select_td.id.split("_");
    let row_num = parseInt(param[1]);
    let tr = this.table.insertRow(row_num + 1);
    tr.style.height = "35px";
    for (let c = 0; c < this.table_cells(); c++) {
      let newCell = tr.insertCell();
      let newText = document.createTextNode("");
      newCell.appendChild(newText);
    }
    this.table_setid();
  }

  prev_insert_row = () => {
    this.contextMenu.classList.remove("visible");
    if (this.select_td == null) {
      return;
    }
    let param = this.select_td.id.split("_");
    let row_num = parseInt(param[1]);
    let tr = this.table.insertRow(row_num);
    tr.style.height = "35px";
    for (let c = 0; c < this.table_cells(); c++) {
      let newCell = tr.insertCell();
      let newText = document.createTextNode("");
      newCell.appendChild(newText);
    }
    this.table_setid();
  }
   
  left_insert_col = () => {
    console.log(this.menu);
    console.log(this.contextMenu);
    this.contextMenu.classList.remove("visible");
    if (this.select_td == null) {
      return;
    }
    let param = this.select_td.id.split("_");
    let col_num = parseInt(param[2]);
    let tbody = this.table.childNodes[1]; //tbody
    let r = 0;
    tbody.childNodes.forEach((tr) => {
      //console.log("nodeName", c.nodeName);
      if (tr.nodeName == "TR") {
        if (r == 0) {
          var th = document.createElement("th");
          //th.style.width = "125px";
          const right = document.querySelector("#TH_0_" + String(col_num));
          tr.insertBefore(th, right);
        } else {
          tr.insertCell(col_num);
        }
        r += 1;
      }
    });
    this.table_setid();
    this.table_th = this.table.getElementsByTagName("th");
    //setTdWidth(table);
    this.createResizeDiv();
    this.initEvents(this.table_th);
  }

  right_insert_col = () => {
    this.contextMenu.classList.remove("visible");
    if (this.select_td == null) {
      return;
    }
    let param = this.select_td.id.split("_");
    let col_num = parseInt(param[2]);
    let tbody = this.table.childNodes[1]; //tbody
    let r = 0;
    tbody.childNodes.forEach((tr) => {
      //console.log("nodeName", c.nodeName);
      if (tr.nodeName == "TR") {
        if (r == 0) {
          var th = document.createElement("th");
          //th.style.width = "125px";
          const right = this.table.querySelector("#TH_0_" + String(col_num + 1));
          tr.insertBefore(th, right);
        } else {
          tr.insertCell(col_num + 1);
        }
        r += 1;
      }
    });
    this.table_setid();
    this.table_th = this.table.getElementsByTagName("th");
    //setTdWidth(table);
    this.createResizeDiv();
    this.initEvents(this.table_th);
  }

  menu_setup() {
    //console.log("menu_setup");
    const div = document.createElement("div");
    const text = document.createTextNode("next insert row");
    div.appendChild(text);
    div.classList.add("item");
    div.addEventListener("click", () => {
      console.log("*****Clicked");
    });
    menu.appendChild(div);
  }

  menu_setup2() {
    this.menu_list.forEach((item) => {
      //console.log(item[0]);
      //console.log(item[1]);
      const div = document.createElement("div");
      const text = document.createTextNode(item[0]);
      div.appendChild(text);
      div.classList.add("item");
      div.addEventListener("click", item[1]);
      this.menu.appendChild(div);
    });
  }

  table_setid() {
    let tbody = this.table.childNodes[1]; //tbody
    let r = 0;
    tbody.childNodes.forEach((c) => {
      //console.log("nodeName", c.nodeName);
      if (c.nodeName == "TR") {
        c.id = `TR_${r}`;
        let d = 0;
        c.childNodes.forEach((c) => {
          //console.log("   nodeName", c.nodeName);
          if (c.nodeName == "TH") {
            c.id = `TH_${r}_${d}`;
            d += 1;
          }
          if (c.nodeName == "TD") {
            c.id = `TD_${r}_${d}`;
            d += 1;
          }
        });
        r += 1;
      }
    });
    //tds = document.querySelectorAll("#table_resize  td");
    this.tds = this.table.querySelectorAll("td");
    this.tds.forEach((td) => {
      td.removeEventListener("click", null);
      td.addEventListener("click", (e) => {
        //console.log("td click");
        if (this.select_td != null) {
          this.select_td.classList.remove("selected");
        }
        this.select_td = td;
        this.select_td.classList.add("selected");
      });
    });
  }

  table_dump() {
    console.log("table rows len", this.table.rows.length);
    console.log("table cells len", this.table.rows[0].cells.length);

    let tbody = this.table.childNodes[1]; //tbody
    let r = 0;
    tbody.childNodes.forEach((c) => {
      //console.log("nodeName", c.nodeName);
      if (c.nodeName == "TR") {
        console.log(c.nodeName);
        let d = 0;
        c.childNodes.forEach((c) => {
          //console.log("   nodeName", c.nodeName);
          if (c.nodeName == "TH") {
            console.log(" ", c.nodeName, r, d);
            d += 1;
          }
          if (c.nodeName == "TD") {
            console.log(" ", c.nodeName, r, d);
            d += 1;
          }
        });
        r += 1;
      }
    });
  }

  mouseDown = (e) => {
    //this.resize = this;
    this.resize = e.target;
    this.resizeCheck = this.resize.classList.contains("y_resize");
    var col_index = parseInt(this.resize.getAttribute("data-resizecol")) - 1;
    this.col_element = this.table_th[col_index];
    this.next_element = this.table_th[col_index + 1];
    this.dragStart = true;
    this.cursorStart = this.resizeCheck ? event.pageX : event.pageY;
    var elm_bound = this.col_element.getBoundingClientRect();
    this.width = elm_bound.width;
    this.table_wt = this.table.offsetWidth;
    if (this.next_element != undefined) {
      var next_bound = this.next_element.getBoundingClientRect();
      this.next_width = next_bound.width;
    }
    //this.resize_left = this.getBoundingClientRect().left - bodyRect.left;
    this.resize_left = this.resize.getBoundingClientRect().left - this.bodyRect.left;
  }

  mouseMove = () => {
    if (this.dragStart) {
      var cursorPosition = this.resizeCheck ? event.pageX : event.pageY;
      var mouseMoved = cursorPosition - this.cursorStart;
      var newLeft = this.resize_left + mouseMoved;
      var newWidth = this.width + mouseMoved;
      var new_nextWidth, new_nextHeight;
      if (this.next_element != undefined) {
        new_nextWidth = this.next_width - mouseMoved;
      }
      if (newWidth > 30 && (new_nextWidth > 30 || this.next_element == undefined)) {
        this.col_element.style.cssText = "width: " + newWidth + "px;";
        if (this.next_element != undefined) {
          this.next_element.style.cssText = "width: " + new_nextWidth + "px";
        } else {
          this.table.style.width = this.table_wt + mouseMoved + "px";
        }
        this.resize.style.cssText = "left: " + newLeft + "px;";
      }
    }
  }

  mouseUp = () => {
    if (this.dragStart) {
      this.dragStart = false;
    }
  }

  initEvents(table_th) {
    var tb_resize = this.container.getElementsByClassName("tb_resize");
    var th_length = this.table_th.length;
    for (var i = 0; i < th_length; i++) {
      document.body.addEventListener("mousemove", this.mouseMove);
      tb_resize[i].addEventListener("mousedown", this.mouseDown);
      tb_resize[i].addEventListener("mouseup", this.mouseUp);
      this.table_th[i].style.width = this.th_width + "px";
    }
  }

  setTdWidth = () => {
    var elm_bound = this.table.getBoundingClientRect();
	  console.log("elm_bound",elm_bound)
    var table_wt = elm_bound.width;
    var th_length = this.table_th.length;
     console.log("th_length",th_length)        

    this.th_width = table_wt / th_length;
             console.log("setTdWidth", this.th_width);

  }

  createResizeDiv() {
    //var cont = document.getElementById("container");
    const resizes = document.querySelectorAll(".y_resize");
    resizes.forEach((ele) => {
      ele.remove();
    });
    var th_length = this.table_th.length;
    for (var i = 1; i <= th_length; i++) {
	    console.log("creste Resize div");
      var yDiv = document.createElement("div");
      yDiv.className = "y_resize tb_resize";
      yDiv.setAttribute("data-resizecol", i);
      var leftPos = i * this.th_width + 0.5;
      console.log(this.th_width);
      console.log(leftPos);
      yDiv.style.cssText = "left: " + leftPos + "px;";
      this.container.append(yDiv);
    }
  }


} // class end

/*
//-------------------------------------
let col_element,
  next_element,
  cursorStart = 0,
  dragStart = false,
  width,
  height,
  th_width,
  next_width = undefined,
  next_height,
  resize,
  resize_left,
  table_wt,
  resizeCheck;

let container = document.getElementById("container"),
  table = document.getElementById("table_resize"),
  menu = document.getElementById("context-menu"),
  table_th = table.getElementsByTagName("th"),
  bodyRect = document.body.getBoundingClientRect();

container.style.position = "relative";

let select_td = null;
let tds = document.querySelectorAll("#table_resize  td");

function table_rows() {
  return table.rows.length;
}

function table_cells() {
  return table.rows[0].cells.length;
}

function next_insert_row() {
  contextMenu.classList.remove("visible");
  if (select_td == null) {
    return;
  }

  let param = select_td.id.split("_");
  let row_num = parseInt(param[1]);
  let tr = table.insertRow(row_num + 1);
  tr.style.height = "35px";
  for (let c = 0; c < table_cells(); c++) {
    let newCell = tr.insertCell();
    let newText = document.createTextNode("");
    newCell.appendChild(newText);
  }
  table_setid();
}

function prev_insert_row() {
  contextMenu.classList.remove("visible");
  if (select_td == null) {
    return;
  }
  let param = select_td.id.split("_");
  let row_num = parseInt(param[1]);
  let tr = table.insertRow(row_num);
  tr.style.height = "35px";
  for (let c = 0; c < table_cells(); c++) {
    let newCell = tr.insertCell();
    let newText = document.createTextNode("");
    newCell.appendChild(newText);
  }
  table_setid();
}

function left_insert_col() {
  contextMenu.classList.remove("visible");
  if (select_td == null) {
    return;
  }
  let param = select_td.id.split("_");
  let col_num = parseInt(param[2]);
  let tbody = table.childNodes[1]; //tbody
  let r = 0;
  tbody.childNodes.forEach((tr) => {
    //console.log("nodeName", c.nodeName);
    if (tr.nodeName == "TR") {
      if (r == 0) {
        var th = document.createElement("th");
        //th.style.width = "125px";
        const right = document.querySelector("#TH_0_" + String(col_num));
        tr.insertBefore(th, right);
      } else {
        tr.insertCell(col_num);
      }
      r += 1;
    }
  });
  table_setid();
  table_th = table.getElementsByTagName("th");
  //setTdWidth(table);
  createResizeDiv();
  initEvents(table_th);
}

function right_insert_col() {
  contextMenu.classList.remove("visible");
  if (select_td == null) {
    return;
  }
  let param = select_td.id.split("_");
  let col_num = parseInt(param[2]);
  let tbody = table.childNodes[1]; //tbody
  let r = 0;
  tbody.childNodes.forEach((tr) => {
    //console.log("nodeName", c.nodeName);
    if (tr.nodeName == "TR") {
      if (r == 0) {
        var th = document.createElement("th");
        //th.style.width = "125px";
        const right = document.querySelector("#TH_0_" + String(col_num + 1));
        tr.insertBefore(th, right);
      } else {
        tr.insertCell(col_num + 1);
      }
      r += 1;
    }
  });
  table_setid();
  table_th = table.getElementsByTagName("th");
  //setTdWidth(table);
  createResizeDiv();
  initEvents(table_th);
}

const menu_list = [
  ["next insert row", next_insert_row],
  ["prev insert row", prev_insert_row],
  ["left insert col", left_insert_col],
  ["right insert col", right_insert_col],
];

function menu_setup() {
  //console.log("menu_setup");
  const div = document.createElement("div");
  const text = document.createTextNode("next insert row");
  div.appendChild(text);
  div.classList.add("item");
  div.addEventListener("click", () => {
    console.log("*****Clicked");
  });
  menu.appendChild(div);
}

function menu_setup2() {
  menu_list.forEach((item) => {
    //console.log(item[0]);
    //console.log(item[1]);
    const div = document.createElement("div");
    const text = document.createTextNode(item[0]);
    div.appendChild(text);
    div.classList.add("item");
    div.addEventListener("click", item[1]);
    menu.appendChild(div);
  });
}

function table_setid() {
  let tbody = table.childNodes[1]; //tbody
  let r = 0;
  tbody.childNodes.forEach((c) => {
    //console.log("nodeName", c.nodeName);
    if (c.nodeName == "TR") {
      c.id = `TR_${r}`;
      let d = 0;
      c.childNodes.forEach((c) => {
        //console.log("   nodeName", c.nodeName);
        if (c.nodeName == "TH") {
          c.id = `TH_${r}_${d}`;
          d += 1;
        }
        if (c.nodeName == "TD") {
          c.id = `TD_${r}_${d}`;
          d += 1;
        }
      });
      r += 1;
    }
  });
  tds = document.querySelectorAll("#table_resize  td");
  tds.forEach((td) => {
    td.removeEventListener("click", null);
    td.addEventListener("click", (e) => {
      //console.log("td click");
      if (select_td != null) {
        select_td.classList.remove("selected");
      }
      select_td = td;
      select_td.classList.add("selected");
    });
  });
}

function table_dump() {
  console.log("table rows len", table.rows.length);
  console.log("table cells len", table.rows[0].cells.length);

  let tbody = table.childNodes[1]; //tbody
  let r = 0;
  tbody.childNodes.forEach((c) => {
    //console.log("nodeName", c.nodeName);
    if (c.nodeName == "TR") {
      console.log(c.nodeName);
      let d = 0;
      c.childNodes.forEach((c) => {
        //console.log("   nodeName", c.nodeName);
        if (c.nodeName == "TH") {
          console.log(" ", c.nodeName, r, d);
          d += 1;
        }
        if (c.nodeName == "TD") {
          console.log(" ", c.nodeName, r, d);
          d += 1;
        }
      });
      r += 1;
    }
  });
}

function mouseDown() {
  resize = this;
  resizeCheck = resize.classList.contains("y_resize");
  var col_index = parseInt(resize.getAttribute("data-resizecol")) - 1;
  col_element = table_th[col_index];
  next_element = table_th[col_index + 1];
  dragStart = true;
  cursorStart = resizeCheck ? event.pageX : event.pageY;
  var elm_bound = col_element.getBoundingClientRect();
  width = elm_bound.width;
  table_wt = table.offsetWidth;
  if (next_element != undefined) {
    var next_bound = next_element.getBoundingClientRect();
    next_width = next_bound.width;
  }
  resize_left = this.getBoundingClientRect().left - bodyRect.left;
}

function mouseMove() {
  if (dragStart) {
    var cursorPosition = resizeCheck ? event.pageX : event.pageY;
    var mouseMoved = cursorPosition - cursorStart;
    var newLeft = resize_left + mouseMoved;
    var newWidth = width + mouseMoved;
    var new_nextWidth, new_nextHeight;
    if (next_element != undefined) {
      new_nextWidth = next_width - mouseMoved;
    }
    if (newWidth > 30 && (new_nextWidth > 30 || next_element == undefined)) {
      col_element.style.cssText = "width: " + newWidth + "px;";
      if (next_element != undefined) {
        next_element.style.cssText = "width: " + new_nextWidth + "px";
      } else {
        table.style.width = table_wt + mouseMoved + "px";
      }
      resize.style.cssText = "left: " + newLeft + "px;";
    }
  }
}

function mouseUp() {
  if (dragStart) {
    dragStart = false;
  }
}

function initEvents(table_th) {
  var tb_resize = container.getElementsByClassName("tb_resize");
  var th_length = table_th.length;
  for (var i = 0; i < th_length; i++) {
    document.body.addEventListener("mousemove", mouseMove);
    tb_resize[i].addEventListener("mousedown", mouseDown);
    tb_resize[i].addEventListener("mouseup", mouseUp);
    table_th[i].style.width = th_width + "px";
  }
}

function setTdWidth() {
  var elm_bound = table.getBoundingClientRect();
  var table_wt = elm_bound.width;
  var th_length = table_th.length;
  th_width = table_wt / th_length;
}

function createResizeDiv() {
  var cont = document.getElementById("container");
  const resizes = document.querySelectorAll(".y_resize");
  resizes.forEach((ele) => {
    ele.remove();
  });
  var th_length = table_th.length;
  for (var i = 1; i <= th_length; i++) {
    var yDiv = document.createElement("div");
    yDiv.className = "y_resize tb_resize";
    yDiv.setAttribute("data-resizecol", i);
    var leftPos = i * th_width + 0.5;
    yDiv.style.cssText = "left: " + leftPos + "px;";
    cont.append(yDiv);
  }
}


export const x = 199;

export function mclick(n) {
  console.log("mclick", n);
  contextMenu.classList.remove("visible");
  if (select_td == null) {
    return;
  }
  let id = select_td.id;
  alert(`option ${n}   select ${id}`);
}
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("#table_resize");

const normalizePozition = (mouseX, mouseY) => {
  // ? compute what is the mouse position relative to the container element (scope)
  let { left: scopeOffsetX, top: scopeOffsetY } = scope.getBoundingClientRect();

  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  // ? check if the element will go out of bounds
  const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  // ? normalize on X
  if (outOfBoundsOnX) {
    //console.log("X on");
    normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    //console.log("Y on");
    //normalizedY =
    //  scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }

  //  console.log("X", normalizedX);
  //  console.log("Y", normalizedY);

  return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  //const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.classList.remove("visible");

  //contextMenu.style.top = `${normalizedY}px`;
  //contextMenu.style.left = `${normalizedX}px`;
  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});

scope.addEventListener("click", (e) => {
  //console.log("click");
  // ? close the menu if the user clicks outside of it
  if (e.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});


menu_setup2();
table_setid();
//table_dump();
setTdWidth(table);
createResizeDiv();
initEvents(table_th);
*/
