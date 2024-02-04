import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateManyShipping_methodInput } from "../inputs/Order_deliveryCreateManyShipping_methodInput";

@TypeGraphQL.InputType("Order_deliveryCreateManyShipping_methodInputEnvelope", {})
export class Order_deliveryCreateManyShipping_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_deliveryCreateManyShipping_methodInput], {
    nullable: false
  })
  data!: Order_deliveryCreateManyShipping_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
