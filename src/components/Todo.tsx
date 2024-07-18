import {Button} from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from "react-router-dom";


const Icon = ({isCompleted, updateIsCompleted, id}: {
    id: string,
    isCompleted: boolean,
    updateIsCompleted: (id: string) => void
}) => {
    return (
        <div onClick={() => updateIsCompleted(id)}>
            {isCompleted ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </div>
    )

}
export const Todo = ({name, isCompleted, updateIsCompleted, id, deleteTodo}: {
    id: string,
    name: string,
    isCompleted: boolean,
    updateIsCompleted: (id: string) => void,
    deleteTodo: (id: string) => void,
}) => {
    return (
        <Button style={{justifyContent: 'space-between'}}
                fullWidth={true}
                endIcon={
            <>
                <Icon id={id} isCompleted={isCompleted} updateIsCompleted={updateIsCompleted}/>
                <DeleteIcon onClick={() => deleteTodo(id)}/>
            </>
                }
        >
            {name}
            <Link to={`/todo/${id}`} >
                Detail
            </Link>
        </Button>
    )
}