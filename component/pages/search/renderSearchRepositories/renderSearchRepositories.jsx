import { useEffect ,  } from "react"
import Moment from "react-moment"
import { Link , useSearchParams } from "react-router-dom"
import "../../../../styles/style.css"

export default function RenderSearchRepositories(props) {

    

    

    

    return(
        <>
    <div className="father">
            <div className="space">
                <Link to={`/${props.params}`}>

                <div className="part1-1">
                   
                    <a href="#" >
                        {props.params}
                    </a>
                    
                </div>
                
                </Link>
                <div className="part2-2">
                    <button type="button" class="btn btn1  btn-secondary btn-sm">
                        <div className="p-p1">
                            <i class="fa fa-star-o"></i>
                            <p>Star</p>
                        </div>
                        <div className="p-p2">
                        <button type="button" class="btn btn-secondary btn-sm">
                            <i class="fa fa-sort-down"></i>
                        </button>
                        </div>
                        
                    </button>
                    
                </div>

            </div>   
            <div className="type">
                <div className="part1-1">
                    <div className= {props.language =="CSS" ? "purple" : null || props.language =="JavaScript" ? "yellow" :null || props.language == "TypeScript" ? "blue" : null || props.language == "HTML" ? "red":null || props.language == "Objective-C" ? "blueLight" : null || props.language == "C" ? "gray" : null || props.language == "Java" ? "orange" : null || !props.language ?"none" :null}></div>
                    <p className={!props.language ? "none" : null}>{props.language}</p>


                    <p><Moment fromNow>{props.updated_at}</Moment></p>
                </div>
                
            </div>
        </div>
        </>
    )
}