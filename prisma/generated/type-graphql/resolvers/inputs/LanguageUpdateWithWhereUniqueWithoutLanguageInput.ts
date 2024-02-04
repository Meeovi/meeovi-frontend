import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutLanguageInput } from "../inputs/LanguageUpdateWithoutLanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateWithWhereUniqueWithoutLanguageInput", {})
export class LanguageUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutLanguageInput;
}
