import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateManyPromotionInput } from "../inputs/Order_line_itemCreateManyPromotionInput";

@TypeGraphQL.InputType("Order_line_itemCreateManyPromotionInputEnvelope", {})
export class Order_line_itemCreateManyPromotionInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_line_itemCreateManyPromotionInput], {
    nullable: false
  })
  data!: Order_line_itemCreateManyPromotionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
