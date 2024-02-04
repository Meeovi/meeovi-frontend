import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyCreateInput } from "../../../inputs/User_access_keyCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyCreateInput, {
    nullable: false
  })
  data!: User_access_keyCreateInput;
}
