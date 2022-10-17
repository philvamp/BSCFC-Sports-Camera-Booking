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
 // deleteNote as deleteNoteMutation,
  updateNote as updateNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() 
  {
    var Today = new Date();
    

    let filter = 
    {
      isdeleted: {eq: "false"},
      realdate: {ge: Today}
    };
    const apiData = await API.graphql({ query: listNotes, variables: { filter: filter}});
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  };
  
/*
  async function formatDate(date){
    const dayName = Date(date).toLocaleDateString('en-US');
  };
*/




  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = { 
      name: form.get("name"),
      contact: form.get("contact"),
      description: form.get("description"),
      agegroup: form.get("agegroup"),
      gender: form.get("gender"),
      location: form.get("location"),
      pitch: form.get("pitch"),
      date: form.get("date"),
      time: form.get("time"),  
      realdate: form.get("date"),
      realtime: form.get("time"), 
      isdeleted: "false",
       };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function updateNote({ id }) 
  {
       const updatedNote = notes.filter((note) => note.id !== id);
       const my_id = id;
       const myversion = "1";
       const data = {id: my_id, isdeleted: "true", _version: myversion };
     
    setNotes(updatedNote);
    await API.graphql({
        query: updateNoteMutation,
        variables: { input: data },
    });

    fetchNotes();
  } 

/* async function deleteNote({ id })  
  {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }
*/

function myFunction(e) {
	var gender = document.getElementById('gender').value;
	if (gender == 'boys'){
		document.getElementById("printGender").src="http://example.com/male.svg";
		
	} else if (gender == 'girls') {
		document.getElementById("printGender").src="http://example.com/female.svg";
	}
};

  return (
    <View className="App">
      <Heading level={1}>BSCFC Sports Camera Booking System</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
        <TextField
            name="date"
            placeholder="yyyy-mm-dd"
            label="Date"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="name"
            placeholder="Mangers Name"
            label="Managers Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="contact"
            placeholder="Contact Name"
            label="Conacts Name"
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
          <label for="name"></label>
          <select onchange="myFunction(event)" name="agegroup" class="nofocus" id="agegroup" required>
            <option value="U8">U8</option>
            <option value="U9">U9</option>
            <option value="U10">U10</option>
            <option value="U11">U11</option>
            <option value="U12">U12</option>
            <option value="U13">U13</option>
            <option value="U14">U14</option>
            <option value="U15">U15</option>
            <option value="U16">U16</option>
            <option value="U17">U17</option>
          </select>
          <label for="name"></label>
          <select onchange="myFunction(event)" name="gender" class="nofocus" id="gender" required>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
          <TextField
            name="location"
            placeholder="Location"
            label="Location"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="pitch"
            placeholder="Pitch"
            label="Pitch"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="time"
            placeholder="hh:mm"
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
            <Text as="span">{note.realdate}</Text>
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.contact}</Text>
            <Text as="span">{note.description}</Text>
            <Text as="span">{note.agegroup}</Text>
            <Text as="span">{note.gender}</Text>
            <Text as="span">{note.location}</Text>
            <Text as="span">{note.pitch}</Text>
            <Text as="span">{note.realtime}</Text>
            <Button variation="link" onClick={() => updateNote(note)}>
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
