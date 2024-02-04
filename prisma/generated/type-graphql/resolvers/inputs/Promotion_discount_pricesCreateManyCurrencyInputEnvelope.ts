import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateManyCurrencyInput } from "../inputs/Promotion_discount_pricesCreateManyCurrencyInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateManyCurrencyInputEnvelope", {})
export class Promotion_discount_pricesCreateManyCurrencyInputEnvelope {
  @TypeGraphQL.Field(_type => [Promotion_discount_pricesCreateManyCurrencyInput], {
    nullable: false
  })
  data!: Promotion_discount_pricesCreateManyCurrencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
