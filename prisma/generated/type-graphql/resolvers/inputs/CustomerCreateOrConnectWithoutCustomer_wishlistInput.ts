import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateWithoutCustomer_wishlistInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutCustomer_wishlistInput", {})
export class CustomerCreateOrConnectWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_wishlistInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_wishlistInput;
}
