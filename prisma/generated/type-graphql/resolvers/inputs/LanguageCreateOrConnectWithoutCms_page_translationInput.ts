import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCms_page_translationInput } from "../inputs/LanguageCreateWithoutCms_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutCms_page_translationInput", {})
export class LanguageCreateOrConnectWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_page_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCms_page_translationInput;
}
