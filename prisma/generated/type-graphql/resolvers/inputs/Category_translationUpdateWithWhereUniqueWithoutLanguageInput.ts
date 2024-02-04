import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationUpdateWithoutLanguageInput } from "../inputs/Category_translationUpdateWithoutLanguageInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Category_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Category_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Category_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Category_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Category_translationUpdateWithoutLanguageInput;
}
