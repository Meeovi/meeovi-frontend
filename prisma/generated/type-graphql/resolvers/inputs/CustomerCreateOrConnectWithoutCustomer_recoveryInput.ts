import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_recoveryInput } from "../inputs/CustomerCreateWithoutCustomer_recoveryInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCustomer_recoveryInput", {})
export class CustomerCreateOrConnectWithoutCustomer_recoveryInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_recoveryInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_recoveryInput;
}
