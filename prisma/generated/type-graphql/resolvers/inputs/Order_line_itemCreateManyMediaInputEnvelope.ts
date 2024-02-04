import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyMediaInput } from "../inputs/Order_line_itemCreateManyMediaInput";

@TypeGraphQL.InputType("Order_line_itemCreateManyMediaInputEnvelope", {})
export class Order_line_itemCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateManyMediaInput], {
    nullable: false
  })
  data!: Order_line_itemCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
