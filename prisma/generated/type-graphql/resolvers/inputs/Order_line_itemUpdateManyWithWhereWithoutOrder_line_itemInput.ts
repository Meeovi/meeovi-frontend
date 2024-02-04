import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemScalarWhereInput } from "../inputs/Order_line_itemScalarWhereInput";
import { Order_line_itemUpdateManyMutationInput } from "../inputs/Order_line_itemUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput", {})
export class Order_line_itemUpdateManyWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_line_itemScalarWhereInput, {
    nullable: false
  })
  where!: Order_line_itemScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_line_itemUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_line_itemUpdateManyMutationInput;
}
