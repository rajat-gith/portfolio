import React from "react";
import projects from "../assets/json/Data.json";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import "../styles/ComponentStyles.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

function ProjectComponent() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="ProjectComponent">
      <p className="title">Projects</p>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Web" value="1" />
              <Tab label="Android" value="2" />
              <Tab label="Miscallaenous" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Grid container className="project_container" lg={12} spacing="12">
              {projects.web_projects.map((key) => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
                  <AnimationOnScroll animateIn="animate__zoomIn" duration={2}>
                    <Card className="project_card">
                      <p className="project_title">{key.name}</p>
                      <p className="project_desc">{key.description}</p>
                      {key.githubLink != "" ? (
                        <GitHubIcon
                          className="github_icon"
                          onClick={() => {
                            window.open(key.githubLink, "_blank");
                          }}
                        ></GitHubIcon>
                      ) : null}

                      {key.hostedLink != "" ? (
                        <OpenInNewIcon
                          className="project_icon"
                          onClick={() => {
                            window.open(key.hostedLink, "_blank");
                          }}
                        ></OpenInNewIcon>
                      ) : null}
                    </Card>
                  </AnimationOnScroll>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <Grid container className="project_container" lg={12} spacing="12">
              {projects.android_projects.map((key) => (
                <Grid item xs={12} sm={6} md={3} lg={3} xl={4}>
                  <Card className="project_card">
                    <p className="project_title">{key.name}</p>
                    <p className="project_desc">{key.description}</p>
                    {key.githubLink != "" ? (
                      <GitHubIcon
                        className="github_icon"
                        onClick={() => {
                          window.open(key.githubLink, "_blank");
                        }}
                      ></GitHubIcon>
                    ) : null}

                    {key.hostedLink != "" ? (
                      <OpenInNewIcon
                        className="project_icon"
                        onClick={() => {
                          window.open(key.hostedLink, "_blank");
                        }}
                      ></OpenInNewIcon>
                    ) : null}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ProjectComponent;
