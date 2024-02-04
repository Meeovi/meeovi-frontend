import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateWithoutOrder_deliveryInput } from "../inputs/Order_addressCreateWithoutOrder_deliveryInput";
import { Order_addressUpdateWithoutOrder_deliveryInput } from "../inputs/Order_addressUpdateWithoutOrder_deliveryInput";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";

@TypeGraphQL.InputType("Order_addressUpsertWithoutOrder_deliveryInput", {})
export class Order_addressUpsertWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutOrder_deliveryInput, {
    nullable: false
  })
  update!: Order_addressUpdateWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => Order_addressCreateWithoutOrder_deliveryInput, {
    nullable: false
  })
  create!: Order_addressCreateWithoutOrder_deliveryInput;

  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;
}
