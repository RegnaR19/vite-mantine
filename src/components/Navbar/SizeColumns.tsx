import { Button } from "@mantine/core"
import { useState } from "react"
import './SizeColumns.module.css'

const SizeColumns = () => {
   const [style, setStyle] = useState("cont")
   const changeStyle = () => {
      setStyle("cont2");
   };
   return (
      <>
         <div className={style}>
            <Button variant="outline" size="sm"
               onClick={changeStyle}>
               Изменить размер
            </Button>
         </div>
      </>
   )
}
export default SizeColumns