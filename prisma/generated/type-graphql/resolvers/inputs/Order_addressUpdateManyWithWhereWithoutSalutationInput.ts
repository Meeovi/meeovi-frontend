import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressScalarWhereInput } from "../inputs/Order_addressScalarWhereInput";
import { Order_addressUpdateManyMutationInput } from "../inputs/Order_addressUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_addressUpdateManyWithWhereWithoutSalutationInput", {})
export class Order_addressUpdateManyWithWhereWithoutSalutationInput {
  @TypeGraphQL.Field(_type => Order_addressScalarWhereInput, {
    nullable: false
  })
  where!: Order_addressScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_addressUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_addressUpdateManyMutationInput;
}
