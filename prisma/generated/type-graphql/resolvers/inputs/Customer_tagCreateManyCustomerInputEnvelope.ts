import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_tagCreateManyCustomerInput } from "../inputs/Customer_tagCreateManyCustomerInput";

@TypeGraphQL.InputType("Customer_tagCreateManyCustomerInputEnvelope", {})
export class Customer_tagCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_tagCreateManyCustomerInput], {
    nullable: false
  })
  data!: Customer_tagCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
