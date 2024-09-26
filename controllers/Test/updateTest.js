const test = require("../../models/skillTest/test");

const UpdateTest = async (req, res) => {
    try {
        const data = await test.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );

        if (!data) {
            return res.status(404).json({ error: 'Test not found' });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error('Error updating test:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    UpdateTest
};
