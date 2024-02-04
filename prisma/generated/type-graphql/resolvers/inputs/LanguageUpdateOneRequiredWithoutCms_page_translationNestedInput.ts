import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCms_page_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCms_page_translationInput";
import { LanguageCreateWithoutCms_page_translationInput } from "../inputs/LanguageCreateWithoutCms_page_translationInput";
import { LanguageUpdateToOneWithWhereWithoutCms_page_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutCms_page_translationInput";
import { LanguageUpsertWithoutCms_page_translationInput } from "../inputs/LanguageUpsertWithoutCms_page_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutCms_page_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_page_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCms_page_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutCms_page_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutCms_page_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutCms_page_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutCms_page_translationInput | undefined;
}
