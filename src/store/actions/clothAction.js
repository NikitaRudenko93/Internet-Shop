import { createAction } from "@reduxjs/toolkit";

const clothLoading = createAction("CLOTH_LOADING");
const clothLoadingSuccess = createAction("CLOTH_LOADING_SUCCESS");
const clothLoadingFailed = createAction("CLOTH_LOADING_FAILED");

export { clothLoading, clothLoadingSuccess, clothLoadingFailed };
