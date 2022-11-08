require('dotenv').config();
const express = require('express');
const cors = require('cors');



// middle wares
app.use(cors());
app.use(express.json());