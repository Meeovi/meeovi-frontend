import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configUpdateInput } from "../../../inputs/App_configUpdateInput";
import { App_configWhereUniqueInput } from "../../../inputs/App_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_configArgs {
  @TypeGraphQL.Field(_type => App_configUpdateInput, {
    nullable: false
  })
  data!: App_configUpdateInput;

  @TypeGraphQL.Field(_type => App_configWhereUniqueInput, {
    nullable: false
  })
  where!: App_configWhereUniqueInput;
}
