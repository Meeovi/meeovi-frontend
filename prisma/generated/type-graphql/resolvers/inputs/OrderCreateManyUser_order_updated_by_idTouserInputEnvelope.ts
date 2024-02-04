import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyUser_order_updated_by_idTouserInput } from "../inputs/OrderCreateManyUser_order_updated_by_idTouserInput";

@TypeGraphQL.InputType("OrderCreateManyUser_order_updated_by_idTouserInputEnvelope", {})
export class OrderCreateManyUser_order_updated_by_idTouserInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyUser_order_updated_by_idTouserInput], {
    nullable: false
  })
  data!: OrderCreateManyUser_order_updated_by_idTouserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
