(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://formLastName-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://formName.dailymail.co.uk/formName/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://formName.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://formName.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];


    var studentsProps = Object.keys(students[0]);
    studentsProps.splice(studentsProps.indexOf('coverImg'),1);
    studentsProps.push('controls');
    console.log(studentsProps);

    var newTable = document.createElement('TABLE');
        newTable.classList.add('table');
        newTable.classList.add('table-hover');
    var newTableHead = document.createElement('THEAD');
        newTable.appendChild(newTableHead);
    var newTrTitle = document.createElement('TR');
    for (var j = 0; j < studentsProps.length; j++) {
        var newTh = document.createElement('TH');
        newTh.innerText = studentsProps[j].toUpperCase();
        newTrTitle.appendChild(newTh);
    }
        newTableHead.appendChild(newTrTitle);
    document.getElementById('container').appendChild(newTable);

    function renderBody() {
        var newTableBody = document.createElement('TBODY');
        newTable.appendChild(newTableBody);
        for (var i = 0; i < students.length; i++) {
            var studentTR = document.createElement('TR');
            studentTR.id = i;
            for (var j = 0; j < studentsProps.length; j++) {
                var studentTD = document.createElement('TD');
                if(studentsProps[j]==='img'){
                    var studentImg = document.createElement('IMG');
                    studentImg.src = students[i].img;
                    studentTD.appendChild(studentImg);
                    studentTR.appendChild(studentTD);
                }  else if(studentsProps[j]==='controls') {
                    var spanEdit =  document.createElement('SPAN');
                    spanEdit.classList.add('glyphicon');
                    spanEdit.classList.add('glyphicon-edit');
                    spanEdit.setAttribute('id','edit');
                    var spanRemove = document.createElement('SPAN');
                    spanRemove.classList.add('glyphicon');
                    spanRemove.setAttribute('id','remove');
                    spanRemove.classList.add('glyphicon-trash')
                    studentTD.appendChild(spanEdit);
                    studentTD.appendChild(spanRemove);
                    studentTR.appendChild(studentTD);
                } else {
                    studentTD.innerText = students[i][studentsProps[j]];
                    studentTR.appendChild(studentTD);
                }
                //studentTR.appendChild(studentTD);
            }
            newTableBody.appendChild(studentTR);
        }
        newTable.appendChild(newTableBody);
        document.getElementById('container').appendChild(newTable);
    }
    function deleteBody() {
        var elem = document.querySelector("TBODY");
        elem.remove();
    }
    renderBody();
    var index = -1;
    var indexTwo = -1;
    newTable.addEventListener('click', function (e) {

        var element = e.target.parentNode.childNodes[1].innerText;
        var sortBy = e.target.innerText;
        function compare(a,b) {
            // if (a[sortBy.toLowerCase()] < b[sortBy.toLowerCase()])
            //     return -1;
            // if (a[sortBy.toLowerCase()] < b[sortBy.toLowerCase()])
            //     return 1;
            // return 0;
            if(sortBy === 'LASTNAME'){
                var nameA=a.lastName.toLowerCase(), nameB=b.lastName.toLowerCase();
                if (nameA < nameB) //sort string ascending
                    return -1;
                if (nameA > nameB)
                    return 1;
                return 0; //default return value (no sorting)

            }
            var nameA=a[sortBy.toLowerCase()].toLowerCase(), nameB=b[sortBy.toLowerCase()].toLowerCase();
            if (nameA < nameB) //sort string ascending
                return -1;
            if (nameA > nameB)
                return 1;
            return 0; //default return value (no sorting)

        }
        if(e.target && element === 'LASTNAME' ){
            console.log('dinay');
            students.sort(compare);
            console.log('this'+sortBy);
            console.log(students);
            deleteBody();
            renderBody();
        }


        alert(element);
        for (var i = 0; i < students.length; i++) {
            if (students[i].lastName === element) {
                index = i;
            }
        }
        console.log('my papa', e.target.parentNode.parentNode.childNodes[1]);
        console.log('index ' + index);
        if(e.target && e.target.id == 'edit'){

            var formElements = document.querySelectorAll('form')[0];
            for (var i = 0; i < formElements.length - 2; i++) {
                formElements[i].value = students[e.target.parentNode.parentNode.id][studentsProps[i]];
            };
            formElements[1].disabled = true;
        };

        if(e.target && e.target.id == 'remove'){
            var formElements = document.querySelectorAll('form')[0];
            // for (var i = 0; i < formElements.length - 2; i++) {
            //     formElements[i].value = students[index][studentsProps[i]];
            // };
            console.log(students.splice(e.target.parentNode.parentNode.id,1));
            console.log(students);
            deleteBody();
            renderBody();

        };
    });


    var submitForm = document.createElement("form");

    var formName = document.createElement("input"); //input element, text
    formName.setAttribute('type',"text");
    formName.setAttribute('placeholder','Name');
    formName.classList.add('form-control');
    formName.setAttribute('value','Seb');
    formName.required = true;

    var formLastName = document.createElement("input"); //input element, Submit button
    formLastName.setAttribute('type',"text");
    formLastName.setAttribute('placeholder',"Last Name");
    formLastName.setAttribute('value','Vettel');
    formLastName.classList.add('form-control');
    formLastName.required = true;

    var formEmail = document.createElement("input"); //input element, Submit button
    formEmail.setAttribute('type',"email");
    formEmail.setAttribute('placeholder',"Email");
    formEmail.setAttribute('value','seb@vet');
    formEmail.classList.add('form-control');
    formEmail.required = true;

    var formProfilePic = document.createElement("input"); //input element, Submit button
    formProfilePic.setAttribute('type',"text");
    formProfilePic.setAttribute('placeholder',"Profile pic");
    formProfilePic.setAttribute('value','https://www.looktracker.com/wp-content/uploads/2014/06/Choose-Eye-Tracking-User-Test-Website-URL.png');
    formProfilePic.classList.add('form-control');
//formProfilePic.required = true;

    var formSkills = document.createElement("input"); //input element, Submit button
    formSkills.setAttribute('type',"text");
    formSkills.setAttribute('placeholder',"Skills");
    formSkills.classList.add('form-control');
    formSkills.setAttribute('value','JQUERY');
    formSkills.required = true;

    var buttonSubmit = document.createElement("input"); //input element, Submit button
    buttonSubmit.setAttribute('type',"button");
    buttonSubmit.classList.add('btn');
    buttonSubmit.setAttribute('value','Save');

    var buttonCancel = document.createElement("input"); //input element, Submit button
    buttonCancel.setAttribute('type',"button");
    buttonCancel.classList.add('btn');
    buttonCancel.setAttribute('value','Cancel');
    submitForm.appendChild(formName);
    submitForm.appendChild(formLastName);
    submitForm.appendChild(formProfilePic);
    submitForm.appendChild(formEmail);
    submitForm.appendChild(formSkills);
    submitForm.appendChild(buttonSubmit);
    submitForm.appendChild(buttonCancel);
    document.getElementById('container').insertBefore(submitForm,newTable);





    buttonCancel.addEventListener('click', function () {
        var formElements = document.querySelectorAll('form')[0];
        for (var j = 0; j < formElements.length-2; j++) {
            formElements[j].value = null;
        }
        formElements[1].disabled = false;
    });


    buttonSubmit.addEventListener('click', function (e) {
        var formElements = document.querySelectorAll('form')[0];
        formElements[1].disabled = false; //you are not allowed to change cuz it`s key field
        for (var i = 0; i < students.length; i++) {
            if (students[i].lastName === formElements[1].value) {
                indexTwo = i;
            }
        }
        function nameValidation() {
            var txt = "";
            if (formElements[0].validity.valueMissing) {
                txt = formElements[0].placeholder + ' missinig';
                alert(txt);
                return false;
            } else {
                return true;
            }
        }
        function lastNameValidation() {
            var txt = "";
            if (formElements[1].validity.valueMissing) {
                txt = formElements[1].placeholder + ' missinig';
                alert(txt);
                return false;
            } else {
                return true;
            }
        }
        function pictureValidation() {
            var txt = "";
            if (formElements[2].validity.valueMissing) {
                txt = formElements[2].placeholder + ' missinig';
                alert(txt);
                return false;
            } else {
                return true;
            }
        }

        console.log('indexTwo'+indexTwo);
        if(indexTwo === -1) {
           if(nameValidation() && lastNameValidation() && pictureValidation()){
               students.push({
                   name: formElements[0].value,
                   lastName: formElements[1].value,
                   img: formElements[2].value,
                   coverImg: null,
                   email: formElements[3].value,
                   skills: formElements[4].value
               });
               deleteBody();
               renderBody();
               console.log(students);
               for (var j = 0; j < formElements.length-2; j++) {
                   formElements[j].value = null;
               }
           }

        } else {
            nameValidation();
            students[indexTwo] = {
                name: formElements[0].value,
                lastName: formElements[1].value,
                img: formElements[2].value,
                coverImg: null,
                email: formElements[3].value,
                skills: formElements[4].value
            };
            indexTwo = -1;
            console.log(students);

            deleteBody();
            renderBody();
            for (var j = 0; j < formElements.length-2; j++) {
                formElements[j].value = null;
            }
        }


        console.log('triggered');
    });
})();


