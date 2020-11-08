// const express = require("express");
// //const ejs = require("ejs");
// const paypal = require("paypal-rest-sdk");
// //const bodyParser = require("body-parser");
// //const cors = require("cors");
// //const mongoose = require("mongoose");
// //mongoose.connect("mongodb://localhost/test");
// //const db = mongoose.connection;

// paypal.configure({
//   'mode': 'sandbox', //sandbox or live
//   'client_id': 'EBWARYvri09N_9XMYwdGE4YC0fHpYpWHurArCPU_6I0csU0lXyPBbJi5I7it4pm24BpxyqKIllhScOP0z8IKjlELKMYqRNQ6sYvFo64FtaRLRR5BdHEESmha49TM',
//   'client_secret': 'EO422dn3gQLgDbuwqTjzrFgFtaRLRREKWsOPGzn14vwKOXvw2of9hj1PoJHmtcF1bJx7oa0UYKh2nvQuu-ZHb-Wlhixcwc5xC---K412n8molC5BdHEESmha49TM'
// });

// const app = express();
// const port = 3000;

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => res.render('index'));

// app.post('/pay', (req, res) => {
//   const create_payment_json = {
//     "intent": "sale",
//     "payer": {
//         "payment_method": "paypal"
//     },
//     "redirect_urls": {
//         "return_url": "http://localhost:3000/success",
//         "cancel_url": "http://localhost:3000/cancel"
//     },
//     "transactions": [{
//         "item_list": {
//             "items": [{
//                 "name": "Let Me Sleep",
//                 "sku": "001",
//                 "price": "1.00",
//                 "currency": "USD",
//                 "quantity": 1
//             }]
//         },
//         "amount": {
//             "currency": "USD",
//             "total": "5.00"
//         },
//         "description": "A sticker for the best person ever."
//     }]
// };

// paypal.payment.create(create_payment_json, function (error, payment) {
//   if (error) {
//       throw error;
//   } else {
//       console.log("Create Payment Response");
//       console.log(payment);
//       res.send('test');
//   }
// });
// });
// app.listen(3000, () => console.log(`Server started`));

//app.use(bodyParser.json());
//app.use(cors());

//let db_status = "MongoDB connection not successful";

//db.on("error", console.error.bind(console, "connection error:"));
//db.once("open", () => (db_status = "Successful opened connection to Mongo!"));

//const postSchema = new mongoose.Schema({
//  title: String,
//  body: String
//});

//const Post = mongoose.model("Post", postSchema);

//app.get("/", (req, res) => res.send(db_status));

// app.post("/posts", (req, res) => {
//   const newPost = new Post(req.body);
//   newPost.save((error, post) => {
//     return error ? res.sendStatus().json(error) : res.json(post);
//   });
// });


// app.get("/posts", (req, res) => {
//   Post.find({}, (error, data) => {
//     if (error) return res.sendStatus(500).json(error);
//     return res.json(data);
//   });
// });

// app.get("/posts/:postId", (req, res) => {
//   Post.findById(req.params.postId, (error, data) => {
//     if (error) return res.sendStatus(500).json(error);
//     return res.json(data);
//   });
// });

// app.put("/posts/:postId", (req, res) => {
//   Post.findByIdAndUpdate(
//     req.params.postId,
//     { $set: { title: req.body.title, body: req.body.body } },
//     (error, data) => {
//       if (error) return res.sendStatus(500).json(error);
//       return res.json(req.body);
//     }
//   );
// });

// app.delete("/posts/:postId", (req, res) => {
//   Post.findByIdAndDelete(req.params.postId, {}, (error, data) => {
//     if (error) return res.sendStatus(500).json(error);
//     return res.json(data);
//   });
// });
