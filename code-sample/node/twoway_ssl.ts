/*
* Node.js v10.16.0
* Author : nattapon.rat@kbtg.tech
 */
import * as request from 'request';
import * as fs from 'fs';
import * as path from 'path';

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';

let keyfile = path.join(__dirname, '../kbank.pentest.1', 'kbank.pentest.1.key');
let certificateFile = path.join(
  __dirname,
  '../kbank.pentest.1',
  'kbank.pentest.1.crt'
);
export function Request() {
  const options = {
    url: 'https://203.146.225.57:12002/test/ssl',
    agentOptions: {
      cert: fs.readFileSync(certificateFile),
      key: fs.readFileSync(keyfile),
    },
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      partnerId: 'PTR1902369',
      partnerSecret: '7da57c4eb242435fa3e91bb7a69e2a28',
    }),
  };
  request.post(options, function(error, response, body) {
    if (error) {
      console.warn(error);
    } else {
      console.log(body);
    }
  });
}
