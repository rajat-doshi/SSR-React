import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getItemById,
  getItems,
  postItemUpdateById,
} from "./Redux/Action/index";
import Input from "./Component/Input";
import { te } from "./Utility/ReduxToaster";
import { getFormDetails } from "./Utility/Helper";
import TextArea from "./Component/TextArea";
const Form = [
  { name: "logo", title: "Developer Image URL", reqType: "URL" },
  { name: "imgTitle", title: "Developer Name" },
  { name: "totalExp", title: "Years Of Exprience", reqType: "number" },
  { name: "totalProjects", title: "Project Count" },
  { name: "desc", title: "Description", type: "textarea" },
  { name: "title", title: "Project Name" },
  { name: "location", title: "Project Location" },
  { name: "imgURL", title: "Project Image URL",reqType: "URL" },
];
const initForm = {
  logo: "",
  imgURL: "",
  imgTitle: "",
  title: "",
  totalExp: "",
  totalProjects: "",
  desc: "",
  location: "",
  id: "",
  errors: {
    logo: null,
    imgURL: null,
    imgTitle: null,
    title: null,
    totalExp: null,
    totalProjects: null,
    desc: null,
    location: null,
    id: null,
  },
};
const EditProperty = (props) => {
  const [state, setState] = useState({ form: { ...initForm } });
  let { form } = state;
  const UpdateForm = (obj) => {
    if (props.itemsList.selectedItem.logo) {
      form = { ...form, ...props.itemsList.selectedItem };

      form = {
        ...props.itemsList.selectedItem,
        errors: { ...form.errors },
      };

      setState({ ...state, form: form });
    }
  };
  useEffect(() => {
    if (props.itemsList.items == 0) {
      props.getItems();
    }
  }, [props.itemsList.items.length == 0]);
  useEffect(() => {
    props.getItemById(1);
  }, [props.itemsList.items.length > 0]);
  useEffect(() => {
    UpdateForm(props.itemsList.selectedItem);
  }, [props.itemsList.selectedItem]);

  const onInputChange = (name, value, error = undefined) => {
    const { form } = state;
    form[name] = value;
    let { errors } = form;
    if (error !== undefined) {
      errors[name] = error;
    }
    setState({ form: { ...state.form, errors: errors } });
  };
  // handle validation
  const onInputValidate = (name, error) => {
    let { errors } = state.form;
    errors[name] = error;
    setState({ form: { ...state.form, errors: errors } });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { history, match } = props;
    const { form, id } = state;
    let obj = getFormDetails(form, onInputValidate);
    if (!obj) {
      te("Please Enter required field");
      return false;
    }
    if (obj) {
     
      props.postItemUpdateById(obj);
      history.push("/");
    }
  };

  return (
    <>
      <div className="container form-field-main mt-4">
        <form onSubmit={handleSubmit}>
          {Form.map((res) => {
            if (res.type === "textarea") {
              return (
                <div className="row mt-4">
                  <div className="col-lg-6 bor">
                    <TextArea
                      name={res.name}
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      title={res.title}
                      value={form[res.name]}
                      isReq={true}
                      error={form.errors[res.name]}
                      className="editTextbox"
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="row mt-4">
                  <div className="col-lg-6 bor">
                    <Input
                      name={res.name}
                      onChangeFunc={onInputChange}
                      validationFunc={onInputValidate}
                      title={res.title}
                      value={form[res.name]}
                      isReq={true}
                      error={form.errors[res.name]}
                      className="editTextbox"
                      reqType={res.reqType}
                    />
                  </div>
                </div>
              );
            }
          })}
          <div className="row">
            <div className="col-lg-6">
              <button
                type="submit"
                className="btn btn-primary form-control editTextbox"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default connect((state) => state, {
  getItemById,
  getItems,
  postItemUpdateById,
})(EditProperty);
