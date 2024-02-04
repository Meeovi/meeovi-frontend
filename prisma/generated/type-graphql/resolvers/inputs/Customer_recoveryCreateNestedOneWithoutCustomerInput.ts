import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_recoveryCreateOrConnectWithoutCustomerInput";
import { Customer_recoveryCreateWithoutCustomerInput } from "../inputs/Customer_recoveryCreateWithoutCustomerInput";
import { Customer_recoveryWhereUniqueInput } from "../inputs/Customer_recoveryWhereUniqueInput";

@TypeGraphQL.InputType("Customer_recoveryCreateNestedOneWithoutCustomerInput", {})
export class Customer_recoveryCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_recoveryCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: Customer_recoveryCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: Customer_recoveryCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_recoveryWhereUniqueInput | undefined;
}
