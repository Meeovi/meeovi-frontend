import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationCreateInput } from "../../../inputs/App_translationCreateInput";
import { App_translationUpdateInput } from "../../../inputs/App_translationUpdateInput";
import { App_translationWhereUniqueInput } from "../../../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_translationCreateInput, {
    nullable: false
  })
  create!: App_translationCreateInput;

  @TypeGraphQL.Field(_type => App_translationUpdateInput, {
    nullable: false
  })
  update!: App_translationUpdateInput;
}
