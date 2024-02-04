import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_tagInput } from "../inputs/CustomerCreateWithoutCustomer_tagInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCustomer_tagInput", {})
export class CustomerCreateOrConnectWithoutCustomer_tagInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_tagInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_tagInput;
}
