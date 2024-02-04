import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCms_page_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCms_page_translationInput";
import { LanguageCreateWithoutCms_page_translationInput } from "../inputs/LanguageCreateWithoutCms_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCms_page_translationInput", {})
export class LanguageCreateNestedOneWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_page_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCms_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
