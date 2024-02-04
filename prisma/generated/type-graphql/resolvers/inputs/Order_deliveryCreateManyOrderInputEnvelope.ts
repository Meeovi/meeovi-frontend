import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyOrderInput } from "../inputs/Order_deliveryCreateManyOrderInput";

@TypeGraphQL.InputType("Order_deliveryCreateManyOrderInputEnvelope", {})
export class Order_deliveryCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateManyOrderInput], {
    nullable: false
  })
  data!: Order_deliveryCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
