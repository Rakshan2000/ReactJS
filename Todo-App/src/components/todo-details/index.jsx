import { Button, Dialog, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function TodoDetails({openDialog,todoDetails,setOpenDialog}){
    

    //using Fragment as the return element should have only one parent element
    return <Fragment>
        <Dialog onClose={()=>setOpenDialog(false)} open={openDialog}>
            <DialogTitle>
                {todoDetails}
            </DialogTitle>
            <DialogActions>
                <Button onClick={()=>setOpenDialog(false)}>Close</Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}

export default TodoDetails;