import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Box, Container, Grid, Typography, Button, Chip, Card, CardContent,
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton,
  ListItemText, Divider, Link, Tooltip
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material';
import {
  personalInfo, navLinks, techStack, projects, experience, education,
  achievements, socialLinks
} from './data';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;
    setScrollProgress(progress);
    setShowBackToTop(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Scroll Progress Indicator */}
      <Box 
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #646cff, #00d4aa)',
          zIndex: 1000,
          width: `${scrollProgress}%`,
          transition: 'width 0.3s ease'
        }}
      />

      {/* Navigation */}
      <AppBar position="fixed" sx={{ 
        backgroundColor: 'rgba(10, 10, 26, 0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{ fontWeight: 700, color: '#646cff', fontSize: '1.25rem' }}
          >
            {personalInfo.name}
          </Typography>
          
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                onClick={() => scrollToSection(link.path.substring(1))}
                sx={{
                  color: '#b8b8b8',
                  fontWeight: 500,
                  position: 'relative',
                  '&:hover': {
                    color: '#646cff'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: '#646cff',
                    transition: 'width 0.3s ease'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>
          
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, color: '#b8b8b8' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#0a0a1a',
            borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
            width: '70%'
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ color: '#646cff', fontWeight: 700 }}>
            {personalInfo.name}
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#b8b8b8' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.name} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(link.path.substring(1))}
                sx={{ py: 2 }}
              >
                <ListItemText primary={link.name} sx={{ color: '#b8b8b8' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ pt: 10 }}>
        
        {/* Hero Section */}
        <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
          <Container sx={{ py: 8 }}>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="h1" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                    Hi, I'm {personalInfo.name}
                  </Typography>
                  <Typography variant="h2" sx={{ 
                    mb: 3,
                    color: '#646cff',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 600
                  }}>
                    {personalInfo.title}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 4,
                    color: '#b8b8b8',
                    fontSize: '1.125rem',
                    maxWidth: '600px'
                  }}>
                    {personalInfo.intro}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      href={personalInfo.resume}
                      download="ANURAG_Resume.pdf"
                      sx={{
                        background: 'linear-gradient(90deg, #646cff, #00d4aa)',
                        '&:hover': { background: 'linear-gradient(90deg, #535bf2, #00a88a)', transform: 'translateY(-2px)' },
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📄 Download Resume
                    </Button>
                    <Button
                      variant="outlined"
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: '#646cff',
                        color: '#646cff',
                        '&:hover': { 
                          borderColor: '#535bf2',
                          background: 'rgba(100, 108, 255, 0.1)'
                        },
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px'
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      variant="outlined"
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        borderColor: '#646cff',
                        color: '#646cff',
                        '&:hover': { 
                          borderColor: '#535bf2',
                          background: 'rgba(100, 108, 255, 0.1)'
                        },
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px'
                      }}
                    >
                      LinkedIn
                    </Button>
                    <Button
                      variant="outlined"
                      href={`mailto:${personalInfo.email}`}
                      sx={{
                        borderColor: '#646cff',
                        color: '#646cff',
                        '&:hover': { 
                          borderColor: '#535bf2',
                          background: 'rgba(100, 108, 255, 0.1)'
                        },
                        px: 4,
                        py: 1.5,
                        borderRadius: '8px'
                      }}
                    >
                      Contact Me
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </section>

        {/* About Section */}
        <section id="about">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                About Me
              </Typography>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Typography variant="body1" sx={{ 
                    mb: 3,
                    color: '#b8b8b8',
                    fontSize: '1.125rem',
                    lineHeight: 1.8
                  }}>
                    I'm a passionate <strong>Full Stack Software Developer</strong> currently pursuing my 
                    Bachelor's degree in <strong>Computer Science Engineering with specialization in AI & ML</strong> 
                    at Chandigarh University.
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 3,
                    color: '#b8b8b8',
                    fontSize: '1.125rem',
                    lineHeight: 1.8
                  }}>
                    My expertise spans across the entire software development lifecycle, from designing 
                    and building robust backend APIs to crafting intuitive and responsive frontend interfaces.
                    I have a strong foundation in <strong>backend engineering</strong>, <strong>SQL databases</strong>, and 
                    <strong>AI integration</strong>, which allows me to create comprehensive, data-driven applications.
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#b8b8b8',
                    fontSize: '1.125rem',
                    lineHeight: 1.8
                  }}>
                    I thrive on solving complex problems and building scalable solutions that deliver real value.
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </section>

        {/* Tech Stack Section */}
        <section id="techstack">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Tech Stack
              </Typography>
              <Box sx={{ mb: 4 }}>
                {Object.entries(techStack).map(([category, skills]) => (
                  <Box key={category} sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ 
                      mb: 2,
                      color: '#ffffff',
                      fontSize: '1.5rem',
                      textTransform: 'capitalize'
                    }}>
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: 'rgba(100, 108, 255, 0.1)',
                            color: '#646cff',
                            border: '1px solid rgba(100, 108, 255, 0.3)',
                            borderRadius: '20px',
                            px: 2,
                            py: 1,
                            fontWeight: 500
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Container>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Featured Projects
              </Typography>
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                {projects.map((project, index) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <Card sx={{
                      mb: 4,
                      background: '#1a1a2e',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(100, 108, 255, 0.3)',
                        boxShadow: '0 10px 40px rgba(100, 108, 255, 0.1)',
                        transform: 'translateY(-5px)'
                      }
                    }}>
                      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Grid container spacing={3} alignItems="center">
                          <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ 
                              mb: 0.5,
                              color: '#ffffff',
                              fontSize: '1.5rem'
                            }}>
                              {project.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ 
                              mb: 1.5,
                              color: '#646cff',
                              fontSize: '0.9rem',
                              fontWeight: 500
                            }}>
                              {project.subtitle} — {project.year}
                            </Typography>
                            <Typography variant="body1" sx={{ 
                              mb: 2,
                              color: '#b8b8b8',
                              fontSize: '1rem'
                            }}>
                              {project.description}
                            </Typography>
                            <Box sx={{ mb: 2 }}>
                              {project.tags.map((tag) => (
                                <Chip
                                  key={tag}
                                  label={tag}
                                  size="small"
                                  sx={{
                                    background: 'rgba(100, 108, 255, 0.1)',
                                    color: '#646cff',
                                    border: '1px solid rgba(100, 108, 255, 0.3)',
                                    borderRadius: '20px',
                                    mr: 1,
                                    mb: 1,
                                    fontSize: '0.75rem'
                                  }}
                                />
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                              <Button
                                variant="contained"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  background: '#646cff',
                                  '&:hover': { background: '#535bf2' },
                                  px: 3,
                                  py: 1,
                                  borderRadius: '8px',
                                  fontSize: '0.875rem'
                                }}
                              >
                                Live Demo
                              </Button>
                              <Button
                                variant="outlined"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                  borderColor: '#646cff',
                                  color: '#646cff',
                                  '&:hover': { 
                                    borderColor: '#535bf2',
                                    background: 'rgba(100, 108, 255, 0.1)'
                                  },
                                  px: 3,
                                  py: 1,
                                  borderRadius: '8px',
                                  fontSize: '0.875rem'
                                }}
                              >
                                GitHub
                              </Button>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 2
                            }}>
                              <Typography variant="subtitle1" sx={{ 
                                color: '#b8b8b8',
                                fontSize: '1rem'
                              }}>
                                Key Highlights:
                              </Typography>
                              <Box sx={{ pl: 2 }}>
                                {project.highlights.map((highlight, i) => (
                                  <Typography 
                                    key={i}
                                    variant="body2"
                                    sx={{
                                      color: '#b8b8b8',
                                      mb: 1,
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 1
                                    }}
                                  >
                                    <Box component="span" sx={{
                                      width: '8px',
                                      height: '8px',
                                      background: '#646cff',
                                      borderRadius: '50%',
                                      mt: 0.5,
                                      flexShrink: 0
                                    }} />
                                    {highlight}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Experience
              </Typography>
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                {experience.map((exp, index) => (
                  <motion.div key={exp.id} variants={staggerItem}>
                    <Card sx={{
                      mb: 3,
                      background: '#1a1a2e',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                        <Grid container spacing={2} alignItems="flex-start">
                          <Grid item xs={12} md={3}>
                            <Typography variant="h4" sx={{ 
                              color: '#ffffff',
                              fontSize: '1.25rem',
                              mb: 1
                            }}>
                              {exp.role}
                            </Typography>
                            <Typography variant="body1" sx={{ 
                              color: '#646cff',
                              fontSize: '1rem',
                              mb: 0.5
                            }}>
                              {exp.company}
                            </Typography>
                            {exp.stack && (
                              <Typography variant="body2" sx={{ color: '#b8b8b8', fontSize: '0.8rem', mb: 0.5 }}>
                                {exp.stack} · {exp.type}
                              </Typography>
                            )}
                            <Typography variant="body2" sx={{ 
                              color: '#888',
                              fontSize: '0.875rem'
                            }}>
                              {exp.duration}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={9}>
                            <Box sx={{ pl: { xs: 0, md: 2 } }}>
                              {exp.description.map((desc, i) => (
                                <Typography 
                                  key={i}
                                  variant="body2"
                                  sx={{
                                    color: '#b8b8b8',
                                    mb: 1,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 1
                                  }}
                                >
                                  <Box component="span" sx={{
                                    width: '8px',
                                    height: '8px',
                                    background: '#646cff',
                                    borderRadius: '50%',
                                    mt: 0.75,
                                    flexShrink: 0
                                  }} />
                                  {desc}
                                </Typography>
                              ))}
                            </Box>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Education Section */}
        <section id="education">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Education
              </Typography>
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                {education.map((edu) => (
                  <motion.div key={edu.id} variants={staggerItem}>
                    <Card sx={{
                      background: '#1a1a2e',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      maxWidth: '800px',
                      margin: '0 auto',
                      mb: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(100, 108, 255, 0.3)',
                        boxShadow: '0 8px 30px rgba(100, 108, 255, 0.08)'
                      }
                    }}>
                      <CardContent sx={{ p: { xs: 2, md: 4 }, textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ 
                          mb: 1,
                          color: '#ffffff',
                          fontSize: '1.5rem'
                        }}>
                          {edu.institution}
                        </Typography>
                        <Typography variant="h4" sx={{ 
                          mb: 1.5,
                          color: '#646cff',
                          fontSize: '1.1rem',
                          fontWeight: 500
                        }}>
                          {edu.degree}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 0.5, color: '#b8b8b8' }}>
                          <strong>{edu.score}</strong>
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 0.5, color: '#b8b8b8' }}>
                          {edu.duration}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#888' }}>
                          {edu.location}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </Container>
        </section>



        {/* Achievements & Certifications Section */}
        <section id="achievements">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Achievements & Certifications
              </Typography>
              <motion.div variants={staggerContainer} initial="initial" animate="animate">
                <Grid container spacing={3}>
                  {achievements.map((achievement) => (
                    <Grid item xs={12} sm={6} md={4} key={achievement.id}>
                      <motion.div variants={staggerItem}>
                        <Card sx={{
                          background: '#1a1a2e',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          height: '100%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: 'rgba(100, 108, 255, 0.3)',
                            boxShadow: '0 8px 30px rgba(100, 108, 255, 0.08)',
                            transform: 'translateY(-4px)'
                          }
                        }}>
                          <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="h5" sx={{ 
                              color: '#ffffff',
                              fontSize: '1.05rem',
                              fontWeight: 600,
                              lineHeight: 1.4
                            }}>
                              {achievement.title}
                            </Typography>
                            <Typography variant="body2" sx={{ 
                              color: '#b8b8b8',
                              fontSize: '0.875rem',
                              lineHeight: 1.6,
                              flexGrow: 1
                            }}>
                              {achievement.description}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                              <Typography variant="body2" sx={{ color: '#888', fontSize: '0.8rem' }}>
                                {achievement.date}
                              </Typography>
                              {achievement.credentialUrl && (
                                <Button
                                  size="small"
                                  href={achievement.credentialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  sx={{
                                    color: '#646cff',
                                    fontSize: '0.75rem',
                                    p: 0,
                                    minWidth: 'auto',
                                    '&:hover': { color: '#535bf2' }
                                  }}
                                >
                                  View Credential →
                                </Button>
                              )}
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <Typography variant="h2" className="section-title">
                Get In Touch
              </Typography>
              <motion.div variants={fadeIn} initial="initial" animate="animate">
                <Card sx={{
                  background: '#1a1a2e',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  maxWidth: '800px',
                  margin: '0 auto',
                  textAlign: 'center'
                }}>
                  <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Typography variant="body1" sx={{ 
                      mb: 4,
                      color: '#b8b8b8',
                      fontSize: '1.125rem',
                      lineHeight: 1.8
                    }}>
                      I'm currently looking for new opportunities and collaborations. 
                      Feel free to reach out if you'd like to discuss a project, job opportunity, 
                      or just connect!
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                      <Button
                        variant="contained"
                        href={`mailto:${personalInfo.email}`}
                        sx={{
                          background: '#646cff',
                          '&:hover': { background: '#535bf2' },
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px'
                        }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>📧</Box>
                        {personalInfo.email}
                      </Button>
                      <Button
                        variant="outlined"
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: '#646cff',
                          color: '#646cff',
                          '&:hover': { 
                            borderColor: '#535bf2',
                            background: 'rgba(100, 108, 255, 0.1)'
                          },
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px'
                        }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>🔗</Box>
                        LinkedIn
                      </Button>
                      <Button
                        variant="outlined"
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: '#646cff',
                          color: '#646cff',
                          '&:hover': { 
                            borderColor: '#535bf2',
                            background: 'rgba(100, 108, 255, 0.1)'
                          },
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px'
                        }}
                      >
                        <Box component="span" sx={{ mr: 1 }}>💻</Box>
                        GitHub
                      </Button>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                      <Button
                        variant="contained"
                        href={personalInfo.resume}
                        download
                        sx={{
                          background: 'linear-gradient(90deg, #646cff, #00d4aa)',
                          '&:hover': { 
                            background: 'linear-gradient(90deg, #535bf2, #00a88a)'
                          },
                          px: 4,
                          py: 1.5,
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        📄 Download Resume
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Footer */}
        <Box sx={{ 
          background: '#0a0a1a',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          py: 4
        }}>
          <Container>
            <motion.div initial="initial" animate="animate" variants={fadeIn}>
              <Typography variant="body2" sx={{ 
                textAlign: 'center',
                color: '#666',
                mb: 2
              }}>
                © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </Typography>
              <Typography variant="body2" sx={{ 
                textAlign: 'center',
                color: '#666',
                fontSize: '0.875rem'
              }}>
                Built with React, Material UI, and ❤️
              </Typography>
            </motion.div>
          </Container>
        </Box>
      </Box>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#646cff',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          '&:hover': {
            background: '#535bf2',
            transform: 'translateY(-3px)'
          }
        }}
        aria-label="Back to top"
      >
        <ArrowUpwardIcon />
      </Button>
    </Box>
  );
}

export default App;
