import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateOrConnectWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateOrConnectWithoutCustomer_recoveryInput";
import { CustomerCreateWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateWithoutCustomer_recoveryInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedOneWithoutCustomer_recoveryInput", {})
export class CustomerCreateNestedOneWithoutCustomer_recoveryInput {
  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_recoveryInput, {
    nullable: true
  })
  create?: CustomerCreateWithoutCustomer_recoveryInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateOrConnectWithoutCustomer_recoveryInput, {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_recoveryInput | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput | undefined;
}
