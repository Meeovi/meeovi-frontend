import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutOther_languageInput } from "../inputs/LanguageUpdateWithoutOther_languageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutOther_languageInput", {})
export class LanguageUpdateToOneWithWhereWithoutOther_languageInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutOther_languageInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutOther_languageInput;
}
