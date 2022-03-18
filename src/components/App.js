import React from "react";
import Action from "./Action";
import Header from "./Header";
import Todo from "./Todo";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "Todo App Uygulaması",
        description: "Todo Uygulamasına hoş geldiniz",
        items: [],
      };
      this.clearItems = this.clearItems.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
    }
    
    componentDidMount(){
      if(localStorage.getItem('items'))
      {
        this.setState({
          items: JSON.parse(localStorage.getItem('items'))
        });
      }
     
    }

    componentDidUpdate(prevState,prevProps) {
      if(this.state.items.length != prevProps.items.length){
        const json=JSON.stringify(this.state.items);
        localStorage.setItem('items',json);
      }
    }

    clearItems() {
      this.setState({
        items: [],
      });
    }
    addItem(item) {
      if (!item) return "Eleman Girin";
      else if (this.state.items.indexOf(item) > -1)
        return "Aynı elemanı eklemeyezsiniz!";
  
      this.setState((prevState) => {
        return { items: prevState.items.concat(item) };
      });
    }
    deleteItem(item) {
      let items = this.state.items.filter((item_) => {
        return item_ != item;
      });
      this.setState({
        items: items,
      });
    }
    render() {
      return (
        <div className="container mt-5 ">
         <Header title={this.state.title} description={this.state.description} />
          <Todo
            items={this.state.items}
            clearItems={this.clearItems}
            deleteItem={this.deleteItem}
          />
          <Action addItem={this.addItem} />
        </div>
      );
    }
  }

  export default App;
