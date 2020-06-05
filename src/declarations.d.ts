// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
declare module "gatsby-plugin-mailchimp" 
{
    export default function addToMailchimp(email: string, fields?: any, endpointOverride?: any): {result: string, msg: string}
}

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"