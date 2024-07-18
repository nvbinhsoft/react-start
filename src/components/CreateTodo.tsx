import {Button, TextField} from "@mui/material";

type CreateTodoProps = {
    newThing: string,
    oneNewThingChange: (e) => void,
    onAddingButtonClick: () => void
}
export const CreateTodo = ({
                               newThing,
                               oneNewThingChange,
                               onAddingButtonClick,
                           }: CreateTodoProps) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddingButtonClick()
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField size={"small"} value={newThing} onChange={oneNewThingChange}/>
            <Button variant={"contained"} onClick={onAddingButtonClick}>Add</Button>
        </form>

    )
}