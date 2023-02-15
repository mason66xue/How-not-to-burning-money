const { AuthenticationError } = require('apollo-server-express');
const {User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        getUser: async (parent, {email}) => {
            return await User.findOne({email});
        }
    },
    Mutation: {
        addUser: async (parent, {username, email, password}) => {
            let income;
            if (args.income) {
                income=args.income
            } else {
                income=0;
            }
            const user = await User.create({username, email, password, income});
            const token = signToken(user);
            return {token, user};
        },
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };        
        },
        
        setIncome: async (parent, {amount}, context ) => {
            if (context.user) { 
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$set: {income: amount}},
                    {new: true}
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addExpense: async (parent, {name, amount}, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: {expenses: {name, amount}}},
                    {new: true}
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addSavings: async (parent, {name, amount}, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$push: {savings: {name, amount}}},
                    {new: true}
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeExpense: async (parent, {expenseId}, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {expenses: {expenseId}}},
                    {new: true}
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeSavings: async (parent, {savingsId}, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savings: {savingsId}}},
                    {new: true}
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        }
        
    }
};

module.exports = resolvers;