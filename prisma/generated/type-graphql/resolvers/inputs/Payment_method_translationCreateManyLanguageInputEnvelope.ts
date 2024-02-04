import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyLanguageInput } from "../inputs/Payment_method_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Payment_method_translationCreateManyLanguageInputEnvelope", {})
export class Payment_method_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Payment_method_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
