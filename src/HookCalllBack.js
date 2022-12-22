import React, { useCallback, useState } from 'react'
import Button from './callbackComponent/Button';
import Count from './callbackComponent/Count';
import Title from './callbackComponent/Title';

const HookCalllBack = () => {
    const [countOne,setCountOne] = useState(0);
    const [countTwo,setCountTwo] = useState(0);

    const incrementOne = useCallback(() =>{
        setCountOne(countOne + 1)
    },[countOne])

    const incrementTwo = useCallback(() =>{
        setCountTwo(countTwo + 10000)
    },[countTwo])

   

  return (
    <div>
      <Title />
      <Count text="one" count={countOne}/>
      <Button handleClick={incrementOne}>Increase One</Button>
      <Count text="two" count={countTwo}/>
      <Button handleClick={incrementTwo}>Increase Tow</Button>
    </div>
  )
}

export default HookCalllBack
