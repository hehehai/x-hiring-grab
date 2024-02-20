/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  GenerateContentRequest,
  GenerateContentResponse,
  GenerateContentResult,
  GenerateContentStreamResult,
  RequestOptions,
} from "../types";
import { RequestUrl, Task, makeRequest } from "../requests/request";
import { addHelpers } from "../requests/response-helpers";
import { processStream } from "../requests/stream-reader";

export async function generateContentStream(
  apiKey: string,
  model: string,
  params: GenerateContentRequest,
  requestOptions?: RequestOptions,
): Promise<GenerateContentStreamResult> {
  const url = new RequestUrl(
    model,
    Task.STREAM_GENERATE_CONTENT,
    apiKey,
    /* stream */ true,
  );
  const response = await makeRequest(
    url,
    JSON.stringify(params),
    requestOptions,
  );
  return processStream(response);
}

export async function generateContent(
  apiKey: string,
  model: string,
  params: GenerateContentRequest,
  requestOptions?: RequestOptions,
): Promise<GenerateContentResult> {
  const url = new RequestUrl(
    model,
    Task.GENERATE_CONTENT,
    apiKey,
    /* stream */ false,
  );
  console.log("url", url);
  const response = await makeRequest(
    url,
    JSON.stringify(params),
    requestOptions,
  );
  const responseJson: GenerateContentResponse = await response.json();
  const enhancedResponse = addHelpers(responseJson);
  return {
    response: enhancedResponse,
  };
}
