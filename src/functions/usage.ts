import * as querystring from 'query-string';
import { UsageParameters } from '../interfaces/usage/usageParameters';
import { UsageResponse } from '../interfaces/usage/usageResponse';

/**
 * Get your usage statistics from DeepL.
 * @property {UsageParameters} params Contains the auth key linked to your account.
 * @returns {Promise<UsageResponse>} Your usage statistics.
 */
export async function usage(params: UsageParameters): Promise<UsageResponse> {
  const response = await fetch(`https://api.deepl.com/v2/usage?${querystring.stringify(params)}`, {
    method: 'POST',
  });

  if (!response.ok) throw `Something went wrong. Are you using a valid authorization key? (${await response.json()})`;

  return response.json();
}