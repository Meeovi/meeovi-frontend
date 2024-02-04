import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_translationCreateWithoutLanguageInput } from "../inputs/Number_range_translationCreateWithoutLanguageInput";
import { Number_range_translationUpdateWithoutLanguageInput } from "../inputs/Number_range_translationUpdateWithoutLanguageInput";
import { Number_range_translationWhereUniqueInput } from "../inputs/Number_range_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Number_range_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Number_range_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Number_range_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Number_range_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Number_range_translationCreateWithoutLanguageInput;
}
