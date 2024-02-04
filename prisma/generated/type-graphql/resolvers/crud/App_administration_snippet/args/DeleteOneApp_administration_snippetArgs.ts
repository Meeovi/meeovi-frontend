import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetWhereUniqueInput } from "../../../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;
}
