function account(){
  document.getElementById("accounts").style.display = "block"
  document.getElementById("firstpage").style.display = "none"
  document.getElementById("personals").style.display = "none"
  document.getElementById("submits").style.display = "none"
}
function firstpage(){
  document.getElementById("accounts").style.display = "none"
  document.getElementById("firstpage").style.display = "block"
  document.getElementById("personals").style.display = "none"
  document.getElementById("submits").style.display = "none"
}
function personal(){
  document.getElementById("accounts").style.display = "none"
  document.getElementById("firstpage").style.display = "none"
  document.getElementById("personals").style.display = "block"
  document.getElementById("submits").style.display = "none"
}








function SubmitPage() {
  var yea = document.getElementById("year");
  var f_name = document.getElementById("first name");
  var l_name = document.getElementById("last name");
  var email = document.getElementById("Email");
  var password = document.getElementById("password");
  var re_password = document.getElementById("confirm password");
  var marks = document.getElementById("Marks");
  var father_name = document.getElementById("Father name");
  var DOB = document.getElementById("DOB");
  var cnic = document.getElementById("cnic");
  var address = document.getElementById("Address");
  var nationality = document.getElementById("nationality");
  var gender = document.getElementById("gender");
  var religion = document.getElementById("religion");
  var contact = document.getElementById("Contact");
  var post_code = document.getElementById("Post code");
  var rollno = document.getElementById("Roll no");
  // var subjecta = document.getElementById("subjects1");
  // var subjectb = document.getElementById("subjects2");
  // var subjectc = document.getElementById("subjects3");
  // var subjectd = document.getElementById("subjects4");
  // var subjecte = document.getElementById("subjects5");
  // var subjectf = document.getElementById("subjects6");
  var image = document.getElementById("Img");

   yearss = yea.value;
  //  sub1 = subjecta.value;
  //  sub2 = subjectb.value;
  //  sub3 = subjectc.value;
  //  sub4 = subjectd.value;
  //  sub5 = subjecte.value;
  //  sub6 = subjectf.value;
   a = f_name.value;
   b = l_name.value;
   c = email.value;
   d = password.value;
   e = re_password.value;
   f = marks.value;
   g = father_name.value;
   h = DOB.value;
   i = cnic.value;
   j = address.value;
   k = nationality.value;
   l = gender.value;
   m = religion.value;
   n = contact.value;
   o = post_code.value;
   p = rollno.value;
   q = image.value;


  years.innerHTML = "Year: " + yearss;
  s.innerHTML = "First Name: " + a;
  t.innerHTML = "Last Name:" + b;
  u.innerHTML = "Email:" + c;
  v.innerHTML = "Password: " + d;
  w.innerHTML = "Re-Password: " + e;
  x.innerHTML = "Marks: " + f;
  y.innerHTML = "Father Name: " + g;
  z.innerHTML = "Date of Birth: " + h;
  aa.innerHTML = "CNIC: " + i;
  ab.innerHTML = "Address: " + j;
  ac.innerHTML = "Nationality: " + k;
  ad.innerHTML = "Gender: " + l;
  ae.innerHTML = "Religion: " + m;
  af.innerHTML = "Contact: " + n;
  ag.innerHTML = "Post Code: " + o;
  ah.innerHTML = "Roll#: " + p;
  // subjectsa.innerHTML = "Subjectsa: " + suba
  // subjectsb.innerHTML = "Subjectsb: " + subb
  // subjectsc.innerHTML = "Subjectsc: " + subc
  // subjectsd.innerHTML = "Subjectsd: " + subd
  // subjectse.innerHTML = "Subjectse: " + sube
  // subjectsf.innerHTML = "Subjectsf: " + subf
  ai.innerHTML = "Image: " + q;

 
    document.getElementById("accounts").style.display = "none"
    document.getElementById("firstpage").style.display = "none"
    document.getElementById("personals").style.display = "none"
    document.getElementById("submits").style.display = "block"


  
}