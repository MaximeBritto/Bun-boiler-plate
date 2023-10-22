const PKM = require('../models/pokemonModel');

// Create and save a new Pkm
exports.create = (req, res) => {
    console.log(req.body);
    const postPkm = req.body;
    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });

pkm.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Pkm."
    });
});
};
// Retrieve and return all Pkm from the database.
exports.findAll = (req, res) => {
    PKM.find()
    .then(pkms => {
        res.send(pkms);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving pkm."
        });
    });
};

// Find a single Pkm with a pkmId

exports.findOne = (req, res) => {
    PKM.findById(req.params.pkmId)
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });            
        }
        res.send(pkm);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving pkm with id " + req.params.pkmId
        });
    });
};


// Update a Pkm identified by the pkmId in the request

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Pkm name can not be empty"
        });
    }

    // Find pkm and update it with the request body
    PKM.findByIdAndUpdate(req.params.pkmId, {
        name: req.body.name || "Untitled Pkm",
        type: req.body.type,
        level: req.body.level
    }, {new: true})
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });
        }
        res.send(pkm);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });                
        }
        return res.status(500).send({
            message: "Error updating pkm with id " + req.params.pkmId
        });
    });
};

// Delete a Pkm with the specified pkmId in the request

exports.delete = (req, res) => {
    PKM.findByIdAndRemove(req.params.pkmId)
    .then(pkm => {
        if(!pkm) {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });
        }
        res.send({message: "Pkm deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Pkm not found with id " + req.params.pkmId
            });                
        }
        return res.status(500).send({
            message: "Could not delete pkm with id " + req.params.pkmId
        });
    });
};




