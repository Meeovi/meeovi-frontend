import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyWhereUniqueInput } from "../../../inputs/User_access_keyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyWhereUniqueInput, {
    nullable: false
  })
  where!: User_access_keyWhereUniqueInput;
}
