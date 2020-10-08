import React, { Fragment, useState } from "react";
import { Modal } from "react-bootstrap";

import { connect } from "react-redux";
import Select from "react-select";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { setAlert } from "../../actions/alert";
import { addAbstruct } from "../../actions/research";
import Alert from "../Layout/Alert";
import FormInput from "../form-input/form-input.component";
import { m2, m4, m6, m8, m10, m12, m14, m16, m18, m20 } from "../sections";

const Regester = ({ lang, setAlert, addAbstruct }) => {
  // for modals
  const [addModals, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // for regester
  const [Research, setResearch] = useState({
    researchName: "",
    abstruct: "",
    theHub: "",
    author: "",
    email: "",
    phone: "",
    country: "",
    Organization: "",
    Qualification: "",
    TypeOfParticipation: "",
    Degree: "",
    author1: "",
    email1: "",
    author2: "",
    email2: "",
  });

  const theHubSource = [
    m2[lang],
    m4[lang],
    m6[lang],
    m8[lang],
    m10[lang],
    m12[lang],
    m14[lang],
    m16[lang],
    m18[lang],
    m20[lang],
  ];

  const [paper, setPaper] = useState("");
  const [filename, setFilename] = useState(
    "  تحميل ملف الورقة البحثية / Upload the Paper   "
  );
  const onChange = (e) => {
    setResearch({ ...Research, [e.target.name]: e.target.value });
  };

  const onChangefile = (e) => {
    if (
      e.target.files[0].type === "application/pdf" ||
      e.target.files[0].type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      e.target.files[0].type === "application/msword"
    ) {
      setPaper(e.target.files[0]);
      setFilename(e.target.files[0].filename);
    } else {
      setAlert(
        "الملف غير مدعوم ارجو التأكد من ان يكون الملف بصيغة pdf او doc",
        "danger"
      );
    }
  };

  const onChangeSelect = (selected) => {
    setResearch({ ...Research, theHub: selected.value });
  };

  let options = [];
  theHubSource.map((hub) =>
    options.push({
      value: hub,
      label: hub,
    })
  );

  const {
    researchName,
    abstruct,
    theHub,
    author,
    email,
    phone,
    country,
    Organization,
    Qualification,
    TypeOfParticipation,
    Degree,
    author1,
    email1,
    author2,
    email2,
  } = Research;

  const onSubmit = () => {
    if (
      researchName === "" ||
      abstruct === "" ||
      // theHub === "" ||
      author === "" ||
      email === "" ||
      phone === "" ||
      country === "" ||
      Organization === "" ||
      TypeOfParticipation === "" ||
      Qualification === "" ||
      Degree === "" ||
      filename === " CV / تحميل ملف السيرة الذاتية "
    ) {
      setAlert("كل الحقول مطلوبة عدا الباحث التاني و الثالث", "danger");
    } else {
      addAbstruct(
        paper,
        researchName,
        abstruct,
        theHub,
        author,
        email,
        phone,
        country,
        Organization,
        Qualification,
        TypeOfParticipation,
        Degree,
        author1,
        email1,
        author2,
        email2
      );
      setAlert(
        `تم ارسال بيانات التسجيل علي الايميل ${email} في حالة عدم الرد في مدة اقصاها 10 ايام يمكنك الاتصال بالمنسقين`,
        "success"
      );
      setResearch({
        researchName: "",
        abstruct: "",
        theHub: "",
        author: "",
        email: "",
        phone: "",
        country: "",
        Organization: "",
        Qualification: "",
        TypeOfParticipation: "",
        Degree: "",
        author1: "",
        email1: "",
        author2: "",
        email2: "",
      });
    }
  };

  return (
    <Fragment>
      {/*  eslint-disable-next-line */}
      <a className="btn btn-our" onClick={handleShow}>
        <i class="material-icons left">border_color</i>{" "}
        {lang === "ar" ? "التسجيل في المؤتمر" : "Register for the conference"}
        <span className="bg"></span>
      </a>

      <Modal className="text-right" show={addModals} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> التسجيل في المؤتمر </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {lang === "ar" ? (
              <Fragment>
                <ol className="red-text">
                  <li>كل الحقول مطلوبة عدا الباحث الثاني و الثالث </li>
                  <li>
                    يجب ادخال الملخص باللغتين العربية و الانجليزية في حقل الملخص
                  </li>
                  <li>
                    يرجى تحميل الورقة البحثية بإحدى الصيغتين (doc او docx){" "}
                  </li>
                  <li>
                    في حالة عدم استقبالك لاي رسالة على بريدك الالكتروني الرجاء
                    التواصل مع اللجنة على البريد الالكتروني :
                    FIMSD2021@zu.edu.ly
                  </li>
                </ol>
              </Fragment>
            ) : (
              <Fragment>
                <br />
                <ol
                  className="red-text left-align"
                  style={{ direction: "rtl" }}
                >
                  <li>
                    All the fields are required except the fields released to
                    the second and third author{" "}
                  </li>
                  <li>
                    {" "}
                    The abstract must be submitted both in Arabic and English
                    using the abstract field.{" "}
                  </li>
                  <li>
                    {" "}
                    Please upload your CV in one of these format (doc or pdf){" "}
                  </li>
                  <li>
                    If you do not receive a replay to your e-mail, please do not
                    hesitate to contact us with via the E-mail:
                    FIMSD2021@zu.edu.ly
                  </li>
                </ol>
              </Fragment>
            )}
            <FormInput
              type="text"
              name="researchName"
              value={researchName}
              onChange={onChange}
              required
              label=" Title of Paper / عنوان الورقة العلمية"
            />
            <Select
              options={options}
              name="department"
              placeholder={<div>Choose the Topic / اختر المحور </div>}
              onChange={onChangeSelect}
              required
            />
            <br />
            <select
              name="TypeOfParticipation"
              id="TypeOfParticipation"
              onChange={onChange}
            >
              <option value="">اختر نوع امشاركة</option>
              <option value="offline">الحضور الفعلي </option>
              <option value="online">المشاركة عن بعد</option>
            </select>
            <br />
            <label htmlFor="firstName" className="active">
              Abstaruct / ملخص الورقة
            </label>
            <CKEditor
              editor={ClassicEditor}
              data={abstruct}
              onChange={(event, editor) => {
                const data = editor.getData();
                setResearch({ ...Research, abstruct: data });
              }}
            />

            <FormInput
              type="text"
              name="author"
              value={author}
              onChange={onChange}
              required
              label=" Name of Author 1 / اسم المشارك الذى سيعرض الورقة
              "
            />
            <FormInput
              type="text"
              name="email"
              value={email}
              onChange={onChange}
              required
              label=" Email of Author 1 / البريد الالكترونى"
            />
            <FormInput
              type="number"
              name="phone"
              value={phone}
              onChange={onChange}
              required
              label=" Phone of Author 1 / رقم الهاتف"
            />
            <FormInput
              type="text"
              name="country"
              value={country}
              onChange={onChange}
              required
              label="Country / الدولة *"
            />
            <FormInput
              type="text"
              name="Organization"
              value={Organization}
              onChange={onChange}
              required
              label=" Organization of Authors / الجهة التابع لها المشارك ( جامعة- كلية /
                مركز بحثى / الخ) *"
            />
            <FormInput
              type="text"
              name="Qualification"
              value={Qualification}
              onChange={onChange}
              required
              label="Qualification / لمؤهل العلمى / التخصص"
            />
            <FormInput
              type="text"
              name="Degree"
              value={Degree}
              onChange={onChange}
              required
              label="Degree / الدرجة العلمية *"
            />
            <FormInput
              type="text"
              name="author1"
              value={author1}
              onChange={onChange}
              label="Name of Author 2 / اسم الباحث التاني ان وجد"
            />
            <FormInput
              type="text"
              name="email1"
              value={email1}
              onChange={onChange}
              label="Email of Author 2 / البريد الالكترونى للباحث التاني"
            />
            <FormInput
              type="text"
              name="author2"
              value={author2}
              onChange={onChange}
              label=" Name of Auther 3 / اسم الباحث الثالث ان وجد"
            />
            <FormInput
              type="text"
              name="email2"
              value={email2}
              onChange={onChange}
              label="Email of Author 3 البريد الالكترونى للباحث الثالث"
            />
            {/* Paper InputFaild */}

            <FormInput type="file" onChange={onChangefile} />
            <p className="text-center">
              يمكن تحميل ملف في (docx , doc) هذا الحقل
            </p>
            <Alert />
            {/* /////// */}
          </div>
          <Modal.Footer>
            <button
              className="btn-custom btn-dark center"
              onClick={handleClose}
            >
              اغلاق
            </button>
            <button className="btn-custom btn-danger center" onClick={onSubmit}>
              ارسال
            </button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default connect(null, {
  setAlert,
  addAbstruct,
})(Regester);
