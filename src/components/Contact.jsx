import React from "react";
import { Button, Stack, TextField, Box } from "@mui/material";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
export const Contact = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center">
        <header className="flex flex-col justify-center items-center font-Inter min-h-10 ">
          <h1 className="text-lg sm:text-3xl">We are here to help you level up</h1>
          <p className="text-xs">
            We Are just one Click to help you With your queries.
          </p>
        </header>
        <div className="flex  justify-center  min-h-90vh  items-start w-screen ">
          <div className="w-1/2 hidden md:flex min-h-65 items-center  md:justify-center ">
            {" "}
            <img src="contact.png" alt="" className="w-full" />{" "}
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col   min-h-65  justify-start md:justify-center items-center">
            <div className="flex flex-col w-full gap-5   items-center justify-center ">
              <FormControl>
                {" "}
                <h1 className="text-2xl font-Inter mb-2">Contact Us</h1>
                <FormLabel id="job-experience-group-label">
                  <h1 className="text-black font-bold">Ask Query As</h1>
                </FormLabel>
                <RadioGroup
                  id="job-experience-group"
                  aria-labelledby="job-experience-group-label"
                  row
                >
                  <FormControlLabel
                    control={<Radio size="small" color="warning" />}
                    label="Guru"
                    value="Guru"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Mentee"
                    value="Mentee"
                  />
                </RadioGroup>
              </FormControl>
              <Box display={"flex"} width={"90%"} gap={2}>
                <TextField required label="First Name" sx={{ width: "50%" }} />
                <TextField required label="Last Name" sx={{ width: "50%" }} />
              </Box>
              <Box display={"flex"} width={"90%"} gap={2}>
                <TextField
                  required
                  label="Email Address"
                  sx={{ width: "50%" }}
                />
                <TextField label="Mobile" sx={{ width: "50%" }} />
              </Box>
              <Box display={"flex"} width={"90%"} gap={2}>
                <TextField
                  label="Your Message"
                  multiline
                  rows={4}
                  // variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box width={"100%"} justifyContent={"center"} display={"flex"}>
                <Button variant="contained" style={{ background: "#413a97" , width:"40%"}}>
                  Submit
                </Button>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
