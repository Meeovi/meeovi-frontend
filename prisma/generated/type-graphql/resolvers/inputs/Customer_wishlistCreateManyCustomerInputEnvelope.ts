import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateManyCustomerInput } from "../inputs/Customer_wishlistCreateManyCustomerInput";

@TypeGraphQL.InputType("Customer_wishlistCreateManyCustomerInputEnvelope", {})
export class Customer_wishlistCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_wishlistCreateManyCustomerInput], {
    nullable: false
  })
  data!: Customer_wishlistCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
