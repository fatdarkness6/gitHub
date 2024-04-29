import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


export default function Input2() {

    const [set , setSet] = useState("")
    const [search , setSearch] = useSearchParams();

    
  const navigate = useNavigate()

    

    return(
        <>
        
        

            <div className="background">
                <div className="part1">


            <form className="f" onSubmit={(e) => {
            
            e.preventDefault()
                if(search.get('type') == "code") {
                    navigate(`/search?q=${set}&type=code`)
                }else if(search.get('type') == "repositories") {
                    navigate(`/search?q=${set}&type=repositories`)
                }else if(search.get('type') == "issues")  {
                    navigate(`/search?q=${set}&type=issues`)
                }else if(search.get('type') == "users")  {
                    navigate(`/search?q=${set}&type=users`)
                }else if(search.get('type') == "commits")  {
                    navigate(`/search?q=${set}&type=commits`)
                }
                location.reload()
        }} >
                    <button type="button" class="btn btn-outline-secondary bbb">


                        <i class="fa-solid fa-magnifying-glass"></i>

                        <input placeholder={search.get("q")} type="search" onChange={(e) => {
                            let a  = e.target.value 
                            setSet(a)
                            
                        }}/>



                    </button>

                    
                    </form>


                </div>
                {set == "" ? null :
                <div className="part2">
                <i class="fa-solid fa-magnifying-glass"></i>
                   <p>{set}</p>
                </div>}
                
            </div>
        
        
        </>
    )
}