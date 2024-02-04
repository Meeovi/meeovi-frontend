import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerScalarWhereInput } from "../inputs/Order_customerScalarWhereInput";
import { Order_customerUpdateManyMutationInput } from "../inputs/Order_customerUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_customerUpdateManyWithWhereWithoutOrderInput", {})
export class Order_customerUpdateManyWithWhereWithoutOrderInput {
  @TypeGraphQL.Field(_type => Order_customerScalarWhereInput, {
    nullable: false
  })
  where!: Order_customerScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_customerUpdateManyMutationInput;
}
