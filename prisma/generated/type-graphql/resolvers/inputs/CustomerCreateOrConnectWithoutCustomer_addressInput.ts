import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_addressInput } from "../inputs/CustomerCreateWithoutCustomer_addressInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCustomer_addressInput", {})
export class CustomerCreateOrConnectWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_addressInput;
}
