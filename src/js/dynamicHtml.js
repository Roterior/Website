window.onload = function() {

	//Header
	var h = create('header');
	document.body.appendChild(h);
	var h_div1 = create('div');
	h.appendChild(h_div1);
	var h_a1 = create('a');
	h_div1.appendChild(h_a1);
	h_a1.href = '#';
	h_a1.innerHTML = 'Search';
	var h_span1 = create('span');
	h_div1.appendChild(h_span1);
	h_span1.innerHTML = '|';
	var h_a2 = create('a');
	h_div1.appendChild(h_a2);
	h_a2.href = '#';
	h_a2.innerHTML = "My Movies";
	var h_div2 = create('div');
	h.appendChild(h_div2);
	h_div2.className = 'home';
	var h_span2 = create('span');
	h_div2.appendChild(h_span2);
	h_span2.innerHTML = 'MovieList';
	var h_a3 = create('a');
	h_div2.appendChild(h_a3);
	h_a3.href = '#';
	var h_img = create('img');
	h_a3.appendChild(h_img);
	h_img.src = 'img/icon.png';
	h_img.alt = 'logo';

	// Section
	var s = create('section');
	document.body.appendChild(s);
	s.className = 'container';
	var s_form1 = create('form');
	s.appendChild(s_form1);
	s_form1.name = 'select';
	s_form1.onsubmit = someData();
	s_form1.method = 'get';
	var s_div1 = create('div');
	s_form1.appendChild(s_div1);
	s_div1.className = 'selectors';

	// Section -> Select Movie Type
	var s_select1 = create('select');
	s_div1.appendChild(s_select1);
	s_select1.name = 'mType';
	var s_select1_arr = ['Select Type','Movie','TV Series'];
	selectList(s_select1_arr, s_select1);

	// Section -> Select Genre
	var s_select2 = create('select');
	s_div1.appendChild(s_select2);
	s_select2.name = 'genre';
	var s_select2_arr = ['Select Genre','Action','Adventure','Apocalypse','Comedy','Drama','Thriller'];
	selectList(s_select2_arr, s_select2);

	// Section -> Select Year
	var s_select3 = create('select');
	s_div1.appendChild(s_select3);
	s_select3.name = 'year';
	var date = new Date();
	var currentYear = date.getFullYear();
	var s_select3_arr = ['Select Year'];
	for (var i = currentYear; i > 1967; i--) {
		s_select3_arr.push(i);
	}
	selectList(s_select3_arr, s_select3);

	// Section -> Enter Title & Search Button
	var s_div2 = create('div');
	s_form1.appendChild(s_div2);
	s_div2.className = 'search_field';
	var s_input1 = create('input');
	s_div2.appendChild(s_input1);
	s_input1.name = 'title';
	s_input1.type = 'search';
	s_input1.placeholder = 'Search Movie...';
	s_input1.className = 'sbutton';
	var s_input2 = create('input');
	s_div2.appendChild(s_input2);
	s_input2.type = 'submit';
	s_input2.value = 'Search';
	s_input2.className = 'sfield';

	// Section -> Table
	var colsName = ['','Title','Type','Genre','Year','Rating'];
	var someMovie1 = {
		Img: 'venomPng',
		Title: "Venom",
		Type: "Movie",
		Genre: "Thriller",
		Year: 2018,
		Rating: 7.0
	};
	var someMovie2 = {
		Title: "The Walking Dead",
		Type: "TV Series",
		Genre: "Apocalypse",
		Year: 2010,
		Rating: 8.4
	};
	var Movies = [someMovie1, someMovie2];
	var s_table1 = create('table');
	s_table1.className = 'container table';
	s.appendChild(s_table1);
	createTable(s_table1, 30, colsName, Movies);

	// Section -> Navigation Bar
	var s_div3 = create('div');
	s.appendChild(s_div3);
	s_div3.className = 'page';
	var buttons = 7;
	for (var i = 0; i < buttons; i++) {
		var s_button1 = create('button');
		s_div3.appendChild(s_button1);
		if (i == 0) {
			s_button1.textContent = '<<';
		}
		else if (i == buttons - 1) {
			s_button1.textContent = '>>';
		}
		else {
		s_button1.textContent = i;
		}
	}

	// Footer
	document.body
	.appendChild(create('footer'))
	.appendChild(create('div'))
	.appendChild(create('span'))
	.textContent = 'Copyright © 2018 AlexIf. All rights reserved.';
}

function createTable(tableName, rows, colsName, Movies) {
	var z = 0;
	for (var i = 0; i < rows; i++) {
		var s_tr = create('tr');
		tableName.appendChild(s_tr);
		if (i == 0) {
			s_tr.className = 'trmain';
		}
		for (var j = 0; j < colsName.length; j++) {
			var s_td = create('td');
			s_tr.appendChild(s_td);
			s_td.textContent = 'Lorem Ipsum';
			if (i == 0) {
				s_td.textContent = colsName[j];
				if (j == 0) {
				s_td.textContent = '';
				}
			} else {
				s_td.textContent = Movies[z].Title;
				//document.write."<img src="img/venom.jpg"/>" 
			}
		}
		//if (j > 0) { z++; }
	}
}

function selectList(arrName, selectVar) {
	for (var i = 0; i < arrName.length; i++) {
		var s_option1 = create('option');
		selectVar.appendChild(s_option1).textContent = arrName[i];
		if (arrName[i] == arrName[0]) {
			s_option1.setAttribute('disabled', true);
			s_option1.setAttribute('selected', true);
		}
	}
}

function create(name) {
	return document.createElement(name);
}

function someData() {
	//var data = "";
	//if (document.forms["select"]["mType"].value != "Select Type")
		//data += document.forms["select"]["mType"].value;
	//if (document.forms["select"]["genre"].value != "Select Genre")
		//data += document.forms["select"]["genre"].value;
	//if (document.forms["select"]["year"].value != "Select Year")
		//data += document.forms["select"]["year"].value;
	//data += document.forms["select"]["title"].value;
	//alert(data);
}

function findAll() {
    $.ajax({
        type: 'GET',
        url: rootURL,
        dataType: "json", // data type of response
        success: renderList
    });
}
