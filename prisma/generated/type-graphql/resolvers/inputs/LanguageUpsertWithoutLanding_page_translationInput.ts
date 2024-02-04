import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLanding_page_translationInput } from "../inputs/LanguageCreateWithoutLanding_page_translationInput";
import { LanguageUpdateWithoutLanding_page_translationInput } from "../inputs/LanguageUpdateWithoutLanding_page_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutLanding_page_translationInput", {})
export class LanguageUpsertWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLanding_page_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutLanding_page_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLanding_page_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLanding_page_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
