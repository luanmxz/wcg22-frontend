export interface AuthToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: Array<string>;
  user_name: string;
}
