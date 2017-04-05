﻿var Button = ReactBootstrap.Button;
var PageHeader = ReactBootstrap.PageHeader;
var Panel = ReactBootstrap.Panel;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { courses: null };
        this.setState({ courses: props.courses });
        console.log(props.courses);

        this.id = 0;
        this.data = [JSON.parse('{ "id": "0", "header": "TDT4145", "text": "tralala" }')];
        this.indexTest = 4100;
    }

    // Temporary on click listener for adding panel for testing
    addPanel() {
        this.id++;
        this.data.unshift((JSON.parse(`{ "id": ${this.id}, "header": "TDT${this.indexTest}", "text": "lalala" }`)));
        this.forceUpdate();
        this.indexTest++;
    }

   removePanel() {
        this.data.pop();
        this.forceUpdate();
   }

    // On click listener for removing panel
   onClickClose(element) {
       this.data.splice(this.getPanelIndexFromId(element.target.parentNode.parentNode.id), 1);
       this.forceUpdate();
   }

    // Dummy on click listener fo panel
   onClickPanel(element) {
       console.log(element.target.parentNode.id);
   }

    // Get index of panel in data list
   getPanelIndexFromId(id) {
       for (let i = 0; i < this.data.length; i++) {
           if (this.data[i].id === id) {
               return i;
           }
       }
   }

   render() {
        const elementList = this.props.courses.map((c) => {
            return (
                <div className="panel panel-primary" id={c.id}>
                    <div className="panel-heading" >
                        <a href={"/course/index/" + c.id}>{c.name}</a>
                        <button type="button" className="close" onClick={this.onClickClose.bind(this)}>
                            &times;
                        </button>
                    </div>
                    <div className="panel-body" onClick={this.onClickPanel.bind(this)}>{c.description}
                    </div>
                </div>
            );
        });
        return (

            <div>
                <PageHeader>Welcome to COCOA!</PageHeader>
                <div className="scroll">{elementList}</div>
            </div>

        );
    }


}