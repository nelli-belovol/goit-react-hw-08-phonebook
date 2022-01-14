import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { authSelectors } from '../../redux/auth/authSelectors';
import { tokenConfig } from '../../ApiService/ApiService';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ContactsList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  useEffect(() => {
    tokenConfig.set(token);
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch, token]);

  const handleDelContact = id => {
    dispatch(contactsOperations.delContact(id));
  };

  // const handleEditContact = id => {
  //   console.log(id);
  // };

  const filterContact = () => {
    const normalizeFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
    return filterContacts;
  };

  return (
    <>
      <Box>
        <Grid
          sx={{
            display: 'block',
            maxWidth: '500px',
            margin: 'auto',
          }}
        >
          <Grid sx={{ margin: 'auto', marginTop: '10px', width: '100%' }}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Your contacts:
            </Typography>
            <Demo>
              <List dense={dense}>
                {filterContact().map(contact => {
                  return (
                    <ListItem
                      key={contact.id}
                      secondaryAction={
                        <>
                          {/* <IconButton
                            onClick={() => handleEditContact(contact.id)}
                          >
                            <Chip
                              label="Edit"
                              color="primary"
                              variant="outlined"
                            />
                          </IconButton> */}
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleDelContact(contact.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={contact.name}
                        secondary={secondary ? `${contact.number}` : null}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>

      {/* <ul>
        {filterContact().map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                onClick={() => handleDelContact(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul> */}
    </>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDel: PropTypes.func,
};
