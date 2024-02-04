import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingCreateManyCurrencyInput } from "../inputs/Currency_country_roundingCreateManyCurrencyInput";

@TypeGraphQL.InputType("Currency_country_roundingCreateManyCurrencyInputEnvelope", {})
export class Currency_country_roundingCreateManyCurrencyInputEnvelope {
  @TypeGraphQL.Field(_type => [Currency_country_roundingCreateManyCurrencyInput], {
    nullable: false
  })
  data!: Currency_country_roundingCreateManyCurrencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
