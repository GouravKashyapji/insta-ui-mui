import { Box, Tab, Tabs } from '@mui/material'
import React, { memo, useState } from 'react'

const TabList = () => {
  console.log('Tablist')
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
       <Box sx={{ width: '100%', mb:'20px' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Posts" />
        <Tab label="Reels" />
        <Tab label="Guides" />
        <Tab label="Tagged" />
      </Tabs>
    </Box>
    </>
  )
}

// export default TabList
export default memo(TabList)
