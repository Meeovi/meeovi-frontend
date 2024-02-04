import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_translationCreateInput } from "../../../inputs/Theme_translationCreateInput";
import { Theme_translationUpdateInput } from "../../../inputs/Theme_translationUpdateInput";
import { Theme_translationWhereUniqueInput } from "../../../inputs/Theme_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTheme_translationArgs {
  @TypeGraphQL.Field(_type => Theme_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Theme_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Theme_translationCreateInput, {
    nullable: false
  })
  create!: Theme_translationCreateInput;

  @TypeGraphQL.Field(_type => Theme_translationUpdateInput, {
    nullable: false
  })
  update!: Theme_translationUpdateInput;
}
