// const Killer = require('../models/killer');
//
// // Handle index actions
// exports.index = function (req, res) {
//     Killer.get(function (err, killers) {
//         if (err) {
//             res.json({
//                 status: "error",
//                 message: err,
//             });
//         }
//         res.json({
//             status: "success",
//             message: "Killers retrieved successfully",
//             data: killers
//         });
//     });
// };
// // Handle create contact actions
// exports.new = function (req, res) {
//     var killer = new Killer();
//     killer.photo = req.body.photo;
//     killer.name = req.body.name ? req.body.name : killer.name;
//     killer.alias = req.body.alias;
//     killer.birthdate = req.body.birthdate;
//     killer.birthplace = req.body.birthplace;
//     killer.countryactive = req.body.countryactive;
//     killer.dateactive = req.body.dateactive;
//     killer.victimcount = req.body.victimcount;
//     killer.victims = req.body.victims;
//     killer.motive = req.body.motive;
//     killer.description = req.body.description;
//     killer.status = req.body.status;
// // save the killer and check for errors
//     killer.save(function (err) {
//         // if (err)
//         //     res.json(err);
//         res.json({
//             message: 'New killer created!',
//             data: killer
//         });
//     });
// };
// // Handle view killer info
// exports.view = function (req, res) {
//    Killer.findById(req.params.killer_id, function (err, killer) {
//         if (err)
//             res.send(err);
//         res.json({
//             message: 'Killer details loading..',
//             data: killer
//         });
//     });
// };
// // Handle update contact info
// exports.update = function (req, res) {
//     Killer.findById(req.params.killer_id, function (err, killer) {
//         if (err)
//             res.send(err);
//         killer.photo = req.body.photo;
//         killer.name = req.body.name ? req.body.name : killer.name;
//         killer.alias = req.body.alias;
//         killer.birthdate = req.body.birthdate;
//         killer.birthplace = req.body.birthplace;
//         killer.countryactive = req.body.countryactive;
//         killer.dateactive = req.body.dateactive;
//         killer.victimcount = req.body.victimcount;
//         killer.victims = req.body.victims;
//         killer.motive = req.body.motive;
//         killer.description = req.body.description;
//         killer.status = req.body.status;
// // save the contact and check for errors
//         killer.save(function (err) {
//             if (err)
//                 res.json(err);
//             res.json({
//                 message: 'Contact Info updated',
//                 data: killer
//             });
//         });
//     });
// };
// // Handle delete contact
// exports.delete = function (req, res) {
//     Killer.remove({
//         _id: req.params.killer_id
//     }, function (err, killer) {
//         if (err)
//             res.send(err);
//         res.json({
//             status: "success",
//             message: 'Contact deleted'
//         });
//     });
// };