import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      agegroup: form.get("agegroup"),
      gender: form.get("gender"),
      location: form.get("location"),
      date: form.get("date"),
      time: form.get("time"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">
      <Heading level={1}>BSCFC Sports Camera Booking System</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Mangers Name"
            label="Managers Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Team Name"
            label="Team Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="agegroup"
            placeholder="Age Group"
            label="AGe Group"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="gender"
            placeholder="Gender"
            label="Gender"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="location"
            placeholder="Location"
            label="Location"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="date"
            placeholder="Date"
            label="Date"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="time"
            placeholder="Time"
            label="Time"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Booking
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Bookings</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete booking
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);