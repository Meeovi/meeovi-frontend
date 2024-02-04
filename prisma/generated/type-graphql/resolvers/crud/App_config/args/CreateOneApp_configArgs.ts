import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configCreateInput } from "../../../inputs/App_configCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_configArgs {
  @TypeGraphQL.Field(_type => App_configCreateInput, {
    nullable: false
  })
  data!: App_configCreateInput;
}
