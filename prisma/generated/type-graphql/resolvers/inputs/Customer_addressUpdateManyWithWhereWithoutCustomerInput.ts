import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressScalarWhereInput } from "../inputs/Customer_addressScalarWhereInput";
import { Customer_addressUpdateManyMutationInput } from "../inputs/Customer_addressUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_addressUpdateManyWithWhereWithoutCustomerInput", {})
export class Customer_addressUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_addressScalarWhereInput, {
    nullable: false
  })
  where!: Customer_addressScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_addressUpdateManyMutationInput;
}
