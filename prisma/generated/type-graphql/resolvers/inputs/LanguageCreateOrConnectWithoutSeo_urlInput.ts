import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSeo_urlInput } from "../inputs/LanguageCreateWithoutSeo_urlInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutSeo_urlInput", {})
export class LanguageCreateOrConnectWithoutSeo_urlInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSeo_urlInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSeo_urlInput;
}
