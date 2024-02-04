import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateWithoutCustomer_group_translationInput } from "../inputs/Customer_groupUpdateWithoutCustomer_group_translationInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput", {})
export class Customer_groupUpdateToOneWithWhereWithoutCustomer_group_translationInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomer_group_translationInput, {
    nullable: false
  })
  data!: Customer_groupUpdateWithoutCustomer_group_translationInput;
}
