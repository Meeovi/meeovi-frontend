import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_delivery_positionScalarWhereInput } from "../inputs/Order_delivery_positionScalarWhereInput";
import { Order_delivery_positionUpdateManyMutationInput } from "../inputs/Order_delivery_positionUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput", {})
export class Order_delivery_positionUpdateManyWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_delivery_positionScalarWhereInput, {
    nullable: false
  })
  where!: Order_delivery_positionScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_delivery_positionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_delivery_positionUpdateManyMutationInput;
}
