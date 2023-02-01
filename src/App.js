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
  withAuthenticator,} from "@aws-amplify/ui-react";
import { listNotes } from "./graphql/queries";
import {createNote  as createNoteMutation,updateNote as updateNoteMutation,} from "./graphql/mutations";



     const App = ({ signOut }) => {
      const [notes, setNotes] = useState([]);
    
      useEffect(() => {  fetchNotes(); 
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);     
       


  async function fetchNotes() 
  {
    console.log('fetching notes');

    var Today = new Date(); 
    const Yesterday = new Date(Today.getTime());
    Yesterday.setDate(Yesterday.getDate() - 1);


   var someDate = new Date();
   var numberOfDaysToAdd = 28;
   var FutureDate = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

   console.log("Future Date:", FutureDate);
   console.log("Todays date:", Today);


   var myArray = getDatesInRange(Today, FutureDate);
   var dropdown = document.getElementById("date");  
   // Loop through the array
   for (var i = 0; i < myArray.length; ++i) {
    // Append the element to the end of Array list
     dropdown[dropdown.length] = new Option(myArray[i].toLocaleDateString('en-GB'), myArray[i].toLocaleDateString('en-GB'));
   }  

    console.log("yesterday date:", Yesterday);

    let filter = 
    {
      isdeleted: {eq: "false"},
      realdate: {ge: Yesterday }
    };


    const apiData = await API.graphql({ query: listNotes, variables: { filter: filter }});
    const notesFromAPI = apiData.data.listNotes.items;
    let sortedAsc = notesFromAPI.sort((a, b) => new Date(a.realdate) - new Date(b.realdate),); 
    setNotes(sortedAsc)     ;
  }
  


    function getDatesInRange(startDate, endDate) {
      const date = new Date(startDate.getTime());
      const dates = [];

      console.log('getting dates in range');


      while (date <= endDate) {
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      } 
      return dates;
    
    }

    function convertStringToDate(formdate)
    {
      console.log('here go', formdate);
      var parts = formdate.split('/');
      parts.reverse();
      var mydate = parts.join("-"); 
      console.log('must be', mydate);
      return mydate;
    }

    function convertDateToString(formdate)
    {
      console.log('here go', formdate);
      var partss = formdate.split('-');
      partss.reverse();
      var mydates = partss.join("/"); 
      console.log('must be', mydates);
      return mydates;
    }

    function validateTimeFormat (testTime)
    {
      const theTime = new String(testTime);
      var include = ":";
      var a = document.getElementById("a");
      
      if (!(theTime.includes(include))) {  
        alert("Missing '" + include + "' in time field hh:mm");
        a.innerHTML = "found '" + include + "' in your string";
      }

      return theTime;
     }

    async function createNote(event) {
      event.preventDefault();

      const form = new FormData(event.target);
      console.log('from the form', convertStringToDate(form.get("date")));
      const data = { 
        name: form.get("name"),
        contact: form.get("contact"),
        description: form.get("description"),
        agegroup: form.get("agegroup"),
        gender: form.get("gender"),
        location: form.get("location"),
        pitch: form.get("pitch"),
        realdate: convertStringToDate(form.get("date")),
        realtime: validateTimeFormat(form.get("time")), 
        isdeleted: "false",
        };
      await API.graphql({
        query:    createNoteMutation,
        variables: { input: data },
      });


      console.log('creating note');
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



  
  return (
    <View className="App">
      <Heading level={1}>BSCFC Sports Camera Booking System</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
            <label for="name"></label>
            <select name="date" class="nofocus" id="date" required>
              <option>Choose a date</option>
            </select>



          <TextField
            name="name" 
            placeholder="Managers Name"
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
          <select name="agegroup" class="nofocus" id="agegroup" required>
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
          <select name="gender" class="nofocus" id="gender" required>
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
            <Text as="span">{convertDateToString(note.realdate)}</Text>
            <Text as="strong" fontWeight={700}>{note.name}</Text>
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
