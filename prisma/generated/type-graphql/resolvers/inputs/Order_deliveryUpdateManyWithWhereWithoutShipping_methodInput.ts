import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_deliveryScalarWhereInput } from "../inputs/Order_deliveryScalarWhereInput";
import { Order_deliveryUpdateManyMutationInput } from "../inputs/Order_deliveryUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput", {})
export class Order_deliveryUpdateManyWithWhereWithoutShipping_methodInput {
  @TypeGraphQL.Field(_type => Order_deliveryScalarWhereInput, {
    nullable: false
  })
  where!: Order_deliveryScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_deliveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_deliveryUpdateManyMutationInput;
}
