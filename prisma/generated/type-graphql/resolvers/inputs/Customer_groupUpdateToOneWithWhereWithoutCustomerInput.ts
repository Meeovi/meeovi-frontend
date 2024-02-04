import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateWithoutCustomerInput } from "../inputs/Customer_groupUpdateWithoutCustomerInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpdateToOneWithWhereWithoutCustomerInput", {})
export class Customer_groupUpdateToOneWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutCustomerInput, {
    nullable: false
  })
  data!: Customer_groupUpdateWithoutCustomerInput;
}
