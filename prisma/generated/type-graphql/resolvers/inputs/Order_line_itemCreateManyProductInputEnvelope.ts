import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyProductInput } from "../inputs/Order_line_itemCreateManyProductInput";

@TypeGraphQL.InputType("Order_line_itemCreateManyProductInputEnvelope", {})
export class Order_line_itemCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateManyProductInput], {
    nullable: false
  })
  data!: Order_line_itemCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
