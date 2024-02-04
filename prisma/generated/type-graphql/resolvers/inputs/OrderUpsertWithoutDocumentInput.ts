import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutDocumentInput } from "../inputs/OrderCreateWithoutDocumentInput";
import { OrderUpdateWithoutDocumentInput } from "../inputs/OrderUpdateWithoutDocumentInput";
import { OrderWhereInput } from "../inputs/OrderWhereInput";

@TypeGraphQL.InputType("OrderUpsertWithoutDocumentInput", {})
export class OrderUpsertWithoutDocumentInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutDocumentInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: OrderCreateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;
}
