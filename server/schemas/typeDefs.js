const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
    username: String!
    name: String!
    Playlist: [Playlist]
  }

  type Playlist {
    _id: ID!
    name: String!
    description: String!
    songs: [Song]
  }

  input newPlaylist {
    _id: ID!
    name: String!
    description: String!
    songs: [Song]
  }

  type Song {
    idAlbum: Int
    idArtist: Int!
    idTrack: Int!
    strAlbum: String
    strArtist: String
    strTrack: String
  }

  input newSong {
    idAlbum: Int
    idArtist: Int!
    idTrack: Int!
    strAlbum: String
    strArtist: String
    strTrack: String
  }

  type auth {
    token: ID!
    user: User
  }

  type Query {
    User: [User]
    Playlist(_id: String): [Playlist]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): auth
    login(email: String!, password: String!): auth
    createPlaylist(newPlaylist: newPlaylist): User
    deletePlaylist(playlist_id: String): User
    saveSong(newSong: newSong):Playlist
    deleteSong(idTrack: Int):Playlist
  }
`;

module.exports = typeDefs;
