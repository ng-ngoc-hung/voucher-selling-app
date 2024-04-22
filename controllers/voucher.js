const { VoucherModel } = require("../models/voucherModel.js");

// Controller function to fetch data and render EJS template
exports.renderVouchersPage = async (req, res) => {
    try {
        // Fetch all vouchers from the database
        const vouchers = await VoucherModel.find().populate('publisher category').exec();
        
        // Render the EJS template and pass vouchers data
        res.render('index', { vouchers });
    } catch (error) {
        console.error("Error fetching vouchers:", error);
        res.status(500).send("Error fetching vouchers");
    }
};
