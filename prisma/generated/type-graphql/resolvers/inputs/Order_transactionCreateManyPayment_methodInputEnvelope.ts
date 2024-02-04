import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateManyPayment_methodInput } from "../inputs/Order_transactionCreateManyPayment_methodInput";

@TypeGraphQL.InputType("Order_transactionCreateManyPayment_methodInputEnvelope", {})
export class Order_transactionCreateManyPayment_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transactionCreateManyPayment_methodInput], {
    nullable: false
  })
  data!: Order_transactionCreateManyPayment_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
