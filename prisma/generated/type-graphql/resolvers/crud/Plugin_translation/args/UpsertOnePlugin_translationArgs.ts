import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Plugin_translationCreateInput } from "../../../inputs/Plugin_translationCreateInput";
import { Plugin_translationUpdateInput } from "../../../inputs/Plugin_translationUpdateInput";
import { Plugin_translationWhereUniqueInput } from "../../../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlugin_translationArgs {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Plugin_translationCreateInput, {
    nullable: false
  })
  create!: Plugin_translationCreateInput;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateInput, {
    nullable: false
  })
  update!: Plugin_translationUpdateInput;
}
