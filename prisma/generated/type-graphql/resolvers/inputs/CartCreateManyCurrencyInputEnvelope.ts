import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCurrencyInput } from "../inputs/CartCreateManyCurrencyInput";

@TypeGraphQL.InputType("CartCreateManyCurrencyInputEnvelope", {})
export class CartCreateManyCurrencyInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyCurrencyInput], {
    nullable: false
  })
  data!: CartCreateManyCurrencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
