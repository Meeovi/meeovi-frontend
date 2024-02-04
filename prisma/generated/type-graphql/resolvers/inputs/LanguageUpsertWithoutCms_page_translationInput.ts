import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCms_page_translationInput } from "../inputs/LanguageCreateWithoutCms_page_translationInput";
import { LanguageUpdateWithoutCms_page_translationInput } from "../inputs/LanguageUpdateWithoutCms_page_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCms_page_translationInput", {})
export class LanguageUpsertWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCms_page_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCms_page_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_page_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCms_page_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
