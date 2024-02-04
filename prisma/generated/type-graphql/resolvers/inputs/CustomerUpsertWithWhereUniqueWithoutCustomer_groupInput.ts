import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutCustomer_groupInput } from "../inputs/CustomerCreateWithoutCustomer_groupInput";
import { CustomerUpdateWithoutCustomer_groupInput } from "../inputs/CustomerUpdateWithoutCustomer_groupInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput", {})
export class CustomerUpsertWithWhereUniqueWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutCustomer_groupInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutCustomer_groupInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutCustomer_groupInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutCustomer_groupInput;
}
