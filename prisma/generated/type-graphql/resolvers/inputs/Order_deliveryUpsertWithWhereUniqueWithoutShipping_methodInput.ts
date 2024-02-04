import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryCreateWithoutShipping_methodInput } from "../inputs/Order_deliveryCreateWithoutShipping_methodInput";
import { Order_deliveryUpdateWithoutShipping_methodInput } from "../inputs/Order_deliveryUpdateWithoutShipping_methodInput";
import { Order_deliveryWhereUniqueInput } from "../inputs/Order_deliveryWhereUniqueInput";

@TypeGraphQL.InputType("Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput", {})
export class Order_deliveryUpsertWithWhereUniqueWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: false
  })
  where!: Order_deliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateWithoutShipping_methodInput, {
    nullable: false
  })
  update!: Order_deliveryUpdateWithoutShipping_methodInput;

  @TypeGraphQL.Field(_type => Order_deliveryCreateWithoutShipping_methodInput, {
    nullable: false
  })
  create!: Order_deliveryCreateWithoutShipping_methodInput;
}
