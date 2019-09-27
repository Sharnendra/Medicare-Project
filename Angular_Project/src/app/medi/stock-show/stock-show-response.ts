export interface StockShowResponse {
    stockId,
    manufactureDate,
    batchId,
    price,
    medicineName,
    companyName,
    quantity:Quantity,
    expiryDate
}

export interface Quantity {
    totalQuantity,
    availableQuantity,
    costPerQuantity
}