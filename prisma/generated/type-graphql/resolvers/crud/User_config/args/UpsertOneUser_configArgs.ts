import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configCreateInput } from "../../../inputs/User_configCreateInput";
import { User_configUpdateInput } from "../../../inputs/User_configUpdateInput";
import { User_configWhereUniqueInput } from "../../../inputs/User_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUser_configArgs {
  @TypeGraphQL.Field(_type => User_configWhereUniqueInput, {
    nullable: false
  })
  where!: User_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => User_configCreateInput, {
    nullable: false
  })
  create!: User_configCreateInput;

  @TypeGraphQL.Field(_type => User_configUpdateInput, {
    nullable: false
  })
  update!: User_configUpdateInput;
}
