import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressUpdateWithoutOrder_deliveryInput } from "../inputs/Order_addressUpdateWithoutOrder_deliveryInput";
import { Order_addressWhereInput } from "../inputs/Order_addressWhereInput";

@TypeGraphQL.InputType("Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput", {})
export class Order_addressUpdateToOneWithWhereWithoutOrder_deliveryInput {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressUpdateWithoutOrder_deliveryInput, {
    nullable: false
  })
  data!: Order_addressUpdateWithoutOrder_deliveryInput;
}
