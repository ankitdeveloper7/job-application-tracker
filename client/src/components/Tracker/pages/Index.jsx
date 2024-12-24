import React from 'react';
import { Box, Grid } from '@mui/material';
import congratulation from "../../../../public/gif/congratulation.gif";

function Index() {
  return (
    <section id="index">
      <Box sx={{ flexGrow: 1 }} className=" border-2 rounded border-customColor">
    <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
            <div className='pt-[140px] px-15 pb-[100px]
'>
              <img src={congratulation} />
              <p className='text-[22px] text-[#19044599]'>Welcome, </p>
              <p className='text-[#180045] text-[58px] font-[600]'>Ankit!</p>
              <p className='text-[#190445B3] font-[400] text-[18px]'>Experience the full power of JobQuest by completing the steps outlined here. You'll see how our features seamlessly integrate to keep you organized, while speeding up your search.</p>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
            <div>
               <ul className='list-disc'>
                <li className='pt-[13px] px-5 pb-[15px] hover:border-2 border-customColor'>
                  <a href="/signin">
                    <p>Install Chrome Extension</p>
                    <p>Get JobQuest chrome extension to bookmark jobs, view job insights and autofill applications.</p>
                  </a>
                </li>
                <li className='pt-[13px] px-5 pb-[15px] hover:border-2 border-customColor'>
                  <a href="/signin">
                    <p>Install Chrome Extension</p>
                    <p>Get JobQuest chrome extension to bookmark jobs, view job insights and autofill applications.</p>
                  </a>
                </li>
                <li className=' pt-[13px] px-5 pb-[15px] hover:border-2 border-customColor'>
                  <a href="/signin">
                    <p>Install Chrome Extension</p>
                    <p>Get JobQuest chrome extension to bookmark jobs, view job insights and autofill applications.</p>
                  </a>
                </li>
                <li className=' pt-[13px] px-5 pb-[15px] hover:border-2 border-customColor'>
                  <a href="/signin">
                    <p>Install Chrome Extension</p>
                    <p>Get JobQuest chrome extension to bookmark jobs, view job insights and autofill applications.</p>
                  </a>
                </li>
               </ul>
            </div>
        </Grid>
    </Grid>
</Box>
    </section>
  )
}

export default Index;