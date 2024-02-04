import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerUpdateWithoutCustomerInput } from "../inputs/Order_customerUpdateWithoutCustomerInput";
import { Order_customerWhereUniqueInput } from "../inputs/Order_customerWhereUniqueInput";

@TypeGraphQL.InputType("Order_customerUpdateWithWhereUniqueWithoutCustomerInput", {})
export class Order_customerUpdateWithWhereUniqueWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Order_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Order_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_customerUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Order_customerUpdateWithoutCustomerInput;
}
