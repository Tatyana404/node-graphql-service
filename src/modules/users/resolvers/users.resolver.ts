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
  User: {
    id: (parent: User) => parent._id,
    secondName: (parent: User) => parent.lastName
  }
}
