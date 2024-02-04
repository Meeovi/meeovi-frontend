import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationScalarWhereInput } from "../inputs/Customer_group_translationScalarWhereInput";
import { Customer_group_translationUpdateManyMutationInput } from "../inputs/Customer_group_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput", {})
export class Customer_group_translationUpdateManyWithWhereWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => Customer_group_translationScalarWhereInput, {
    nullable: false
  })
  where!: Customer_group_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_group_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_group_translationUpdateManyMutationInput;
}
