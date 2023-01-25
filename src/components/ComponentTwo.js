import { forwardRef, useImperativeHandle, useState } from "react";

const ComponentTwo = (props,ref) => {
    const [modalState, setModalState] = useState(false);

    const switchSate = () =>{
        if(!modalState){
            setModalState(true);
        }else {
            setModalState(false)
        }
    }

    useImperativeHandle(ref, () =>({
        openModal: () => switchSate()
    }));

    console.log('child rendered',modalState);

    if(!modalState) return null;

  return (
    <div>
        <p>ComponentTwo</p>
        {/* <button onClick={()=>setModalState(false)}>Close</button> */}
    </div>
  )
}

export default forwardRef(ComponentTwo)