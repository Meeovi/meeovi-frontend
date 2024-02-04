import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateWithoutCustomer_groupInput } from "../inputs/Customer_group_translationCreateWithoutCustomer_groupInput";
import { Customer_group_translationUpdateWithoutCustomer_groupInput } from "../inputs/Customer_group_translationUpdateWithoutCustomer_groupInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput", {})
export class Customer_group_translationUpsertWithWhereUniqueWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_group_translationUpdateWithoutCustomer_groupInput, {
    nullable: false
  })
  update!: Customer_group_translationUpdateWithoutCustomer_groupInput;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateWithoutCustomer_groupInput, {
    nullable: false
  })
  create!: Customer_group_translationCreateWithoutCustomer_groupInput;
}
