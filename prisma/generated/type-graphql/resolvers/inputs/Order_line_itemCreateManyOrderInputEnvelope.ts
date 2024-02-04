import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyOrderInput } from "../inputs/Order_line_itemCreateManyOrderInput";

@TypeGraphQL.InputType("Order_line_itemCreateManyOrderInputEnvelope", {})
export class Order_line_itemCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateManyOrderInput], {
    nullable: false
  })
  data!: Order_line_itemCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
