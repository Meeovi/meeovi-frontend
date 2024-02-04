import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyOrderInput } from "../inputs/Order_transactionCreateManyOrderInput";

@TypeGraphQL.InputType("Order_transactionCreateManyOrderInputEnvelope", {})
export class Order_transactionCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transactionCreateManyOrderInput], {
    nullable: false
  })
  data!: Order_transactionCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
