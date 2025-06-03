/* This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 * Copyright (c) 2025 John Doe
 */

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Selamat datang di KantinGo!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
