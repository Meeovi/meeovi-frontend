import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCreateManyOrderInput } from "../inputs/Order_tagCreateManyOrderInput";

@TypeGraphQL.InputType("Order_tagCreateManyOrderInputEnvelope", {})
export class Order_tagCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_tagCreateManyOrderInput], {
    nullable: false
  })
  data!: Order_tagCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
