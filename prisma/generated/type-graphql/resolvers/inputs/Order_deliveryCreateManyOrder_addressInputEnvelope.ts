import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrder_addressInput } from "../inputs/Order_deliveryCreateManyOrder_addressInput";

@TypeGraphQL.InputType("Order_deliveryCreateManyOrder_addressInputEnvelope", {})
export class Order_deliveryCreateManyOrder_addressInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateManyOrder_addressInput], {
    nullable: false
  })
  data!: Order_deliveryCreateManyOrder_addressInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
