import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadCreateManyMediaInput } from "../inputs/Order_line_item_downloadCreateManyMediaInput";

@TypeGraphQL.InputType("Order_line_item_downloadCreateManyMediaInputEnvelope", {})
export class Order_line_item_downloadCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_line_item_downloadCreateManyMediaInput], {
    nullable: false
  })
  data!: Order_line_item_downloadCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
