orders: [
	{
		products: [
			{
				productName: {
					type: String,
					required: [true, "Product Name is required"]
				},
				quantity: {
					type: Number,
					required: [true, "Quantity is required"]
				}
			}
		],
		totalAmount: {
			type: Number,
			required: [true, "Total Amount is required"]
		},
		purchasedOn: {
			type: Date,
			default: new Date()
		}
	}]