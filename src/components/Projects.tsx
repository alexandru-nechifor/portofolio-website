import { Grid, Title, Text } from '@mantine/core';
import { forwardRef } from 'react';
import { dataProjects } from '../constants/dataProjects';
import { useGridContainer } from '../styles/useGridContainer';
import { useProjectsStyles } from '../styles/useProjectsStyles';

const Projects = forwardRef<HTMLElement>((props, ref) => {
  const { classes } = useProjectsStyles();
  const { classes: grid } = useGridContainer();

  return (
    <section className={classes.section} id="projects" ref={ref}>
      <Grid className={grid.container} align="center" gutter={20}>
        <Title
          order={3}
          className={classes.pHeading}
          weight={'normal'}
          data-aos="fade-right"
        >
          My projects
        </Title>

        {dataProjects.map((project) => {
          return (
            <Grid.Col
              sm={12}
              key={project.id}
              className={classes.col}
              data-aos="fade"
            >
              <Grid align="center" justify="space-between">
                <Grid.Col lg={5}>
                  <a href={project.href}>
                    <Title
                      order={2}
                      color="white"
                      weight="normal"
                      className={classes.projectTitle}
                    >
                      {project.title}
                    </Title>
                  </a>
                  <Text mt={15}>{project.description}</Text>
                </Grid.Col>
                <Grid.Col lg={5}>
                  <a href={project.href}>
                    <img
                      src={project.img}
                      alt={project.title}
                      className={classes.projectImg}
                    />
                  </a>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          );
        })}
      </Grid>
    </section>
  );
});

export default Projects;
