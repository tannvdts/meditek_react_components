## The common React components for you ##

## View demo: https://meditek-react-components.herokuapp.com/ ##

**1. Mixins**
-------------

	***Define general properties of component***

	inputPropTypes: {
	    id: PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	    ]),
	    style: PropTypes.object,
	    className: PropTypes.string,
	    onChangeValue: PropTypes.func,
	    name: PropTypes.string,
	    disabled: PropTypes.bool,
	    readOnly: PropTypes.bool,
	    hide: PropTypes.bool,
	    placeholder: PropTypes.string,
	    value: PropTypes.oneOfType([
	      React.PropTypes.string,
	      React.PropTypes.number,
	    ]),
	  },

**Example:**


    Select.propTypes = _.assignIn({}, mixins.inputPropTypes, {
	  multiple: PropTypes.bool,
	  options: PropTypes.array,
	  defaultValue: PropTypes.oneOfType([
	    React.PropTypes.string,
	    React.PropTypes.number,
	    React.PropTypes.array
	  ]),
	  value: PropTypes.oneOfType([
	    React.PropTypes.string,
	    React.PropTypes.number,
	    React.PropTypes.array
	  ]),
	});

**Select** component include properties of mixins.inputPropTypes and other properties as multiple, options, defaultValues...

***Define other mixins properties:***


    check: PropTypes.oneOfType([
    		      React.PropTypes.string,
    		      React.PropTypes.number,
    		      React.PropTypes.bool
    		    ])


----------




**2. List of relation components and libraries:**
-----------------------------------------------------


![enter image description here](https://s4.postimg.org/b1fiauolp/meditek_react_components_listreferal.png)


----------


**2.1 Checkbox**
----------------

Props:

> -**extends mixins.inputPropTypes**
>
> -**value**: mixins.customPropTypes.check,
>
> -**trueValue**: mixins.customPropTypes.check,
>
> -**falseValue**: mixins.customPropTypes.check


DefaultProps:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {}
>
> -**trueValue**:  true,
>
> -**falseValue**: false

Function:


   >-**getValue()** // using: this.refs['refname'].getValue()

Using:

> *trueValue: default true,
>
> *falseValue: default false,
>
> *If checkbox is checked, return trueValue,
>
> *If checkbox is uncheck, return falseValue,
>
> Using props **name** in case  reuse onChangeValue function for more tags



    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testCheckboxABCValue: 'YES',
        }
      }

      _onTestCheckboxChange(value, name) {
        console.log("Test: _onTestCheckboxChange:", value, 'name: ', name);
        var newState = {};
        if (name==='testCheckboxABCValue') newState.testCheckboxABCValue = value;
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <Checkbox
            id = {1234}
            name = "testCheckboxABCValue"
            hide={this.state.hide}
            value={this.state.testCheckboxABCValue}
            trueValue="YES"
            falseValue="NO"
            onChangeValue={this._onTestCheckboxChange.bind(this)}/>
        )
      }
    }


----------


**2.2 CheckboxGroup**
---------------------

**Using case:**

> Assuming you have 4 checkbox:
>
> Checkbox value="apple"
>
> Checkbox value="orange"
>
> Checkbox value="watermelon"
>
> Checkbox value="banana"
>
> If you check apple, orange, banana then component will return array [apple,  orange,
> banana]

Props:

> **extends mixins.inputPropTypes**
>
> -**value**: PropTypes.array

DefaultProps:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {}


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


Using:

> Using prop **name** in case resuse onChangeValue function  for more tag
>
>  CheckboxGroup must provide **name** prop

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testCheckboxGroupSelectedValues: ['apple'],
        }
      }

      _onTestCheckboxGroupChange(values, name) {
        var newState = {};
        if(name === 'fruit') {
          newState.testCheckboxGroupSelectedValues = values;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <CheckboxGroup name={"fruit"}
                      value={this.state.testCheckboxGroupSelectedValues}
                      onChangeValue={this._onTestCheckboxGroupChange.bind(this)}
          >
            <label className="checkbox-inline">
              <Checkbox value="apple" />Apple
            </label>
            <label className="checkbox-inline">
              <Checkbox value="orange" />Orange
            </label>
            <label className="checkbox-inline">
              <Checkbox value="watermelon" />Watermelon
            </label>
          </CheckboxGroup>

        )
      }
    }


----------


**2.3 DatePicker**
------------------

**Base on library: https://bootstrap-datepicker.readthedocs.io/en/latest/**

Props:

> -**extends mixins.inputPropTypes**
>
> -**datePickerOptions**: options of bootstrap-datepicker
>
> -**value**: Proptypes.object (Date object)


DefaultProps:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {},
>
> -**datePickerOptions**: {
> 	    orientation: "left",
> 	    format:'dd/mm/yyyy',
> 	    autoclose: !0,
> 	    clearBtn: true,   }


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()
   >-**getRef()** // using: this.refs['refname'].getRef()

Using:

> Using prop **name** in case reuse onChangeValue function for more tags

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testDatePickerValue: null,
        }
      }

      _onTestDatePickerChange(value, name) {
        console.log("_onTestDatePickerChange:", value, name);
        var newState = {};
        if(name ==='myDate') newState.testDatePickerValue = value;
        this.setState(newState);
      }

      componentWillMount() {
        this.datePickerOptions= {
          orientation: "left",
          format:'dd/mm/yyyy',
          autoclose: !0,
          clearBtn: true
        }
      }

      componentDidMount() {
        var self = this;
        var selectedDate = moment().format("DD/MM/YYYY");
        // simulation async
        //----------------------------------
        setTimeout(function(selectedDate){
          self.setState({
            testDatePickerValue:selectedDate
          })
        }, 1000, selectedDate)
      }

      render() {
        return (
          <DatePicker datePickerOptions={this.datePickerOptions}
                       id = {1234}
                       name = {'myDate'}
                       hide={this.state.hide}
                       onChangeValue={this._onTestDatePickerChange.bind(this)}
                       className='form-control'
                       value = {this.state.testDatePickerValue}
          />
        )
      }
    }


----------




**2.4 FileComp**
------------

> Using for select file to upload and review file upload
>
> InputFile component: select file to upload
>
> InputFileImagePreview: preview file upload

**2.4.1 FileComp.InputFile**

Select file to upload

Return array of files

Props:

> -**extends mixins.inputPropTypes**
>
> -**multiple**: PropTypes.bool. Select multiple files or not
>
> -**label**: PropTypes.string. Label of button select file
>
> -**files**: PropTypes.array. List selected file
>
> -**showInfo**: PropTypes.bool. show table selected files or  not
>
> -**maxSize**: PropTypes.number. max size of file
>
> -**accept**: Accept file types, references: http://stackoverflow.com/questions/11832930/html-input-file-accept-attribute-file-type-csv

DefaultProps:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {},
>
> -**multiple**: false,
>
> -**label**: 'Choose File',
>
> -**files**: [],
>
> -**showInfo**: true
>
> -**maxSize**: 10MB
>
> -**accept**: ''

Function:


   >-**getFiles()** // using: this.refs['refname'].getFiles()



**2.4.2 FileComp.FileImagePreview**

Using for review file upload

Props:

> -**id**: PropTypes.oneOfType([
>     React.PropTypes.string,
>     React.PropTypes.number,   ]),
> -**style**: PropTypes.object,
>
> -**className**: PropTypes.string,
>
> -**name**: PropTypes.string,
>
> -**hide**: PropTypes.bool,
>
> -**file**: PropTypes.object

DefaultProps:

> **hide**: false,
>
>  -**style**: {}

Using:

> Using prop **name** in case reuse onChangeValue for more tags

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          files: []
        }
      }

      _onTestFileInputChange(fileList, name) {
        var newState = {};
        if(name === 'TestFile') {
          newState.files = fileList;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <div>
            <FileComp.InputFile showInfo={true} multiple={true} name={'TestFile'} files={this.state.files} onChangeValue={this._onTestFileInputChange.bind(this)}/>
            {this.state.files.map((file, index) => {
              return <FileComp.FileImagePreview file={file} style = {{width: "100px"}} key={index}></FileComp.FileImagePreview>
            })}
          </div>
        )
      }
    }


----------


**2.5 InputText**
-----------------

Props:

> -**extends mixins.inputPropTypes**

DefaultProps:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {}


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


Using:

> Using prop **name** in case reuse onChangeValue for more tags

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testInputValue: 'tan',
        }
      }

      _onTestInputChange(value, name) {
        console.log(value)
        var newState = {};
        if(name === 'myInput') {
          newState.testInputValue = value;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <InputText id = {1234} name={"myInput"} hide={this.state.hide} value={this.state.testInputValue} onChangeValue={this._onTestInputChange.bind(this)} className='form-control'/>
        )
      }
    }


----------


**2.6 ModalComp**
-------------

> Base on boostrap 3 Modal
>
> -Modal Component
>
> -ModalHeader Component
>
> -ModalBody Comonent
>
> -ModalFooter Component

    <ModalComp.Modal>
    	<ModalComp.ModalHeader></ModalComp.ModalHeader>
    	<ModalComp.ModalBody></ModalComp.ModalBody>
    	<ModalComp.ModalFooter></ModalComp.ModalFooter>
    </ModalComp.Modal>

**2.6.1 ModalComp.Modal**

Props:

> -**className**: PropTypes.string,
>
> -**style**: PropTypes.object,
>
> -**dialogContainerStyle**: PropTypes.object, //custom dialog size...
>
> -**tabIndex**: PropTypes.oneOfType([   React.PropTypes.string,   React.PropTypes.number, ]),
>
> -**size**: PropTypes.string, //null, modal-lg, modal-sm,
>
> -**onShow**: PropTypes.func,
>
> -**onShown**: PropTypes.func,
>
> -**onHide**: PropTypes.func,
>
> -**onHidden**: PropTypes.func,
>
> -**onLoaded**: PropTypes.func

DefaultProps:

> -**style**: {},
> -**dialogContainerStyle**:{},
>
> -**tabIndex**: -1,
>
> -**size**: null

Functions:

> - **Action (name, options)** name:
>
>+"show": correctponding domElement.modal("show")
>
> +"hide": correctponding domElement.modal("hide")
>
> +"toggle": correctponding domElement.modal("toggle")
>
> +"handleUpdate": correctponding domElement.modal("handleUpdate")
>
> +"options": correctponding domElement.modal(options)

**2.6.2 ModalComp.ModalHeader**

> Header of modal

Props:

> -**className**: PropTypes.string,
>
> -**style**: PropTypes.object,
>
> -**hide**: PropTypes.bool,
>
> -**title**: PropTypes.oneOfType([ 	  React.PropTypes.string, 	  React.PropTypes.number, ])

DefaultProps:

> -**style**: {},
>
> -**hide**: false

**2.6.3 ModalComp.ModalBody**

Main body of modal

Props:

> -**className**: PropTypes.string,
>
> -**style**: PropTypes.object,
>
> -**hide**: PropTypes.bool

DefaultProps:

> -**style**: {},
> -**hide**: false

**2.6.4 ModalComp.ModalFooter:**

Footer of modal

Props:

> -**className**: PropTypes.string,
>
> -**style**: PropTypes.object,
>
> -**hide**: PropTypes.bool,
>
> -**haveCloseBtn**: PropTypes.bool, //must close button or not
>
> -**closeBtnClassName**: PropTypes.string, //Style of close button
>
> -**closeBtnLabel**: PropTypes.string //Lable of close button

DefaultProps:

> -**style**: {},

> -**hide**: false,

> -**haveCloseBtn**: true,

> -**closeBtnClassName**: 'btn btn-default',

> -**closeBtnLabel**: 'Close'

Using:

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
        }
      }

      componentDidMount() {
        var self = this;
      }
      _showModal() {
        this.refs['myModal'].action('show');
      }

      _onShown(e) {
        console.log("Test: onshown", e);

      }
      render() {
        return (
          <div>
            <ModalComp.Modal ref="myModal" id="ahihi" size="modal-lg" dialogContainerStyle={width:"80%"} onShown={this._onShown.bind(this)}>
              <ModalComp.ModalHeader title="Test Modal ne"></ModalComp.ModalHeader>
              <ModalComp.ModalBody>
                <p>tan test ne</p>

              </ModalComp.ModalBody>
              <ModalComp.ModalFooter closeBtnLabel="Tat di ne">

              </ModalComp.ModalFooter>
            </ModalComp.Modal>
            <button onClick={this._showModal.bind(this)}>show modal</button>
          </div>
        )
      }
    }


----------


**2.7 Pagination**
------------------

Base on bootstrap 3 Pagination,

Props:

> -**Kế thừa các thuộc tính của : https://www.npmjs.com/package/react-js-pagination#params**

> -**id**: PropTypes.oneOfType([

>     React.PropTypes.string,

>     React.PropTypes.number,   ]),

> -**style**: PropTypes.object,

> -**className**: PropTypes.string,

> -**onChangeValue**: PropTypes.func, //Sự kiện khi click vào 1 trang

> -**name**: PropTypes.string,

> -**disabled**: PropTypes.bool,

> -**hide**: PropTypes.bool,

> -**ariaLabel**: PropTypes.string

Default Props:

> -**hide**: false,

> -**disabled**: false,

> -**style**: {},

> -**ariaLabel**: 'Page navigation'

Function:


   >-**getActivePage()** // using: this.refs['refname'].getActivePage()


Using:

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          activePage: 4,
          totalItemsCount: 450
        }
      }

      _onTestPaginationChange(value) {
        console.log("TestPagination:_onTestPaginationChange:", value)
        this.setState({
          activePage:value
        })
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <Pagination
            activePage={this.state.activePage}
            totalItemsCount={this.state.totalItemsCount}
            itemsCountPerPage = {5}
            pageRangeDisplayed = {10}
            onChangeValue={this._onTestPaginationChange.bind(this)}/>
        )
      }
    }


----------


**2.8 RadioGroup**
------------------

> Base on library  https://www.npmjs.com/package/react-radio-group
> https://github.com/chenglou/react-radio-group
> - RadioGroup Component
> - Radio Component

**2.8.1 RadioGroup.Group Component**

Props:

- **Kế thừa mixins.inputPropTypes**

DefaultProps:

> -**hide**: false,

> -**disabled**: false,

> -**readOnly**: false,

> -**style**: {}


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


**2.8.2 RadioGroup.Radio Component**

Props:
- **Kế thừa mixins.inputPropTypes**

DefaultProps:

-**hide**: false,

-**disabled**: false,

-**readOnly**: false,

-**style**: {}

Using:

> Using prop **name** in case reuse onChangeValue function for more tags
>
> Must provide **name** for radioGroup


     class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testRadioSelectedValue: 'apple',
        }
      }

      _onTestRadioChange(value, name) {
        var newState = {};
        if(name === 'fruit') {
          newState.testRadioSelectedValue = value;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <RadioGroup.Group name={"fruit"}
                      value={this.state.testRadioSelectedValue}
                      onChangeValue={this._onTestRadioChange.bind(this)}
          >
            <label className="checkbox-inline">
              <RadioGroup.Radio value="apple" />Apple
            </label>
            <label className="checkbox-inline">
              <RadioGroup.Radio value="orange" />Orange
            </label>
            <label className="checkbox-inline">
              <RadioGroup.Radio value="watermelon" />Watermelon
            </label>
          </RadioGroup.Group>

        )
      }
    }


----------


**2.9 Select**
--------------

> **If multiple = true then select return array**

> **If multiple = false then select tag only return single value (string/number)**

Props:

> -**multiple**: PropTypes.bool, //select multiple item or not

> -**options**: PropTypes.array,

> -**defaultValue**: PropTypes.oneOfType([   React.PropTypes.string,   React.PropTypes.number,   React.PropTypes.array ]),

> -**value**: PropTypes.oneOfType([   React.PropTypes.string,   React.PropTypes.number,   React.PropTypes.array ]),

DefaultProps:

> -**multiple**: false,

> -**hide**: false,

> -**disabled**: false,

> -**readOnly**: false,

> -**style**: {}


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


Using:

Using props **name** in case reuse onChangeValue function for more tags

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testSelect: 1,
        }
      }

      _onTestSelectChange(value, name) {
        console.log("TestSelect: change:", value);
        var newState = {};
        if(name ==='mySelect') {
          newState.testSelect = value;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        var options = [
	      {type:'optgroup', name: 'group test', items:[
	        {type:'option', name: 'item test 1', value: 11},
	        {type:'option', name: 'item test 2', value: 22},
	      ]},
	      {type:'option', name: 'item 1', value: 1},
	      {type:'option', name: 'item 2', value: 2},
	      {type:'option', name: 'item 3', value: 3},
	      {type:'option', name: 'item 4', value: 4},
	    ]
        return (
          <Select id = {1234}
                  name = "mySelect"
                  hide={this.state.hide}
                  value={this.state.testSelect}
                  onChangeValue={this._onTestSelectChange.bind(this)}
                  className='form-control' options={options}>
            <option value={null}></option>
          </Select>
        )
      }
    }


----------


**2.10 Textarea**
-----------------

Props:

> -**Extend mixins.inputPropsTypes**

> -**rows**: PropTypes.number

Default Props:

> -**hide**: false,

> -**disabled**: false,

> -**readOnly**: false,

> -**style**: {}


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


Using:

Using prop **name** in case reuse onChangeValue function for more tags

    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testTextarea: 'tan \n 123 \n 545',
        }
      }

      _onTestTextareaChange(value, name) {
        console.log("TestTextarea:_onTestTextareaChange", value)
        var newState = {};
        if(name === 'myTextArea') {
          newState.testTextarea = value;
        }
        this.setState(newState);
      }

      componentDidMount() {
        var self = this;
      }

      render() {
        return (
          <Textarea id = {1234}
                    name="myTextArea"
                    hide={this.state.hide}
                    value={this.state.testTextarea}
                    onChangeValue={this._onTestTextareaChange.bind(this)}
                    className='form-control' rows={6}/>
        )
      }
    }

**2.11 TimePicker**
-------------------

> Base on library:
>
> https://jdewit.github.io/bootstrap-timepicker/
>
> https://www.npmjs.com/package/bootstrap-timepicker
>
> Return value with format: 15:30:25 or 3:30:25 PM

PropTypes:

> -**Kế thừa mixins.inputPropTypes**
>
> -**timepickerOptions**: PropTypes.object // Props of bootstrap-timepicker http://jdewit.github.io/bootstrap-timepicker/
>
> -**onShow**: PropTypes.func,
>
> -**onHide**: PropTypes.func

Default Props:

> -**hide**: false,
>
> -**disabled**: false,
>
> -**readOnly**: false,
>
> -**style**: {},
>
> -**timepickerOptions**: {
>
> 	  template: 'dropdown',

> 	   	  minuteStep: 15,

> 	   	  secondStep: 15,

> 	   	  defaultTime: 'current',

> 	   	  showMeridian: false, //show AM/PM or not }


Function:


   >-**getValue()** // using: this.refs['refname'].getValue()


Using:


    class Test extends Component{
      constructor(props) {
        super(props);
        this.state = {
          hide: false,
          testTimePicker: null
        }
      }

      componentWillMount() {
        this.timepickerOptions=
        {
          template: 'dropdown',
          minuteStep: 15,
          secondStep: 15,
          defaultTime: 'current',
          showMeridian: true, //show AM/PM or not
          //--------------------
          showSeconds:true,
          //modalBackdrop:true
        }
    
      }
      _onShow(e) {
        console.log("_onShow", e);
      }
      _onHide(e) {
        console.log("_onHide", e);
      }
      _onChangeTime(e) {
        console.log("_onChangeTime", e);
      }
    
      _onTestTimePickerChange(value, name) {
        console.log("_onTestTimePickerChange", value);
        var newState = {};
        if(name==='myTimePicker') {
          newState.testTimePicker = value;
        }
        this.setState(newState);
      }
    
    
      componentDidMount() {
        var self = this;
      }
    
      render() {
        return (
          <div className="input-group bootstrap-timepicker timepicker">
            <TimePicker id = {1234}
                        name="myTimePicker"
                        hide={this.state.hide}
                        value={this.state.testTimePicker}
                        className='form-control'
                        timepickerOptions={this.timepickerOptions}
                        onShow={this._onShow.bind(this)}
                        onHide={this._onHide.bind(this)}
                        onChangeValue={this._onTestTimePickerChange.bind(this)}
            />
            <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
          </div>
        )
      }
    }