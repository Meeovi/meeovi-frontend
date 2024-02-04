import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutLanding_page_translationInput } from "../inputs/LanguageUpdateWithoutLanding_page_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLanding_page_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutLanding_page_translationInput;
}
