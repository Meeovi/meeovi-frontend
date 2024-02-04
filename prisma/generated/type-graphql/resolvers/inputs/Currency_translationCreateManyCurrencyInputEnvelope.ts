import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyCurrencyInput } from "../inputs/Currency_translationCreateManyCurrencyInput";

@TypeGraphQL.InputType("Currency_translationCreateManyCurrencyInputEnvelope", {})
export class Currency_translationCreateManyCurrencyInputEnvelope {
  @TypeGraphQL.Field(_type => [Currency_translationCreateManyCurrencyInput], {
    nullable: false
  })
  data!: Currency_translationCreateManyCurrencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
