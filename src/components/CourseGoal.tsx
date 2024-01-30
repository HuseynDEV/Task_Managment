import { type PropsWithChildren } from "react"

// interface CourseGoalProps {
//     title: string,
//     children: ReactNode
// }

type CourseGoalProps=PropsWithChildren<{title:string;id:number;  onDelete: (id: number) => void}>

export default function CourseGoal({ title, children,id, onDelete }: CourseGoalProps) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                {/* <p>{description}</p> */}
                {children}
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </article>
    )
}


// const CourseGoal:FC<CourseGoalProps>=({ title, children })=>{
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 {/* <p>{description}</p> */}
//                 {children}
//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }

// export default CourseGoal