import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import HomeIcon from '@material-ui/icons/Home'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'
import FolderIcon from '@material-ui/icons/Folder'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Achievements from './pages/achievements'
import Projects from './pages/projects'
import yo from './images/yo.png'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import GetAppIcon from '@material-ui/icons/GetApp'

const drawerWidth = 340

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: 'linear-gradient(135deg, rgba(2,0,36,1) 50%, rgba(163,38,197,1) 87%, rgba(231,99,104,1) 100%)',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      zIndex: theme.zIndex.drawer + 1,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: '#47167d'
  },
  toolbarContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flexGrow: 1,
    margin: '60px',
    paddingTop: theme.spacing(2),
    background: '#ffffff'
  },
  diagonalGradient: {
    background: 'linear-gradient(to right bottom, #E76368, #A326C5)'
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    height: '120px',
    width: '120px',
    borderRadius: '50%'
  },
  containerAvatar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  cardAvatar: {
    margin: '1rem 0',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'left',
    alignItems: 'flex-start',
    fontSize: '12px'
  },
  colorIcon: {
    color: '#47167d'
  },
  button: {
    background: '#E76368',
    color: '#fff'
  },
  list: {
    width: '100%'
  }
}))

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const preventDefault = (event) => event.preventDefault()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key='iam'>
            <ListItemIcon><HomeIcon className={classes.colorIcon} /></ListItemIcon>
          Experiencia
        </ListItem>
        </Link>
        <Link to="/skills" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key='skill'>
            <ListItemIcon><GroupWorkIcon className={classes.colorIcon} /></ListItemIcon>
            Habilidades
          </ListItem>
        </Link>
        <Link to="/achievements" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key='achievements'>
            <ListItemIcon><SentimentVerySatisfiedIcon className={classes.colorIcon} /></ListItemIcon>
          Logros
        </ListItem>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button key='Project'>
            <ListItemIcon><FolderIcon className={classes.colorIcon} /></ListItemIcon>
            <ListItemText primary='Proyectos' />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <Card className={classes.cardAvatar} elevation={0}>
        <CardActionArea className={classes.containerAvatar}>
          <CardMedia
            component="img"
            alt="Web Developer"
            image={yo}
            title="Lucero Ramos"
            className={classes.avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">Web developer</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Soy desarrolladora web con 3 años de experiencia, especializada en <b><em>front end y UX.</em></b></Typography>
            <Typography variant="body2" color="textSecondary" component="p">Apasionada por escribir codigo creativo que solucione problemas complejos.</Typography>
          </CardContent>

        </CardActionArea>
        <CardActions disableSpacing className={classes.actions}>
          <List className={classes.list}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit", pointerEvents: 'none' }} onClick={preventDefault}>
              <ListItem button>
                <ListItemIcon><LocationOnIcon className={classes.colorIcon} /></ListItemIcon>
                Monterrey, NL
              </ListItem>
            </Link>
            <a href="tel:5520339680" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon><PhoneAndroidIcon className={classes.colorIcon} /></ListItemIcon>
            5520339680
          </ListItem>
            </a>
            <a href="mailto:ing.lucero.ramos@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon><MailIcon className={classes.colorIcon} /></ListItemIcon>
                ing.lucero.ramos@gmail.com
              </ListItem>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5520339680&" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon><WhatsAppIcon className={classes.colorIcon} /></ListItemIcon>
                Mensajes
              </ListItem>
            </a>
            <a href="https://github.com/Lucero07" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon><GitHubIcon className={classes.colorIcon} /></ListItemIcon>
                @lucero07
              </ListItem>
            </a>
            <a href="https://www.linkedin.com/in/ing-lucero-ramos/" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem button>
                <ListItemIcon><LinkedInIcon className={classes.colorIcon} /></ListItemIcon>
                @ing-lucero-ramos
              </ListItem>
            </a>
            <Button
            href="https://github.com/Lucero07/portafolio-lucero/blob/master/src/images/cv-lucero-ramos.pdf"
            target='_blank'
            fullWidth
              variant="contained"
              className={classes.button}
            >
             CV Lucero Ramos
      </Button>
          </List>
        </CardActions>
      </Card>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbarContent}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Lucero Ramos
          </Typography>
        </Toolbar>
      </AppBar>

      <Router>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/achievements">
              <Achievements />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div >
  )
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default ResponsiveDrawer
