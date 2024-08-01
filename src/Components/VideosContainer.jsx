import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard ,{AddVideoCard}from './VideoCard';
import { Link } from 'react-router-dom';

const VideosContainer = () => {
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();

    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
     <AddVideoCard info={videos[3]}/>
      {videos.map(video=> <Link key={video.id} to={"/watch?v="+video.id}><VideoCard  info={video}/></Link>)}
   
    </div>
  )
}


export default VideosContainer
