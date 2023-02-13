const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('transactions')({
                path: 'transactions',
                populate: 'category',
            });
        },
        user: async (parent, { userName }) => {
            return User.findOne({ _id: userName });
        }
    },

    Mutation: {
        addUser: async (parent, { userName, email, password }) => {
            const user = await User.create({ userName, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addTransaction: async (parent, { name, amount, date }) => {
            const transaction = await Transaction.create({ name, amount, date });
            await User.findOneAndUpdate(
                { _id: user._id},
                { $push: { transactions: transaction._id } }
            );
            return transaction;
        },
        removeTransaction: async (parent, { transactionId }) => {
            return Transaction.findOneAndDelete({ _id: transactionId });
        }   

  }
};

module.exports = resolvers;