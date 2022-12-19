import { createAction } from "@reduxjs/toolkit";

const countIncrement = createAction("COUNTER_INCREMENT");
const countDicrement = createAction("COUNTER_DICREMENT");
const countClear = createAction("COUNTER_CLEAR");

export { countIncrement, countDicrement, countClear };
