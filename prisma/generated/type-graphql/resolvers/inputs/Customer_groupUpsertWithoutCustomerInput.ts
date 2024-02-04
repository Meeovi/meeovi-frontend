import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateWithoutCustomerInput } from "../inputs/Customer_groupCreateWithoutCustomerInput";
import { Customer_groupUpdateWithoutCustomerInput } from "../inputs/Customer_groupUpdateWithoutCustomerInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpsertWithoutCustomerInput", {})
export class Customer_groupUpsertWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomerInput, {
    nullable: false
  })
  update!: Customer_groupUpdateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_groupCreateWithoutCustomerInput, {
    nullable: false
  })
  create!: Customer_groupCreateWithoutCustomerInput;

  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;
}
