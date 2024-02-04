import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLanding_page_translationInput } from "../inputs/LanguageCreateOrConnectWithoutLanding_page_translationInput";
import { LanguageCreateWithoutLanding_page_translationInput } from "../inputs/LanguageCreateWithoutLanding_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutLanding_page_translationInput", {})
export class LanguageCreateNestedOneWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLanding_page_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLanding_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLanding_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
