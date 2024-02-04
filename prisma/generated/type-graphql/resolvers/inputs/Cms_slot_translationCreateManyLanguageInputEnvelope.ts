import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyLanguageInput } from "../inputs/Cms_slot_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateManyLanguageInputEnvelope", {})
export class Cms_slot_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Cms_slot_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
