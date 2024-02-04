import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyLanguageInput } from "../inputs/Plugin_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Plugin_translationCreateManyLanguageInputEnvelope", {})
export class Plugin_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Plugin_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
