import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateOrConnectWithoutCustomerInput } from "../inputs/Customer_groupCreateOrConnectWithoutCustomerInput";
import { Customer_groupCreateWithoutCustomerInput } from "../inputs/Customer_groupCreateWithoutCustomerInput";
import { Customer_groupWhereUniqueInput } from "../inputs/Customer_groupWhereUniqueInput";

@TypeGraphQL.InputType("Customer_groupCreateNestedOneWithoutCustomerInput", {})
export class Customer_groupCreateNestedOneWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomerInput, {
    nullable: true
  })
  create?: Customer_groupCreateWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupCreateOrConnectWithoutCustomerInput, {
    nullable: true
  })
  connectOrCreate?: Customer_groupCreateOrConnectWithoutCustomerInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupWhereUniqueInput, {
    nullable: true
  })
  connect?: Customer_groupWhereUniqueInput | undefined;
}
