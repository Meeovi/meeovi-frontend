import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetCreateInput } from "../../../inputs/App_administration_snippetCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetCreateInput, {
    nullable: false
  })
  data!: App_administration_snippetCreateInput;
}
