import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configUpdateInput } from "../../../inputs/User_configUpdateInput";
import { User_configWhereUniqueInput } from "../../../inputs/User_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUser_configArgs {
  @TypeGraphQL.Field(_type => User_configUpdateInput, {
    nullable: false
  })
  data!: User_configUpdateInput;

  @TypeGraphQL.Field(_type => User_configWhereUniqueInput, {
    nullable: false
  })
  where!: User_configWhereUniqueInput;
}
