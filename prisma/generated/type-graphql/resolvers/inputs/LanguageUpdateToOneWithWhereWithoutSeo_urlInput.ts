import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSeo_urlInput } from "../inputs/LanguageUpdateWithoutSeo_urlInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutSeo_urlInput", {})
export class LanguageUpdateToOneWithWhereWithoutSeo_urlInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSeo_urlInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSeo_urlInput;
}
