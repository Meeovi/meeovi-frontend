import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManyCustomerInput } from "../inputs/Customer_addressCreateManyCustomerInput";

@TypeGraphQL.InputType("Customer_addressCreateManyCustomerInputEnvelope", {})
export class Customer_addressCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_addressCreateManyCustomerInput], {
    nullable: false
  })
  data!: Customer_addressCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
