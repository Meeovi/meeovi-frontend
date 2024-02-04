import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutSeo_urlInput } from "../inputs/LanguageCreateOrConnectWithoutSeo_urlInput";
import { LanguageCreateWithoutSeo_urlInput } from "../inputs/LanguageCreateWithoutSeo_urlInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutSeo_urlInput", {})
export class LanguageCreateNestedOneWithoutSeo_urlInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutSeo_urlInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutSeo_urlInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutSeo_urlInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSeo_urlInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
