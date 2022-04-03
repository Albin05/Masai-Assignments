const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());



const connect = () => {
    return mongoose.connect(
        "mongodb+srv://Albinsermongo:Albinsermongo@cluster0.ivesr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
};

// Mongoose Shema

const sectionSchema = new mongoose.Schema(
    {
        sectionName: {type: String, required: true},
        bookId: [{type: mongoose.Schema.Types.ObjectId,
        ref: "book"}]
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Section = mongoose.model("section", sectionSchema);

const bookSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        body: {type: String, required: true},
        CheckedOut: {type: String, default: null},
        CheckedIn: {type: String, default: null},
        sectionId: {type: mongoose.Schema.Types.ObjectId,
            ref: "section",
            required: true
        },
        authorId: [{type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true,
        }]
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Book = mongoose.model("book", bookSchema);

const authorSchema = new mongoose.Schema(
    {
        first_name: {type: String, required: true},
        last_name: {type: String, required: true},
        bookId: [{type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true}]
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

const Author = mongoose.model("author", authorSchema);

// CRUD OPERATIONS

app.get("/section", async (req, res) => {
    try{
        const section = await Section.find({}).lean().exec();

        return res.status(200).send(section);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
});

app.post("/section", async (req, res) => {
    try{
        const section = await Section.create(req.body);

        return res.status(201).send(section);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});

app.patch("/section/:id", async (req, res) => {
    try {
        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
        .lean()
        .exec();
    
        return res.status(200).send(section);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

app.delete("/section/:id", async (req, res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(section);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

app.get("/book", async (req, res) => {
    try{
        const allbooks = await Book.find({}).lean().exec();

        return res.status(200).send(allbooks);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
});

app.post("/book", async (req, res) => {
    try{
        const book = await Book.create(req.body);

        return res.status(201).send(book);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});

app.patch("/book/:id", async (req, res) => {
    try {
        const updatebook = await Section.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
        .lean()
        .exec();
    
        return res.status(200).send(section);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

app.delete("/book/:id", async (req, res) => {
    try {
        const deletebook = await Book.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(deletebook);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

app.get("/author", async (req, res) => {
    try{
        const autors = await Author.find({}).lean().exec();

        return res.status(200).send(authors);
    }
    catch(err){
        return res.status(500).send({ message: err.message });
    }
});

app.post("/author", async (req, res) => {
    try{
        const author = await Author.create(req.body);

        return res.status(201).send(author);
    }
    catch(err){
        return res.status(501).send({message: err.message});
    }
});

app.patch("/author/:id", async (req, res) => {
    try {
        const updateauthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        })
        .lean()
        .exec();
    
        return res.status(200).send(updateauthor);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

app.delete("/author/:id", async (req, res) => {
    try {
        const deleteauthor = await Author.findByIdAndDelete(req.params.id).lean().exec();
    
        return res.status(200).send(deleteauthor);
      } catch (err) {
        return res.status(500).send({ message: err.message });
      }
});

// All books written by an author

app.get("/author/:id", async (req, res) => {
    try{
        const allBooks = await Author.findById(req.params.id).populate('bookId')
        .lean().exec();
        return res.status(200).send(allBooks);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

// All books in a section

app.get("/section/:id", async (req, res) => {
    try{
        const allBooksinSection = await Section.findById(req.params.id).populate('bookId')
        .lean().exec();
        return res.status(200).send(allBooksinSection);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});

// All books which are not Checked Out

app.get('/books/checkout', async (req, res) => {
    try{
        const booksforcheckout = await Book.find({CheckedOut : null}).lean().exec();
        return res.status(200).send(booksforcheckout);
    }
    catch(err)
    {
        return res.status(500).send({message: err.message});
    }
});


app.listen(5000, async () => {
    try {
        await connect();
    }
    catch(err){
        console.log(err);
    }

    console.log("Listening on port 5000");
});