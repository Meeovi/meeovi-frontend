import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutCms_page_translationInput } from "../inputs/LanguageUpdateWithoutCms_page_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutCms_page_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutCms_page_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCms_page_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutCms_page_translationInput;
}
