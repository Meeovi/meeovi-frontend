import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutDocumentInput } from "../inputs/OrderCreateOrConnectWithoutDocumentInput";
import { OrderCreateWithoutDocumentInput } from "../inputs/OrderCreateWithoutDocumentInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedOneWithoutDocumentInput", {})
export class OrderCreateNestedOneWithoutDocumentInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutDocumentInput, {
    nullable: true
  })
  create?: OrderCreateWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutDocumentInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
