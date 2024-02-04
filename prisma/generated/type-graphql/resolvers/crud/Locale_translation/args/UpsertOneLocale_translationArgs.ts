import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Locale_translationCreateInput } from "../../../inputs/Locale_translationCreateInput";
import { Locale_translationUpdateInput } from "../../../inputs/Locale_translationUpdateInput";
import { Locale_translationWhereUniqueInput } from "../../../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLocale_translationArgs {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Locale_translationCreateInput, {
    nullable: false
  })
  create!: Locale_translationCreateInput;

  @TypeGraphQL.Field(_type => Locale_translationUpdateInput, {
    nullable: false
  })
  update!: Locale_translationUpdateInput;
}
