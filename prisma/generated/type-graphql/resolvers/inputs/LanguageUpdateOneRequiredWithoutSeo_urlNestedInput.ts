import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSeo_urlInput } from "../inputs/LanguageCreateOrConnectWithoutSeo_urlInput";
import { LanguageCreateWithoutSeo_urlInput } from "../inputs/LanguageCreateWithoutSeo_urlInput";
import { LanguageUpdateToOneWithWhereWithoutSeo_urlInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutSeo_urlInput";
import { LanguageUpsertWithoutSeo_urlInput } from "../inputs/LanguageUpsertWithoutSeo_urlInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutSeo_urlNestedInput", {})
export class LanguageUpdateOneRequiredWithoutSeo_urlNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSeo_urlInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSeo_urlInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSeo_urlInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSeo_urlInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutSeo_urlInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutSeo_urlInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutSeo_urlInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutSeo_urlInput | undefined;
}
