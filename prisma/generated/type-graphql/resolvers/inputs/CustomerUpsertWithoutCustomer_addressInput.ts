import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_addressInput } from "../inputs/CustomerCreateWithoutCustomer_addressInput";
import { CustomerUpdateWithoutCustomer_addressInput } from "../inputs/CustomerUpdateWithoutCustomer_addressInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutCustomer_addressInput", {})
export class CustomerUpsertWithoutCustomer_addressInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_addressInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_addressInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_addressInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
