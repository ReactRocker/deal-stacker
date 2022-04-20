import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getStrategies = createAsyncThunk("strategy/get", async () => {
  const { data } = await axios.get(`/api/calc/get-strategies`);
  return data;
});

export const pickStrategy = createAsyncThunk(
  "strategy/pick",
  async (strategyId) => {
    const { data } = await axios.post(`/api/calc/pick`, {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
      data: {
        strategyId,
      },
    });
    return {
      ...data.strategy,
    };
  }
);
