const {Schema, model} = require('mongoose');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/.+@.+\..+/,'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    createAt:{
        type: Date,
        default: Date.now,
    },
    transactions: [{
        type: Schema.Types.ObjectId,
        ref: 'Transaction'
    }]

},
{
    toJSON: {
        virtuals: true,
}});

//hash user password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});
//compare hashed password and validate
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;