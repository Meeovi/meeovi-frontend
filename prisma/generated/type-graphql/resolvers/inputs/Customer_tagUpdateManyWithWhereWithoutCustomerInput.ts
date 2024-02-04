import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagScalarWhereInput } from "../inputs/Customer_tagScalarWhereInput";
import { Customer_tagUpdateManyMutationInput } from "../inputs/Customer_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_tagUpdateManyWithWhereWithoutCustomerInput", {})
export class Customer_tagUpdateManyWithWhereWithoutCustomerInput {
  @TypeGraphQL.Field(_type => Customer_tagScalarWhereInput, {
    nullable: false
  })
  where!: Customer_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_tagUpdateManyMutationInput;
}
