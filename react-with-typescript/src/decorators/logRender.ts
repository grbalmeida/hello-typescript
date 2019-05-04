type Component = {
  new(...args: any[]): {
    render(): any
  }
}

export default function logRender<C extends Component>(component: C) {
  return class extends component {
    render() {
      console.log('Rendering component')
      const internalRender: any = super.render()
      console.log('Rendering Complete!')
      return internalRender
    }
  }	
}
