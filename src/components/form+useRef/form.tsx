
import { useEffect, useRef, useState } from "react";
import { useTodoContext } from "../../store/context";
import Button from "@mui/material/Button"
import { TextField, Box } from "@mui/material";

const Form: React.FC = () => {

  const { todos, setTodos } = useTodoContext();
  const [title, setTitle] = useState("");
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const intervalRef = useRef<number>(null);
  const handlePlayVideo = () => {
    if (playing) {
        videoRef.current?.pause();
        setPlaying(false);
      } else {
        videoRef.current?.play();
        setPlaying(true);
      }
  };
  const handleStopInterval=()=>{
    if(intervalRef.current===null) return
    const intervalId = intervalRef.current
    clearInterval(intervalId)
  }

  useEffect(() => {
    console.log(intervalRef.current);
  }, [intervalRef.current]);

  const handleStartInterval = () => {
    const intervalId = setInterval(() => {
      console.log("hello");
    }, 500);
    //@ts-ignore
    intervalRef.current = intervalId;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
  const newTodo = { id: Date.now(), title, completed: false };
  setTodos([...todos, newTodo]);
  setTitle("");
}

return (
  <div>
    <video controls style={{width:'150px', height:'100[x'}} src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4" ref={videoRef}></video> 
    <Button variant="contained" onClick={handlePlayVideo}>{playing?`Stop`:`Play`}</Button>
    <Button variant="outlined" onClick={handleStartInterval}>Start interval</Button>
  <Button variant="outlined" onClick={handleStopInterval}>Stop interval</Button>
    <h1 style={{
        textAlign:'center'
    }}>TODO APP</h1>
    
  <form onSubmit={handleSubmit}>
    <Box sx={{height:50,
    display:'flex',
    justifyContent:'center'}}>
    <TextField label="Task title" variant="filled" size="small" 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <Button variant="contained" type="submit">Add Todo</Button></Box>
  </form></div>
);
  };
export default Form;
