import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_cms_block_translationInput";
import { LanguageCreateWithoutApp_cms_block_translationInput } from "../inputs/LanguageCreateWithoutApp_cms_block_translationInput";
import { LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput";
import { LanguageUpsertWithoutApp_cms_block_translationInput } from "../inputs/LanguageUpsertWithoutApp_cms_block_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutApp_cms_block_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutApp_cms_block_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_cms_block_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_cms_block_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutApp_cms_block_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutApp_cms_block_translationInput | undefined;
}
