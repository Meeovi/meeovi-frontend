import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_tagInput } from "../inputs/CustomerCreateWithoutCustomer_tagInput";
import { CustomerUpdateWithoutCustomer_tagInput } from "../inputs/CustomerUpdateWithoutCustomer_tagInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpsertWithoutCustomer_tagInput", {})
export class CustomerUpsertWithoutCustomer_tagInput {
  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_tagInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCustomer_tagInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_tagInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_tagInput;

  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;
}
