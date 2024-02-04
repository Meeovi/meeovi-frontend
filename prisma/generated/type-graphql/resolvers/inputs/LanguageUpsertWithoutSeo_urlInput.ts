import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSeo_urlInput } from "../inputs/LanguageCreateWithoutSeo_urlInput";
import { LanguageUpdateWithoutSeo_urlInput } from "../inputs/LanguageUpdateWithoutSeo_urlInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSeo_urlInput", {})
export class LanguageUpsertWithoutSeo_urlInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSeo_urlInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSeo_urlInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSeo_urlInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSeo_urlInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
