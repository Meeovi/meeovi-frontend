import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCreateManyLanguageInput } from "../inputs/App_cms_block_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("App_cms_block_translationCreateManyLanguageInputEnvelope", {})
export class App_cms_block_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [App_cms_block_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: App_cms_block_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
