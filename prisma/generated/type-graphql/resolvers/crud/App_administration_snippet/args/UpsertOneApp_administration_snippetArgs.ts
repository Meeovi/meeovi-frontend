import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_administration_snippetCreateInput } from "../../../inputs/App_administration_snippetCreateInput";
import { App_administration_snippetUpdateInput } from "../../../inputs/App_administration_snippetUpdateInput";
import { App_administration_snippetWhereUniqueInput } from "../../../inputs/App_administration_snippetWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_administration_snippetArgs {
  @TypeGraphQL.Field(_type => App_administration_snippetWhereUniqueInput, {
    nullable: false
  })
  where!: App_administration_snippetWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_administration_snippetCreateInput, {
    nullable: false
  })
  create!: App_administration_snippetCreateInput;

  @TypeGraphQL.Field(_type => App_administration_snippetUpdateInput, {
    nullable: false
  })
  update!: App_administration_snippetUpdateInput;
}
