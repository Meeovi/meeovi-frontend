import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyLanguageInput } from "../inputs/Currency_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Currency_translationCreateManyLanguageInputEnvelope", {})
export class Currency_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Currency_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Currency_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
