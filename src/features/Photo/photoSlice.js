const { createSlice } = require("@reduxjs/toolkit");

const initialPhotos = [
  {
    id: 91176,
    title:
      "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
    categoryId: 5,
    photo: "https://picsum.photos/id/532/300/300",
  },
  {
    id: 82605,
    title: "Ad officia magna veniam sunt.",
    categoryId: 1,
    photo: "https://picsum.photos/id/43/300/300",
  },
  {
    id: 74760,
    title:
      "Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.",
    categoryId: 3,
    photo: "https://picsum.photos/id/722/300/300",
  },
  {
    id: 39588,
    title: "Deserunt in tempor est id consectetur cupidatat.",
    categoryId: 5,
    photo: "https://picsum.photos/id/294/300/300",
  },
  {
    id: 72133,
    title:
      "Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.",
    categoryId: 4,
    photo: "https://picsum.photos/id/229/300/300",
  },
  {
    id: 95333,
    title:
      "Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.",
    categoryId: 1,
    photo: "https://picsum.photos/id/862/300/300",
  },
  {
    id: 62419,
    title:
      "Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.",
    categoryId: 3,
    photo: "https://picsum.photos/id/515/300/300",
  },
  {
    id: 12569,
    title:
      "Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.",
    categoryId: 5,
    photo: "https://picsum.photos/id/730/300/300",
  },
  {
    id: 47434,
    title: "Veniam officia est nulla proident labore.",
    categoryId: 3,
    photo: "https://picsum.photos/id/287/300/300",
  },
  {
    id: 52685,
    title:
      "Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.",
    categoryId: 3,
    photo: "https://picsum.photos/id/859/300/300",
  },
  {
    id: 69928,
    title:
      "Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.",
    categoryId: 5,
    photo: "https://picsum.photos/id/110/300/300",
  },
  {
    id: 86160,
    title: "Id ex enim non dolore reprehenderit eu ullamco.",
    categoryId: 5,
    photo: "https://picsum.photos/id/649/300/300",
  },
];

const photo = createSlice({
  name: "photo",
  initialState: initialPhotos,
  reducers: {
    //mutable data
    addPhoto: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      console.log(action.payload);
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id !== removePhotoId);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
