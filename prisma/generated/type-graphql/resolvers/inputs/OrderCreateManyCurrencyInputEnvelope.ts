import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyCurrencyInput } from "../inputs/OrderCreateManyCurrencyInput";

@TypeGraphQL.InputType("OrderCreateManyCurrencyInputEnvelope", {})
export class OrderCreateManyCurrencyInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyCurrencyInput], {
    nullable: false
  })
  data!: OrderCreateManyCurrencyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
