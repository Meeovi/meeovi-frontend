import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLanguageInput } from "../inputs/LanguageCreateWithoutLanguageInput";
import { LanguageUpdateWithoutLanguageInput } from "../inputs/LanguageUpdateWithoutLanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpsertWithWhereUniqueWithoutLanguageInput", {})
export class LanguageUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLanguageInput;
}
