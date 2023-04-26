import {
  ThemeProvider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { theme } from '../../../styles/libs/Themes/SideBar';
import DraftsIcon from '@mui/icons-material/Drafts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import PanoramaIcon from '@mui/icons-material/Panorama';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PublicIcon from '@mui/icons-material/Public';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideBarItems = [
  { name: 'Моя страница', icon: <AccountCircleIcon /> },
  { name: 'Новости', icon: <ArticleIcon /> },
  { name: 'Сообщения', icon: <DraftsIcon /> },
  { name: 'Друзья', icon: <GroupIcon /> },
  { name: 'Фотографии', icon: <PanoramaIcon /> },
  { name: 'Музыка', icon: <HeadphonesIcon /> },
  { name: 'Закладки', icon: <BookmarksIcon /> },
  { name: 'Настройки', icon: <SettingsSuggestIcon /> },
];

const SideBarSecondaryItems = [
  { name: 'О сайте', icon: <PublicIcon /> },
  { name: 'Выйти', icon: <ExitToAppIcon /> },
];

const SideBar = () => {
  return (
    <Grid container>
      <Grid item sm={2.8} md={2}>
        <ThemeProvider theme={theme}>
          <List>
            {SideBarItems.map((item) => (
              <ListItem key={item.name} disableGutters disablePadding>
                <ListItemButton disableGutters>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <List>
            {SideBarSecondaryItems.map((item) => (
              <ListItem key={item.name} disableGutters disablePadding>
                <ListItemButton disableGutters>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
};

export default SideBar;
