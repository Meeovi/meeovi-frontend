import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyMutationInput } from "../inputs/OrderUpdateManyMutationInput";

@TypeGraphQL.InputType("OrderUpdateManyWithWhereWithoutUser_order_created_by_idTouserInput", {})
export class OrderUpdateManyWithWhereWithoutUser_order_created_by_idTouserInput {
  @TypeGraphQL.Field(_type => OrderScalarWhereInput, {
    nullable: false
  })
  where!: OrderScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderUpdateManyMutationInput;
}
