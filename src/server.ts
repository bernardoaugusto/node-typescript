import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true
    })
  }
}