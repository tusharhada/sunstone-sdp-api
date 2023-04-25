import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    basics: {
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      profiles: [
        {
          network: {
            type: String,
            required: true,
          },
          username: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

const profileModel = mongoose.model("profileModel", profileSchema);
export default profileModel;
