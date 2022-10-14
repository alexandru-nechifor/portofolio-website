import { Grid, Title, Text, Group } from '@mantine/core';
import { dataSkills } from '../constants/dataSkills';
import { useGridContainer } from '../styles/useGridContainer';
import { useSkillStyles } from '../styles/useSkillsStyles';

const Skills = () => {
  const { classes } = useSkillStyles();
  const { classes: grid } = useGridContainer();
  return (
    <>
      <section className={classes.section} id="skills">
        <Grid className={grid.container} gutter={30} align="center">
          {dataSkills.map((item) => {
            const Icon = item.icon;
            return (
              <Grid.Col sm={12} md={6} lg={4} key={item.title}>
                <div className={classes.box}>
                  <Icon className={classes.icon} title={item.title} />
                  <Title order={3} my={15}>
                    {item.title}
                  </Title>
                  <Text>{item.text}</Text>

                  <Group className={classes.imageGroup} position="center" grow>
                    {item.images.map((image) => {
                      return (
                        <img
                          src={image.url}
                          alt={image.title}
                          className={classes.skillImage}
                          title={image.title}
                          key={image.title}
                        />
                      );
                    })}
                  </Group>
                </div>
              </Grid.Col>
            );
          })}
        </Grid>
      </section>
    </>
  );
};

export default Skills;