import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyUpdateInput } from "../../../inputs/User_access_keyUpdateInput";
import { User_access_keyWhereUniqueInput } from "../../../inputs/User_access_keyWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyUpdateInput, {
    nullable: false
  })
  data!: User_access_keyUpdateInput;

  @TypeGraphQL.Field(_type => User_access_keyWhereUniqueInput, {
    nullable: false
  })
  where!: User_access_keyWhereUniqueInput;
}
