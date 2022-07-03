import { User } from './../../../types/user'

export const Resolvers = {
  Query: {
    user: async (
      _: undefined,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.usersApi.getUser(id),
    jwt: async (
      _: undefined,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: any }
    ) => await dataSources.usersApi.loginUser(email, password)
  },
  Mutation: {
    register: async (
      _: undefined,
      {
        firstName,
        lastName,
        password,
        email
      }: {
        firstName: string
        lastName: string
        password: string
        email: string
      },
      { dataSources }: { dataSources: any }
    ) =>
      await dataSources.usersApi.registerUser(
        firstName,
        lastName,
        password,
        email
      )
  },
  User: {
    id: (parent: User) => parent._id,
    secondName: (parent: User) => parent.lastName
  }
}
