function customRender(element,container){
    const domElement=document.createElement(element.type)
    domElement.innerHTML = reactElement.children
    for (const prop in element.props) {
        domElement.setAttribute(prop,element.props[prop])
        
    }
    container.appendChild(domElement)
}
const reactElement ={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer = document.getElementById('root')
customRender(reactElement,mainContainer)
