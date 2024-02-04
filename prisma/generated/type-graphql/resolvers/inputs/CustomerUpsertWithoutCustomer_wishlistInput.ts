import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateWithoutCustomer_wishlistInput";
import { CustomerUpdateWithoutCustomer_wishlistInput } from "../inputs/CustomerUpdateWithoutCustomer_wishlistInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutCustomer_wishlistInput", {})
export class CustomerUpsertWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_wishlistInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCustomer_wishlistInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_wishlistInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_wishlistInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
