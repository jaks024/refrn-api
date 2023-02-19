import mongoose from 'mongoose';

export const connect = async () => {
  try {
    console.log('connecting');
    console.log(process.env.MONGODB_USER_PASSWORD);
    const dbURL = `mongodb+srv://jackson:${process.env.MONGODB_USER_PASSWORD}@cluster0.fai93ec.mongodb.net/?retryWrites=true&w=majority`;
    const options: mongoose.ConnectOptions = {
      dbName: 'refrn-dev',
    };

    await mongoose.connect(dbURL, options);
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
};
