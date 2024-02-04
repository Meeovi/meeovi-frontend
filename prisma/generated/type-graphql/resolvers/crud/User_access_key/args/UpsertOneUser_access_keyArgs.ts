import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyCreateInput } from "../../../inputs/User_access_keyCreateInput";
import { User_access_keyUpdateInput } from "../../../inputs/User_access_keyUpdateInput";
import { User_access_keyWhereUniqueInput } from "../../../inputs/User_access_keyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyWhereUniqueInput, {
    nullable: false
  })
  where!: User_access_keyWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_access_keyCreateInput, {
    nullable: false
  })
  create!: User_access_keyCreateInput;

  @TypeGraphQL.Field(_type => User_access_keyUpdateInput, {
    nullable: false
  })
  update!: User_access_keyUpdateInput;
}
