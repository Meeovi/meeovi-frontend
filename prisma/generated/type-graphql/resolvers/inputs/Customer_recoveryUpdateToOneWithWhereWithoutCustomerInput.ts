import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryUpdateWithoutCustomerInput } from "../inputs/Customer_recoveryUpdateWithoutCustomerInput";
import { Customer_recoveryWhereInput } from "../inputs/Customer_recoveryWhereInput";

@TypeGraphQL.InputType("Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput", {})
export class Customer_recoveryUpdateToOneWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Customer_recoveryUpdateWithoutCustomerInput;
}
