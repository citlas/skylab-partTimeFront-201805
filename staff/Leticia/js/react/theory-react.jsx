
const obj1 = {prop1: "pr1"};
const obj2 = {prop2: "pr2"};

console.log("--------- ANTES --------")
console.log(obj1)
console.log(obj2)

// copia el objeto de la derecha dentro del de la izq, 
// sustituyendo las keys comunes de ambos objetos 
// con los valores del objeto de la derecha
const obj3 = Object.assign(obj1, obj2);

obj3.prop1 = "obj3";

console.log("--------- DESPUES --------")
console.log(obj1)
console.log(obj2)
console.log(obj3)

// output:
// ------ ANTES --------
// { prop1: 'pr1' }
// { prop2: 'pr2' }
// --------- DESPUES --------
// { prop1: 'obj3' }
// { prop2: 'pr2' }
// { prop1: 'obj3' }


// cómo funciona react
{/* <html>
  <head>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color: #fff;
        background: #161719;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </head>
  
  <body>
    
    <div id="root"></div>
    
    <script>
      class RDOM {
        render(component, element){
          //JQUERY ONLY
          $(element).append(component.render());
        }
      }
      
      const ReactDOM = new RDOM();

      class Component {
        //  no asignar los props al state
        constructor(props){
            this.props = props;
            this.state = {
              lastName: "Bonito"
            };       
        }
        
        setState(newState){
          this.state = Object.assign(this.state, newState);
          this.render();
        }

        render(){
          return `<div>Hola ${this.props.name}</div>`;
        }
      }

      const c = new Component({name: "World"});

      console.log(c.render())

      ReactDOM.render(c, document.getElementById('root'));
    </script>
    
  </body>
</html> */}

<html>
  <head>
    <style>
      #container{
        font-family:monospace;
        font-weight:bold;
        color: #fff;
        background: #161719;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  </head>
  
  <body>
    
    <div id="root"></div>
    
    <script>
      class RDOM {
        render(component, element){
          //JQUERY ONLY
          $(element).empty();
          $(element).append(component);
        }
      }
      
      const ReactDOM = new RDOM();

      class Component {
        constructor(props){
        //  no asignar los props al state
          this.props = props;
          this.state = {
            lastName: "Bonito"
          };

        }
        
        _bindEvents(){
          $('#component-01').unbind('click');
          $('#component-01').click(()=>{
            this.setState({lastName: 'Feo'});
          });
        }
        
        setState(newState){
          this.state = Object.assign(this.state, newState);
          this.render();
        }

        render(){
          console.log("state: ", this.state);
          this._bindEvents();
          
          const rendered = `<button id="component-01">Hola ${this.props.name} ${this.state.lastName}</button>`;
          ReactDOM.render(rendered, document.getElementById('root'));
        }
      }

      const c = new Component({name: "World"});

      c.render();
      c._bindEvents();
    </script>
    
  </body>
</html>

