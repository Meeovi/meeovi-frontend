import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyMutationInput } from "../inputs/CustomerUpdateManyMutationInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput", {})
export class CustomerUpdateManyWithWhereWithoutPayment_method_customer_default_payment_method_idTopayment_methodInput {
  @TypeGraphQL.Field(_type => CustomerScalarWhereInput, {
    nullable: false
  })
  where!: CustomerScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerUpdateManyMutationInput;
}
