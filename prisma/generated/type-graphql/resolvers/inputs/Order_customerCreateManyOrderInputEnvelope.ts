import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManyOrderInput } from "../inputs/Order_customerCreateManyOrderInput";

@TypeGraphQL.InputType("Order_customerCreateManyOrderInputEnvelope", {})
export class Order_customerCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_customerCreateManyOrderInput], {
    nullable: false
  })
  data!: Order_customerCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
