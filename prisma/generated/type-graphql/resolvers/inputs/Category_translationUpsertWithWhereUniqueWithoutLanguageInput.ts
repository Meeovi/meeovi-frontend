import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateWithoutLanguageInput } from "../inputs/Category_translationCreateWithoutLanguageInput";
import { Category_translationUpdateWithoutLanguageInput } from "../inputs/Category_translationUpdateWithoutLanguageInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Category_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Category_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Category_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Category_translationCreateWithoutLanguageInput;
}
