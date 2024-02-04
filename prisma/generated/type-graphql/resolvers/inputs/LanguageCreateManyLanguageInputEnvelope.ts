import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLanguageInput } from "../inputs/LanguageCreateManyLanguageInput";

@TypeGraphQL.InputType("LanguageCreateManyLanguageInputEnvelope", {})
export class LanguageCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [LanguageCreateManyLanguageInput], {
    nullable: false
  })
  data!: LanguageCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
