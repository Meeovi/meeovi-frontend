import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLanding_page_translationInput } from "../inputs/LanguageCreateWithoutLanding_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutLanding_page_translationInput", {})
export class LanguageCreateOrConnectWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLanding_page_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLanding_page_translationInput;
}
