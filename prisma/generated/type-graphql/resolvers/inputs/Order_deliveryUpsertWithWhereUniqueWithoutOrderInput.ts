import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutOrderInput } from "../inputs/Order_deliveryCreateWithoutOrderInput";
import { Order_deliveryUpdateWithoutOrderInput } from "../inputs/Order_deliveryUpdateWithoutOrderInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpsertWithWhereUniqueWithoutOrderInput", {})
export class Order_deliveryUpsertWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutOrderInput, {
    nullable: false
  })
  update!: Order_deliveryUpdateWithoutOrderInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutOrderInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutOrderInput;
}
