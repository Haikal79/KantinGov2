/* 
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
Copyright (c) 2025 John Doe 
*/

const orders = [];

function createOrder(req, res) {
  const { menu, jumlah } = req.body;
  orders.push({ menu, jumlah });
  res.status(201).json({ message: 'Pesanan berhasil dibuat!' });
}

function getOrders(req, res) {
  res.json(orders);
}

module.exports = { createOrder, getOrders };
