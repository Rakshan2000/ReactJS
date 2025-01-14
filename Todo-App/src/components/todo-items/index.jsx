import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function todoItem({ todo, GetTodoDetails }) {
  return (
    <div>
      <Card
        sx={{
          maxWidth: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography>{todo.todo}</Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              backgroundColor: "black",
              color: "White",
              opacity: 0.75,
              "&:hover": {
                backgroundColor: "black",
                color: "White",
                opacity: 1,
              },
            }}

            onClick={()=>{GetTodoDetails(todo.id)}}
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default todoItem;
