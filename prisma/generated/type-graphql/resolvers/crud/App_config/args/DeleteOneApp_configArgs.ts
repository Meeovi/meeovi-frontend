import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configWhereUniqueInput } from "../../../inputs/App_configWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneApp_configArgs {
  @TypeGraphQL.Field(_type => App_configWhereUniqueInput, {
    nullable: false
  })
  where!: App_configWhereUniqueInput;
}
