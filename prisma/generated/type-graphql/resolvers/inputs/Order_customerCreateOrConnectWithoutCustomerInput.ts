import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateWithoutCustomerInput } from "../inputs/Order_customerCreateWithoutCustomerInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerCreateOrConnectWithoutCustomerInput", {})
export class Order_customerCreateOrConnectWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Order_customerCreateWithoutCustomerInput;
}
