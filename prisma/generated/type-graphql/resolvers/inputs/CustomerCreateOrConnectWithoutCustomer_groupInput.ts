import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_groupInput } from "../inputs/CustomerCreateWithoutCustomer_groupInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCustomer_groupInput", {})
export class CustomerCreateOrConnectWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_groupInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_groupInput;
}
