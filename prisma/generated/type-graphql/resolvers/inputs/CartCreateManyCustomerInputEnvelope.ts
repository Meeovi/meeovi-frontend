import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyCustomerInput } from "../inputs/CartCreateManyCustomerInput";

@TypeGraphQL.InputType("CartCreateManyCustomerInputEnvelope", {})
export class CartCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyCustomerInput], {
    nullable: false
  })
  data!: CartCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
