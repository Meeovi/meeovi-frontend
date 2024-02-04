import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyCustomerInput } from "../inputs/Order_customerCreateManyCustomerInput";

@TypeGraphQL.InputType("Order_customerCreateManyCustomerInputEnvelope", {})
export class Order_customerCreateManyCustomerInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_customerCreateManyCustomerInput], {
    nullable: false
  })
  data!: Order_customerCreateManyCustomerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
