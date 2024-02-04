import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutDocumentInput } from "../inputs/OrderUpdateWithoutDocumentInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpdateToOneWithWhereWithoutDocumentInput", {})
export class OrderUpdateToOneWithWhereWithoutDocumentInput {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutDocumentInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutDocumentInput;
}
