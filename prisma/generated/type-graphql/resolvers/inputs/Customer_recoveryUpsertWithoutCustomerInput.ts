import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryCreateWithoutCustomerInput } from "../inputs/Customer_recoveryCreateWithoutCustomerInput";
import { Customer_recoveryUpdateWithoutCustomerInput } from "../inputs/Customer_recoveryUpdateWithoutCustomerInput";
import { Customer_recoveryWhereInput } from "../inputs/Customer_recoveryWhereInput";

@TypeGraphQL.InputType("Customer_recoveryUpsertWithoutCustomerInput", {})
export class Customer_recoveryUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_recoveryUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Customer_recoveryUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_recoveryCreateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;
}
