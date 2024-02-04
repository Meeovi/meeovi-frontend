import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateManyLanguageInput } from "../inputs/Cms_page_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Cms_page_translationCreateManyLanguageInputEnvelope", {})
export class Cms_page_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Cms_page_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
