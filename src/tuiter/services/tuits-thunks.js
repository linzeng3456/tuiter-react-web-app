import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";


export const findTuitsThunk = createAsyncThunk(
    "tuits/findTuits",
    async () => await service.findTuits()
);
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
});
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
      const newTuits = await service.createTuit(tuit)
      return newTuits
    });
export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) => {
          const updateTuit = await service.updateTuit(tuit)
          return updateTuit
        }
    );



