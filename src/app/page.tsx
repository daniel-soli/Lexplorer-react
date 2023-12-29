'use client'
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<{data: [{test: ""}]} | undefined>(undefined);
  const test = async () => {
    const response = await fetch("/api/test", {
      method: "get",
    });
     setData(await response.json()!);
  }

  useEffect(() => {
    test();
  }, []);
  
  return (
    <Box>
      <Typography variant="body2">
        This is the main page
      </Typography>
    </Box>
  )
}
