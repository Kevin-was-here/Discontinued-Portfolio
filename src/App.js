import React,{ componet } from 'react';
import path from 'path'

class App extends Componet {
  render(){
    return(
      <div>
        {/*welcome*/}
        <WelcomeBlock>

        </WelcomeBlock>

        {/*Projects*/}
        <ProjectsBlock>

        </ProjectsBlock>

        {/*Get in touch*/}
        <ContactsBlock>

        </ContactsBlock>
      </div>
    )
  };
}


export default App;
