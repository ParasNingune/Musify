import React from 'react'
import { Box, Flex, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Spacer } from "@chakra-ui/react";
import { FaShuffle } from "react-icons/fa6";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BiRepeat } from "react-icons/bi";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { TbMicrophone2 } from "react-icons/tb";
import { HiQueueList } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";
import { CgMiniPlayer } from "react-icons/cg";
import { MdOpenInFull } from "react-icons/md";

export default function Player() {
    const [isPlaying, setPlaying] = React.useState(true);

    const handlePlay = () => {
        setPlaying(!isPlaying)
    }
  return (
    <Box
        width={'100vw'}
        height={100}
        bottom={0}
        position={'absolute'}
        backgroundColor={'black'}
    >
        {/* Play, Pause, Next, Previous, Shuffle */}
        <Box
            top={3}
            position={'absolute'}
            //width={230}
            height={45}
            left={700}
        >
            <IconButton
                marginRight={3}
                icon={<FaShuffle fontSize={20} color='white'/>}
                backgroundColor={'black'}
            />
            <IconButton
                marginRight={3}
                icon={<GiPreviousButton fontSize={20} color='white'/>}
                backgroundColor={'black'}
            />

            <IconButton
                marginRight={3}
                icon={isPlaying ? <FaPlay fontSize={24} color='gray.300'/> : <FaPause fontSize={24} color='black'/>}
                backgroundColor={'white'}
                onClick={handlePlay}
                borderRadius={50}
            />  

            <IconButton
                marginRight={3}
                icon={<GiNextButton fontSize={20} color='white' />}
                backgroundColor={'black'}
            />  

            <IconButton
                icon={<BiRepeat fontSize={25} color='white'/>}
                backgroundColor={'black'}
            />  
        </Box>  

        {/* Progress bar */}
        <Box 
            flex="1" 
            //top={70}
            width={555}
            left={540}
            bottom={5}
            position={'absolute'}
        >
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack bg="rgb(59,57,57)">
              <SliderFilledTrack bg="white" />
            </SliderTrack>
            
          </Slider>
        </Box>

        {/* Playing View, Lyrics, Queue, Connect to device, volume slider, Miniplayer, FullScreen */}
        <Box
            right={3}
            top={8}
            pos={'absolute'}
            bg={'black'}
        >
            <IconButton
                backgroundColor={'black'}
                icon={<BsFillMusicPlayerFill fontSize={20} color={'white'} />}
            />

            <IconButton
                backgroundColor={'black'}
                icon={<TbMicrophone2 fontSize={20} color={'white'} />}
            />

            <IconButton
                backgroundColor={'black'}
                icon={<HiQueueList fontSize={20} color={'white'} />}
            />

            <IconButton
                backgroundColor={'black'}
                icon={<MdDevices fontSize={20} color={'white'} />}
            /> 

            <IconButton
                backgroundColor={'black'}
                icon={<FaVolumeUp fontSize={20} color={'white'} />}
            /> 

            {/* Volume Slider */}
            <Slider aria-label="slider-ex-1" defaultValue={20} w={20} top={-1} ml={2} mr={2}>
                <SliderTrack bg="rgb(59,57,57)">
                <SliderFilledTrack bg="white" _hover={{color:'green'}}/>
                </SliderTrack>
                
            </Slider>

            <IconButton
                backgroundColor={'black'}
                icon={<CgMiniPlayer fontSize={20} color={'white'} />}
            /> 
            <IconButton
                backgroundColor={'black'}
                icon={<MdOpenInFull fontSize={20} color={'white'} />}
            /> 
        </Box>
    </Box>
  )
}
