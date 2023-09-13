const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
require("dotenv").config()
// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB Connection Established"))
.catch((error)=>console.log("MongoDB Connection Failed: ", error.message));

const personSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
    default: 1, // Starting value
  },
  name: String,
});

const Person = mongoose.model('Person', personSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let nextId = 1;
// Create a new person
app.post('/api', async (req, res) => {
  const { name } = req.body;

  if (typeof name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string' });
  }

  const person = new Person({ id:nextId, name });

  try {
    const savedPerson = await person.save();
    nextId++;
    res.json(savedPerson);
  } catch (err) {
    res.status(500).json({ error: 'Could not create person' });
  }
});

// Fetch details of a person by ID
app.get('/api/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const person = await Person.findById(id);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch person' });
  }
});

// Update details of a person by ID
app.put('/api/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (typeof name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string' });
  }

  try {
    const updatedPerson = await Person.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(updatedPerson);
  } catch (err) {
    res.status(500).json({ error: 'Could not update person' });
  }
});

// Delete a person by ID
app.delete('/api/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPerson = await Person.findByIdAndRemove(id);
    if (!deletedPerson) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(deletedPerson);
  } catch (err) {
    res.status(500).json({ error: 'Could not delete person' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});